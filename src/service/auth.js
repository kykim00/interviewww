import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class Auth {
  login(name) {
    const provider = this.getProvider(name);
    return firebaseAuth.signInWithPopup(provider);
  }
  logout() {
    firebaseAuth.signOut();
  }
  getProvider(name) {
    switch (name) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  }
}
export default Auth;
