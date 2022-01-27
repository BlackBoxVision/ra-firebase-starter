import React from "react";
import { CoreLayoutProps } from "react-admin";
import { Layout } from "@blackbox-vision/ra-layout";

import { useMenuItemsContext } from "../../../core/context/menu";

import { useStyles } from "./styles";

type Props = CoreLayoutProps & {
  [key: string]: any;
};

// TODO: check when sidebar is open to pass style information
let AppLayout: React.FC<Props> = (props: Props) => {
  let menuItems = useMenuItemsContext();
  let styles = useStyles();

  let iconStyle = {
    color: "#FFF",
  };

  return (
    <Layout
      {...(props as any)}
      items={menuItems}
      iconStyle={iconStyle}
      layoutStyles={styles}
      sidebarOpenWidth={240}
    />
  );
};

AppLayout.displayName = "AppLayout";

export default AppLayout;
