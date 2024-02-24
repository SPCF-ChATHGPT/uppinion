import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = useContext(AuthContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser && userId) {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser({...docSnap.data(), userId: docSnap.id});
        } else {
          // docSnap.data() will be undefined in this case
          setUser(null);
        }
      }
    };

    fetchUser();
  }, [currentUser, userId]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
