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

export const useCommunity = (communityId) => {
  const [community, setCommunity] = useState({});
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    const getCommunity = async () => {
      setLoading(true);
      try {
        const communityRef = doc(db, "communities", communityId);
        const docSnap = await getDoc(communityRef);

        if (docSnap.exists() && isMounted) {
          setCommunity({
            ...docSnap.data(),
            communityId: docSnap.id,
          });

          const eventRef = collection(db, "events");
          const q = query(eventRef, where("community_id", "==", communityId));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setEvents((prevEvent) => [
              ...prevEvent,
              { eventId: doc.id, ...doc.data() },
            ]);
          });
        } else {
          setError("No community found.");
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

    getCommunity();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [communityId]);

  return { community: community, events: events, error: error, loading: loading };
};
