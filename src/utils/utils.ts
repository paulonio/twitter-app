import {
  doc,
  DocumentSnapshot,
  DocumentData,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
  setDoc,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';

import { auth, db, signInWithGoogle } from '@src/firebase';

import type { TweetType } from '@store/slices/tweetSlice';
import type { UserType } from '@store/slices/authSlice';

import { MONTH_MAP, TWITTER, USERS } from '@constants/constants';
import {
  EmailAuthCredential,
  EmailAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';

export const getDocument = async (column: string, document: string) => {
  const docRef = doc(db, column, document);
  const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
  return docSnap;
};

export const updateDocument = async (column: string, document: string, payload: TweetType) => {
  try {
    const twitterRef = collection(db, column);
    const snap = await getDocument(column, document);

    if (snap.exists()) {
      const res: TweetType[] = snap.data().tweets ? snap.data().tweets : [];
      const data = [payload, ...res];
      await setDoc(doc(twitterRef, document), { tweets: data });
      return data;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }

  return null;
};

export const updateUsers = async (
  column: string,
  document: string,
  payload: UserType | UserType[]
) => {
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

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { user }: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData: UserType = {
      email: user.email!,
      displayName: user.displayName!,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    await updateUsers(TWITTER, USERS, userData);
    return userData;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }
  return null;
};

export const signUpWithEmail = async (email: string, password: string, name: string) => {
  try {
    const { user }: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userData: UserType = {
      email: user.email!,
      displayName: name,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    await updateProfile(user, { displayName: name });
    await updateUsers(TWITTER, USERS, userData);
    await signOut(auth);
    return userData;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }
  return null;
};

export const signUpWithGoogle = async () => {
  try {
    const { user }: UserCredential = await signInWithGoogle();
    const userData: UserType = {
      email: user.email!,
      displayName: user.displayName!,
      uid: user.uid,
      gender: 'male',
      telegram: '',
    };
    await updateUsers(TWITTER, USERS, userData);
    return userData;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }
  return null;
};

export const updateUserPassword = async (oldPassword: string, newPassword: string, user: User) => {
  try {
    if (user.email) {
      const creds: EmailAuthCredential = await EmailAuthProvider.credential(
        user.email,
        oldPassword
      );
      await reauthenticateWithCredential(user, creds);
      await updatePassword(user, newPassword);
      await auth.signOut();
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    }
  }
  return null;
};

export const isUserArray = (value: unknown): value is UserType[] => {
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

export const filterUsers = (users: UserType[], filterValue: string) => {
  return users.filter(({ displayName }) => displayName.includes(filterValue));
};

export const parseDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  return `${MONTH_MAP[month]} ${day}`;
};
