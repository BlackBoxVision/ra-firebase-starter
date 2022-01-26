import { FirebaseDataProvider } from "react-admin-firebase";

import { firebaseAppCredentials } from "../firebase/config";
import { firebaseApp } from "../firebase";

export let dataProvider = FirebaseDataProvider(firebaseAppCredentials, {
  logging: true,
  app: firebaseApp,
  persistence: "local",
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
