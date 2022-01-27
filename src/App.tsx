import React from "react";
import esLocale from "date-fns/locale/es";
import { createBrowserHistory } from "history";
import { Admin, ListGuesser } from "react-admin";
import { RbacResource as Resource } from "@blackbox-vision/ra-rbac";

import { theme } from "./core/theming";

import { menuItems } from "./core/config/menu";

import { i18nProvider } from "./core/providers/i18n";
import { authProvider } from "./core/providers/auth";
import { dataProvider } from "./core/providers/data";

import { canActivate } from "./core/helpers/canActivate";

import AppLayout from "./components/templates/app-layout";
import AppProvider from "./components/templates/app-provider";

let browserHistory = createBrowserHistory();

const App = () => {
  return (
    <AppProvider
      theme={theme}
      items={menuItems}
      locale={esLocale}
      canActivate={canActivate}
    >
      <Admin
        disableTelemetry
        layout={AppLayout}
        history={browserHistory}
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        {/* TODO: add your resources under pages folder and import and add Resources here */}
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </AppProvider>
  );
};

export default App;
