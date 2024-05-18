import { BrowserRouter } from "react-router-dom";
import { Admin, Resource } from "react-admin";

import { theme } from "./core/theming";
import { menuItems } from "./core/config/menu";
import { authProvider } from "./core/providers/auth";
import { dataProvider } from "./core/providers/data";
import { i18nProvider } from "./core/providers/i18n";
import { canActivate } from "./core/helpers/canActivate";
import AppLayout from "./components/templates/app-layout";
import AppProvider from "./components/templates/app-provider";

import userResourceProps from "./pages/users";

export const App = () => (
  <BrowserRouter>
    <AppProvider
      theme={theme}
      items={menuItems}
      canActivate={canActivate}
    >
      <Admin
        disableTelemetry
        layout={AppLayout}
        i18nProvider={i18nProvider}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Resource {...userResourceProps} />
      </Admin>
    </AppProvider>
  </BrowserRouter>
);
