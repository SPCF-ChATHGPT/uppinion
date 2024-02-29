import {
  doc,
  getDoc,
  collection,
  where,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const useEvent = (eventId, userId) => {
  const [suggestions, setSuggestions] = useState([]);
  const [mySuggestion, setMySuggestion] = useState([]);
  const [categorizedSuggestions, setCategorizedSuggestions] = useState({});
  const [event, setEvent] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    let categorizedTopSuggestions = {
      venue: [],
      theme: [],
      program: [],
      others: [],
    };
    setEvent([]);

    const getEvent = async () => {
      setLoading(true);
      try {
        const eventRef = doc(db, "events", eventId);
        const docSnap = await getDoc(eventRef);

        if (docSnap.exists() && userId && isMounted) {
          setEvent({
            ...docSnap.data(),
            eventId: docSnap.id,
          });

          const suggestionRef = collection(db, "suggestions");
          const q = query(suggestionRef, where("event_id", "==", eventId));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let voted = { voted: false };
            if (doc.data().user_id === userId) {
              setMySuggestion((prevSuggestion) => [
                ...prevSuggestion,
                {
                  suggestionId: doc.id,
                  ...doc.data(),
                },
              ]);
            }

            if (doc.data().votes.includes(userId)) {
              voted.voted = true;
            }

            setSuggestions((prevSuggestion) => [
              ...prevSuggestion,
              {
                suggestionId: doc.id,
                ...voted,
                ...doc.data(),
              },
            ])

            if (doc.data().votes.length > 0) {
              categorizedTopSuggestions[doc.data().type.toLowerCase()].push({
                suggestionId: doc.id,
                ...doc.data(),
                ...voted,
              });
            }
          });

          setCategorizedSuggestions(categorizedTopSuggestions);
        } else {
          setError("No event found.");
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

    getEvent();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [eventId, userId]);


  return {
    suggestions: suggestions,
    mySuggestion: mySuggestion,
    categorizedSuggestions: categorizedSuggestions,
    event: event,
    error: error,
    loading: loading,
  };
};
