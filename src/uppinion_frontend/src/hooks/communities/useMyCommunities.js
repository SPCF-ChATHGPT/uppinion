import { collection, where, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const useMyCommunities = (communityId) => {
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    const getCommunity = async () => {
      setLoading(true);
      try {
        const eventRef = collection(db, "communities");
        const q = query(
          eventRef,
          where("admin", "array-contains", communityId)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (isMounted) {
            setCommunities((prevCommunity) => [
              ...prevCommunity,
              { communityId: doc.id, ...doc.data() },
            ]);
          }
        });
      } catch (error) {
        if (isMounted) {
          console.log(error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      getCommunity();
    }

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [communityId]);

  return {
    communities: communities,
    error: error,
    loading: loading,
  };
};
