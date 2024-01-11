import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Loading er kaj hocche
  // user na pele load hobe orthat true-> user logged in na
  //user  pele load hobe na orthat false-> user logged in
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
   return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // onAuthChange watch korte thakbe kono kichu change hocche kina
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false); // false kore ditesi karon loading hoye gese & user er info peye gesi
    });
    return () => {
      unsubscribe(); // ekhon r watch korte thakbe na jodi application ta off kore dei
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
