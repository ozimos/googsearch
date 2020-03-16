import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1, 3.75),
    alignItems: "center",
    "& > :not(:last-child)": {
      marginLeft: theme.spacing(2)
    },
    "& > *": {
      cursor: "pointer"
    }
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  appsIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    color: "#777",
    "&:hover": {
      color: "black"
    }
  }
}));

export default function BaseRightNav({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
      <IconButton aria-label="apps icon">
        <AppsIcon className={classes.appsIcon} />
      </IconButton>
      <Avatar
        alt="Remy Sharp"
        src="/broken-image.jpg"
        className={classes.avatar}
      >
        B
      </Avatar>
    </div>
  );
}
