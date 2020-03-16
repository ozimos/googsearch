import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseTooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black
  },
  tooltip: {
    backgroundColor: theme.palette.common.black
  }
}));

function Tooltip(props) {
  const classes = useStyles();

  return <BaseTooltip arrow classes={classes} {...props} />;
}

export default Tooltip;
