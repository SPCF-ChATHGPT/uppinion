import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useVote = async (suggestionId, action, userId) => {
  try {
    const suggestionRef = doc(db, "suggestions", suggestionId);

    switch (action) {
      case "add":
        // Atomically add a new user id to suggestion's votes.
        await updateDoc(suggestionRef, {
          votes: arrayUnion(userId),
        });
        break;

      case "delete":
        // Atomically remove a user id from suggestion's votes.
        await updateDoc(suggestionRef, {
          votes: arrayRemove(userId),
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
