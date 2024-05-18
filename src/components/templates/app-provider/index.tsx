import React from "react";
import { Loading } from "react-admin";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RbacProvider } from "@blackbox-vision/ra-rbac";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

import { MenuItemsProvider } from "../../../core/context/menu";

type Props = {
  items: any[];
  locale?: any;
  theme: Theme;
  canActivate: any;
  children: any;
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
          </LocalizationProvider>
        </ThemeProvider>
      </MenuItemsProvider>
    </RbacProvider>
  );
};

AppProvider.displayName = "AppProvider";

export default AppProvider;
