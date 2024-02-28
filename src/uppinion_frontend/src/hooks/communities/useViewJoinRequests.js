import {
  doc,
  getDoc,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const useViewJoinRequests = (communityId) => {
  const [joinRequests, setJoinRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    const getRequests = async () => {
      setLoading(true);
      setJoinRequests([]);

      try {
        const communityRef = doc(db, "communities", communityId);
        const docSnap = await getDoc(communityRef);

        if (docSnap.exists() && isMounted) {
          const requests = docSnap.data().join_requests;
          let userRef = null;
          let user = {};
          let requestArr = [];

          await Promise.all(
            requests.map(async (request) => {
              const userRef = doc(db, "users", request);
              const userSnap = await getDoc(userRef);

              if (userSnap.exists()) {
                requestArr.push({ ...userSnap.data(), userId: userSnap.id });
              }
            })
          );    

          setJoinRequests([...requestArr]);
        } else {
          setError("No join request found.");
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

    getRequests();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [communityId]);

  return {
    joinRequests: joinRequests,
    error: error,
    loading: loading,
  };
};
