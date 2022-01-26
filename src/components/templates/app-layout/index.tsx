import React from "react";
import { CoreLayoutProps } from "react-admin";
import { Layout } from "@blackbox-vision/ra-layout";

import { useMenuItemsContext } from "../../../core/context/menu";

import { useStyles } from "./styles";

type Props = CoreLayoutProps & {
  [key: string]: any;
};

let AppLayout: React.FC<Props> = (props: Props) => {
  let menuItems = useMenuItemsContext();
  let styles = useStyles();

  let iconStyle = {
    color: "#FFF",
  };

  return (
    <Layout
      {...(props as any)}
      iconStyle={iconStyle}
      layoutStyles={styles}
      items={menuItems}
    />
  );
};

AppLayout.displayName = "AppLayout";

export default AppLayout;
