import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useCommunity = (communityId) => {
  const [community, setCommunity] = useState({});
  const [error, setError] = useState(null);
  useEffect(async () => {
    const getCommunity = async () => {
      const docRef = doc(db, "communities", communityId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCommunity({
          ...docSnap.data(),
          communityId: docSnap.id,
        });
      } else {
        setError("No community found.");
      }
    };

    if (communityId) {
      await getCommunity();
    }
  }, [communityId]);

  return { community: community, error: error };
};
