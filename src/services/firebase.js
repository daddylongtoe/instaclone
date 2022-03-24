import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function doesUsernameExist(username) {
  const q = query(collection(db, 'users'), where('username', '==', username));

  const querySnapshot = await getDocs(q);
  const resultArray = querySnapshot.docs.map((user) => user.data().length > 0);

  return !!resultArray.length;
}
