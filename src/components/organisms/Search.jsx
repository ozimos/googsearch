import React, { useState, Fragment } from "react";
import { SearchBox, SearchControls } from "components/molecules";
import { styled, makeStyles } from "@material-ui/core/styles";
import BaseLink from "components/atoms/BaseLink";
import Typography from "@material-ui/core/Typography";

const OptionsLink = styled(BaseLink)({
  padding: "0 3px",
  color: "#1a0dab",
  "&:visited": { color: "#609" }
});

const dummySuggestions = [
  "agrave",
  "alphabet",
  "google",
  "spacex",
  "amazon",
  "bixby",
  "alexa",
  "aleph",
  "zeta",
  "zugzwang"
];

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '30%',
  },
});

export default function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const classes = useStyles();

  const handleSearchChange = () => {
    setSuggestions(dummySuggestions);
  };

  const handleClickAway = () => {
    setSuggestions([]);
  };
  const props = { handleSearchChange, suggestions, handleClickAway };
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <div className={classes.root}>
      <SearchBox {...props} />
      {!hasSuggestions && (
        <Fragment>
          <SearchControls hasSuggestions={hasSuggestions} />
          <Typography variant="body2">
            Google offered in:
            <OptionsLink to="/hausa">Hausa</OptionsLink>
            <OptionsLink to="/igbo">Igbo</OptionsLink>
            <OptionsLink to="/yoruba">Èdè Yòrùbá</OptionsLink>
            <OptionsLink to="/pidgin">Nigerian Pidgin</OptionsLink>
          </Typography>
        </Fragment>
      )}
    </div>
  );
}
