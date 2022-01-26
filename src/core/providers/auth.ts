import { FirebaseAuthProvider } from "react-admin-firebase";

import { firebaseAppCredentials } from "../firebase/config";

export let authProvider = FirebaseAuthProvider(firebaseAppCredentials, {
  logging: true,
  app: null,
});
