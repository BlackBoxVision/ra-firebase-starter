import React from "react";
import { ResourceProps } from "react-admin";
import { Resources } from "../../core/constants/enums";

let resourceProps: ResourceProps = {
  name: Resources.USERS,
  // We use React.lazy so we can lazy load modules
  list: React.lazy(() => import(/* webpackChunkName: "users-list" */ "./list")),
  show: React.lazy(() => import(/* webpackChunkName: "users-show" */ "./show")),
  create: React.lazy(
    () => import(/* webpackChunkName: "users-create" */ "./create")
  ),
  edit: React.lazy(() => import(/* webpackChunkName: "users-edit" */ "./edit")),
};

export default resourceProps;
