import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "users"),
          where("authId", "==", currentUser.uid)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setUser({...doc.data(), userId: doc.id});
        });
      }
    };

    fetchUser();
  }, [currentUser]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
