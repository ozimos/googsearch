import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Search } from "pages";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    body2: {
      fontSize: 13
    },
    fontFamily: ["arial", "sans-serif"].join(",")
  },
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "none"
        }
      }
    }
  }
});

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: 'column',
    "& .spacer": {
      backgroundColor: "white",
      flex: '1 0 auto',
    },
  }
});
export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
