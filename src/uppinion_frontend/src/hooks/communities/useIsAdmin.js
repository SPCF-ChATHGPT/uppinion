import {
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const useIsAdmin = (communityId, userId) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    setIsAdmin(false);

    const checkIsAdmin = async () => {
      setLoading(true);
      try {
        const communityRef = doc(db, "communities", communityId);
        const docSnap = await getDoc(communityRef);

        if (docSnap.exists() && userId && isMounted) {
          if (docSnap.data().admin.includes(userId)) {
            setIsAdmin(true);
          }
        } else {
          setIsAdmin(false);
          setError("Not an admin of this group.");
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

    checkIsAdmin();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [communityId, userId]);

  return {
    isAdmin: isAdmin,
    error: error,
    loading: loading,
  };
};
