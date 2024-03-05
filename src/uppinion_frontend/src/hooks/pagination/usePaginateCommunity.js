import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export const usePaginateCommunity = (lastVisible, userId) => {
  const PAGINATED_RESULT_LIMIT = 5;
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Flag to track component mount status
    let isMounted = true;
    if (communities.length > 0) {
      setLoading(false);
    }

    const getCommunities = async () => {
      try {
        let communityArr = [];
        const queryConstraint = !lastVisible
          ? query(
              collection(db, "communities"),
              orderBy("name"),
              limit(PAGINATED_RESULT_LIMIT)
            )
          : query(
              collection(db, "communities"),
              orderBy("name"),
              startAfter(lastVisible.name),
              limit(PAGINATED_RESULT_LIMIT)
            );

        const documentSnapshots = await getDocs(queryConstraint);
        documentSnapshots.forEach((doc) => {
          let currentCommunity = {
            communityId: doc.id,
            ...doc.data(),
            memberCount: doc.data().members.length,
            requestedToJoin: false,
            isMember: false,
          };
          if (doc.data().join_requests.includes(userId)) {
            currentCommunity.requestedToJoin = true;
            communityArr.push(currentCommunity);
          } else if (doc.data().members.includes(userId)) {
            currentCommunity.isMember = true;
            communityArr.push(currentCommunity);
          } else {
            communityArr.push(currentCommunity);
          }
        });

        // Only update state if component is still mounted
        if (isMounted) {
          setCommunities((prevCommunities) =>
            !lastVisible ? communityArr : [...prevCommunities, ...communityArr]
          );
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

    getCommunities();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [lastVisible, userId]); // Dependency array

  return { communities, error, loading };
};
