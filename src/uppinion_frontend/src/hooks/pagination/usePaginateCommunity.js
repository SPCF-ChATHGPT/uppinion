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

export const usePaginateCommunity = (lastVisible) => {
  const PAGINATED_RESULT_LIMIT = 5;
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Flag to track component mount status
    let isMounted = true;

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
          communityArr.push({
            communityId: doc.id,
            ...doc.data(),
          });
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
      }
    };

    getCommunities();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [lastVisible]); // Dependency array

  return { communities, error };
};
