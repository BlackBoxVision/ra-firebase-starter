import { createTheme } from "@material-ui/core";

import { palette } from "../theming/palette";
import { typography } from "../theming/typography";

export let theme = createTheme({
  palette,
  typography,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          fontFamily: "'Ubuntu', sans-serif",
        },
      },
    },
    MuiAppBar: {
      colorSecondary: {
        color: palette.primary.background,
        backgroundColor: palette.primary.main,
      },
    },
    MuiToolbar: {
      dense: {
        minHeight: 56,
      },
    },
    MuiDrawer: {
      paper: {
        height: "100% !important",
        borderBottomRightRadius: 20,
      },
    },
    MuiFormControl: {
      root: {
        marginRight: 16,
      },
    },
    MuiSelect: {
      select: {
        "&.Mui-disabled": {
          cursor: "not-allowed",
        },
      },
    },
    RaBooleanField: {
      root: {
        display: "initial",
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "#FFF",
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: 8,
      },
      input: {
        "&.Mui-disabled": {
          cursor: "not-allowed",
        },
      },
    },
    MuiTablePagination: {
      input: {
        margin: 0,
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        color: palette.secondary.main,
        fontWeight: "bold",
        fontSize: 16,
      },
    },
    MuiTableCell: {
      sizeSmall: {
        textAlign: "center",
        height: 50,
      },
      head: {
        fontWeight: "bold",
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: "#212121",
        backgroundColor: "white",
      },
    },
    MuiLink: {
      underlineHover: {
        color: "#4183C4",
      },
    },
    RaAutocompleteSuggestionList: {
      suggestionsContainer: {
        zIndex: 9000,
      },
    },
    RaSimpleFormIterator: {
      form: {
        display: "flex",
        justifyContent: "space-between",
      },
      index: {
        display: "none",
      },
    },
    RaList: {
      content: {
        boxShadow: "none",
        border: "1px solid #e0e0e0",
      },
    },
    RaShow: {
      card: {
        boxShadow: "none",
        border: "1px solid #e0e0e0",
      },
    },
    RaEdit: {
      card: {
        boxShadow: "none",
        border: "1px solid #e0e0e0",
      },
    },
    RaCreate: {
      card: {
        boxShadow: "none",
        border: "1px solid #e0e0e0",
      },
    },
    RaImageInput: {
      dropZone: {
        border: "1px dashed #BABABA",
      },
    },
    // Sidebar link items fix
    RaSidebar: {
      fixed: {
        position: "relative",
      },
    },
  },
} as any);
