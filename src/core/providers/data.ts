import { FirebaseDataProvider as createDataProvider } from "react-admin-firebase";

import { firebaseAppCredentials } from "../config/firebase";

export let dataProvider = createDataProvider(firebaseAppCredentials, {
  logging: true,
  softDelete: false,
  persistence: "local",
  metaFieldCasing: "camel",
  associateUsersById: true,
  dontAddIdFieldToDoc: false,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
