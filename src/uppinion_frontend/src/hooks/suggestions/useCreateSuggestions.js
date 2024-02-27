import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useCreateSuggestions = async (data) => {
  let success = {};
  if (data) {
    try {
      // Add a new document in the communities collection with a generated id.
      const suggestion = await addDoc(collection(db, "suggestions"), {
        description: data.description,
        event_id: data.eventId,
        name: data.name,
        type: data.type,
        user_id: data.userId,
        votes: []
      });
      success = {
        suggestionId: suggestion.id,
        success: true,
        message: "A suggestion has been created successfully.",
      };
    } catch (error) {
      success = {
        suggestionId: null,
        success: false,
        message: "An error occured, try again.",
      };
    }
  }

  return success;
};
