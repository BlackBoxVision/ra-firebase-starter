import { Permission } from "@blackbox-vision/ra-rbac";

export const canActivate = (
  permissions: Permission[] | any,
  resource: string,
  action: string,
  field?: string
) => {
  // Your can activate logic
  return true;
};
