import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const userCol = collection(db, 'users');

export async function doesUsernameExist(username) {
  const q = query(userCol, where('username', '==', username));
  const querySnapshot = await getDocs(q);

  return !!querySnapshot.docs.length > 0;
}

export async function getUserByUserId(userId) {
  const q = query(userCol, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const userData = querySnapshot.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return userData;
}
