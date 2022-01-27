import { FirebaseAuthProvider as createAuthProvider } from "react-admin-firebase";

import { firebaseAppCredentials } from "../config/firebase";

export let authProvider = createAuthProvider(firebaseAppCredentials, {
  logging: true,
});
