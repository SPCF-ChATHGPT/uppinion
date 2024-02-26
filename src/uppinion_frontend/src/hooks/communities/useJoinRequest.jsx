import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useJoinRequest = async (communityId, action, userId) => {
  try {
    const communityRef = doc(db, "communities", communityId);

    switch (action) {
      case "add":
        // Atomically add a new user id to join requests.
        await updateDoc(communityRef, {
          join_requests: arrayUnion(userId),
        });
        break;

      case "delete":
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
    return { error: error };
    console.log(error);
  }
};
