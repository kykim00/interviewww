import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = ({ onLogout }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
  return (
    <header>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <h1>Contact Numbers</h1>
      {user && (
        <>
          <img src={user.photoURL} alt=""></img>
          <span>{user.displayName}</span>
        </>
      )}
    </header>
  );
};

export default Header;
