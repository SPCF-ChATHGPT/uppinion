import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useEventStatus = async (eventId, action) => {
  try {
    const eventRef = doc(db, "events", eventId);

    switch (action) {
      case "open":
        // Sets the event status to open.
        await updateDoc(eventRef, {
          status: "OPEN",
        });
        break;

      case "close":
        // Sets the event status to close.
        await updateDoc(eventRef, {
          status: "CLOSE",
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
