import { FirebaseAuthProvider as createAuthProvider } from "react-admin-firebase";

import { firebaseAppCredentials } from "../config/firebase";

let baseAuthProvider = createAuthProvider(firebaseAppCredentials, {
  logging: true,
});

export let authProvider = {
  ...baseAuthProvider,
  getIdentity: async () => {
    let user = await baseAuthProvider.getAuthUser();

    let { uid, email, photoURL } = user;

    return {
      id: uid,
      fullName: `${email ?? ""}`,
      avatar: `${photoURL ?? ""}`,
    };
  },
};
