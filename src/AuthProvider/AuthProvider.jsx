import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //user create function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in function
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //current user find
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("Current User: ", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  //added user name and photo
  const addUserNameImg = (name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photo
    })
  }

  //log out function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //auth info transfer
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    logIn,
    googleLogIn,
    logOut,
    addUserNameImg,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
