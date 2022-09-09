import { createTheme } from "@material-ui/core/styles";
import { device } from "./breakpoints";

const colors = {
  black: "#2E3338",
  backBlack: "#EBEBEB",
  viola: "#8944AB",
  backViols: "#E4DAFF",
  gray: "rgba(46, 51, 56, 0.9)",
  green: "#248A3D",
  red: "#D70015",
  lightBlue: "#D9EBFF",
  backBlue: "#409CFF",
  blue: "#0500EA",
  darkBlue: "#00288A",
  white: "#FFFFFF",
  yellow: "#F5E23D",
};

const muiTheme = createTheme({
  overrides: {
    MuiInput: {
      root: {
        width: 250,
        [device.tablet]: {
          width: 400,
        },
        [device.laptop]: {
          width: 466,
        },
      },
      underline: {
        "&:before": {
          borderBottomColor: "#002FA4",
          borderBottomWidth: "2px",
        },
        "&:hover:not(.Mui-focused):before": {
          borderBottomColor: "#409CFF",
        },
        "&:after": {
          // focused
          borderBottomColor: "#00288A",
        },
      },
    },
  },
});

export default muiTheme;
