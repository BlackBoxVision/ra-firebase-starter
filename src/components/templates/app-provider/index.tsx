import React from "react";
import { Loading } from "react-admin";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CssBaseline, Theme, ThemeProvider } from "@material-ui/core";

import { MenuItemsProvider } from "../../../core/context/menu";
import { RbacProvider } from "@blackbox-vision/ra-rbac";

type Props = {
  items: any[];
  locale: any;
  theme: Theme;
  canActivate: any;
};

// TODO: implement dark mode support
let AppProvider: React.FC<Props> = ({
  items,
  theme,
  locale,
  children,
  canActivate,
}) => {
  return (
    <RbacProvider canActivate={canActivate}>
      <MenuItemsProvider items={items}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
            <CssBaseline />
            <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MenuItemsProvider>
    </RbacProvider>
  );
};

AppProvider.displayName = "AppProvider";

export default AppProvider;
