import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useJoinRequestStatus = async (communityId, action, userId) => {
  try {
    const communityRef = doc(db, "communities", communityId);

    switch (action) {
      case "accept":
        // Atomically add a new user id to members array.
        await updateDoc(communityRef, {
          members: arrayUnion(userId),
        });
        
        await updateDoc(communityRef, {
          join_requests: arrayRemove(userId),
        });
        break;

      case "reject":
        // Atomically remove a user id from join requests.
        await updateDoc(communityRef, {
          join_requests: arrayRemove(userId),
        });
        break;

      default:
        break;
    }

    return { error: null };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
