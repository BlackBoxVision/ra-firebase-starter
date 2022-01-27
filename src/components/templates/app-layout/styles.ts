import { makeStyles } from "@material-ui/core";

export let useStyles = makeStyles({
  sidebarWhenClosed: {
    backgroundColor: "#212121",
    paddingLeft: 0,
  },
  sidebarWhenOpen: {
    backgroundColor: "#212121",
    paddingLeft: 0,
  },
  appBar: {
    backgroundColor: "#212121",
    boxShadow: "none",
  },
  listItem: {
    color: "#FFF",
    width: 240,
  },
  menuLink: {
    color: "#FFF",
    width: 240,
  },
  logoutButton: {
    position: "absolute",
    bottom: 0,
  },
});
