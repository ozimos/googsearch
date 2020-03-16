import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: props => props.height,
    paddingLeft: 27,
    flexShrink: 0,
    background: '#f2f2f2',
    borderTop: '1px solid #e4e4e4',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }
}));

export default function Footer ({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <footer
      className={classes.root}
    >
      {children}
    </footer>
  );
}
