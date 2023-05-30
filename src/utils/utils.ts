import {
  doc,
  DocumentSnapshot,
  DocumentData,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { TweetType } from '../store/slices/tweetSlice';

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
