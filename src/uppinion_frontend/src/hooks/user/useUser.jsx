import {
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const useUser = (userId) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      setLoading(true);
      try {
        const userRef = doc(db, "users", userId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists() && userId && isMounted) {
          setUser({
            ...docSnap.data(),
            userId: docSnap.id,
          });
        } else {
          setError("No user found.");
        }
      } catch (error) {
        if (isMounted) {
          console.log(error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getUser();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [userId]);

  return {
    user: user,
    error: error,
    loading: loading,
  };
};
