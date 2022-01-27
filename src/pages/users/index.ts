import React from "react";
import { ResourceProps } from "react-admin";

let resourceProps: ResourceProps = {
  name: "users",
  // We use React.lazy so we can lazy load modules
  list: React.lazy(() => import(/* webpackChunkName: "users-list" */ "./list")),
};

export default resourceProps;
