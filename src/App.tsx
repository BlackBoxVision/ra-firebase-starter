import React from "react";
import { Admin } from "react-admin";
import esLocale from "date-fns/locale/es";
import { createBrowserHistory } from "history";

import { theme } from "./core/theming";

import { menuItems } from "./core/config/menu";

import { i18nProvider } from "./core/providers/i18n";
import { authProvider } from "./core/providers/auth";
import { dataProvider } from "./core/providers/data";

import AppLayout from "./components/templates/app-layout";
import AppProvider from "./components/templates/app-provider";

let browserHistory = createBrowserHistory();

const App = () => {
  return (
    <AppProvider locale={esLocale} theme={theme} items={menuItems}>
      <Admin
        disableTelemetry
        layout={AppLayout}
        history={browserHistory}
        i18nProvider={i18nProvider}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        {/* TODO: add your resources under pages folder and import and add Resources here */}
      </Admin>
    </AppProvider>
  );
};

export default App;
