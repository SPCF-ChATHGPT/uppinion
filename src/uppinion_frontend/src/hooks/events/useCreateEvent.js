import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useCreateEvent = async (data) => {
  let success = {};
  if (data) {
    try {
      // Add a new document in the communities collection with a generated id.
      const event = await addDoc(collection(db, "events"), {
        community_id: data.communityId,
        date: data.date,
        description: data.description,
        name: data.name,
        image: data.image,
        status: data.status,
        top_suggestions: [],
      });
      success = {
        eventId: event.id,
        success: true,
        message: "An event has been created successfully.",
      };
    } catch (error) {
      success = {
        eventId: null,
        success: false,
        message: "An error occured, try again.",
      };
    }
  }

  return success;
};
