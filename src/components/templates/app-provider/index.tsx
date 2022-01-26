import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CssBaseline, Theme, ThemeProvider } from "@material-ui/core";

import { MenuItemsProvider } from "../../../core/context/menu";
import { Loading } from "react-admin";

type Props = {
  items: any[];
  locale: any;
  theme: Theme;
};

// TODO: implement dark mode support
let AppProvider: React.FC<Props> = ({ items, locale, theme, children }) => {
  return (
    <MenuItemsProvider items={items}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
          <CssBaseline />
          <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </MenuItemsProvider>
  );
};

AppProvider.displayName = "AppProvider";

export default AppProvider;
