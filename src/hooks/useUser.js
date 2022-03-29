import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const { currentUser } = useAuth();
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjById() {
      const [response] = await getUserByUserId(currentUser.uid);
      setActiveUser(response);
    }
    if (currentUser?.uid) {
      getUserObjById();
    }
  }, [currentUser?.uid]);

  return { userData: activeUser };
}
