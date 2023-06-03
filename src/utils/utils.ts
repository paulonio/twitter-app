import {
  doc,
  DocumentSnapshot,
  DocumentData,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';
import { db } from '../../firebase';
import type { TweetType } from '../store/slices/tweetSlice';
import type { User } from '../store/slices/authSlice';

export const getDocument = async (column: string, document: string) => {
  const docRef = doc(db, column, document);
  const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
  return docSnap;
};

export const updateDocument = async (column: string, document: string, payload: TweetType) => {
  const twitterRef = collection(db, column);
  await updateDoc(doc(twitterRef, document), { tweets: arrayUnion(payload) });
  const docSnap: DocumentSnapshot<DocumentData> = await getDocument(column, document);
  return docSnap;
};

export const updateUsers = async (column: string, document: string, payload: User | User[]) => {
  const twitterRef = collection(db, column);
  if (payload instanceof Array) {
    await updateDoc(doc(twitterRef, document), { users: payload });
  } else {
    await updateDoc(doc(twitterRef, document), { users: arrayUnion(payload) });
  }
  const docSnap: DocumentSnapshot<DocumentData> = await getDocument(column, document);
  return docSnap;
};

export const uploadImage = async (image: File | undefined) => {
  if (!image) {
    return '';
  }

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytesResumable(storageRef, image);
    return await getDownloadURL(storageRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }
  return '';
};

export const isUserArray = (value: unknown): value is User[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  return value.some((item) => !!item.uid);
};

export const isTweetArray = (value: unknown): value is TweetType[] => {
  if (!Array.isArray(value)) {
    return false;
  }

  return value.some((item) => !!item.tweet);
};

export const filterTweets = (tweets: TweetType[], filterValue: string) => {
  return tweets.filter(({ tweet }) => tweet.includes(filterValue));
};

export const filterUsers = (users: User[], filterValue: string) => {
  return users.filter(({ displayName }) => displayName.includes(filterValue));
};
