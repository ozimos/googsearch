import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { GoogleSearchIcon, SearchDiv, Tooltip } from "components/atoms";
import Suggestions from "components/molecules/Suggestions";
import { ReactComponent as GoogleMicIcon } from "google_mic.svg";

const shadow = {
  boxShadow: "0 1px 6px 0 rgba(32,33,36,0.28)",
  borderColor: "rgba(223,225,229,0)"
};
const useStyles = makeStyles(theme => ({
  root: {
    margin: "6px auto 0",
    width: theme.spacing(72.75),
    padding: "6px 8px 6px 14px",
    borderRadius: theme.spacing(3),
    backgroundColor: 'white',
    zIndex: 3,
    border: "1px solid #dfe1e5",
    boxShadow: "none",
    "&:hover": shadow
  },
  input: {
    flex: 1
  },
  shadow,
  mic: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  iconButton: {
    padding: "0px 8px"
  }
}));

export default function SearchBox({
  suggestions,
  handleSearchChange,
  handleClickAway
}) {
  const classes = useStyles();
  const hasSuggestions = Boolean(suggestions.length);
  const keepShadow = hasSuggestions ? classes.shadow : {};
const props = {hasSuggestions, suggestions}
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={clsx(classes.root, keepShadow)}>
        <SearchDiv>
          <GoogleSearchIcon aria-label="search icon" />
          <InputBase
            className={classes.input}
            inputProps={{ "aria-label": "search google" }}
            onChange={handleSearchChange}
          />
          <Tooltip title="Search by voice">
            <IconButton className={classes.iconButton} aria-label="microphone">
              <GoogleMicIcon className={classes.mic} />
            </IconButton>
          </Tooltip>
        </SearchDiv>
        {hasSuggestions && <Suggestions {...props} />}
      </div>
    </ClickAwayListener>
  );
}
