import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const useCreateCommunity = async (data) => {
  let success = {};
  if (data) {
    try {
      // Add a new document in the communities collection with a generated id.
      await addDoc(collection(db, "communities"), {
        admin: [data.admin],
        image: data.image,
        description: data.description,
        name: data.name,
        join_requests: [],
      });
      success = {
        success: true,
        message: "Community created successfully.",
      };
    } catch (error) {
      success = { success: false, message: "An error occured, try again." };
    }
  }

  return success;
};
