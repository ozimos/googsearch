import React, { Fragment } from "react";
import { GoogleSearchIcon, SearchDiv, BaseLink } from "components/atoms";
import Divider from "@material-ui/core/Divider";
import { makeStyles, styled } from "@material-ui/core/styles";
import SearchControls from "./SearchControls";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: "4px 10px 4px 2px",
    border: "1px solid #e8eaed"
  },
  block: '0 0 8px',
  suggestion: {
    flex: 1,
    fontSize: 16,
    padding: "5px 0",
    textAlign: "left"
  }
}));

const ReportLink = styled(BaseLink)({
  fontSize: "10.6667px",
  fontStyle: "italic",
  color: "#70757a",
  padding: "0 10px",
  marginBottom: -5,
  display: "block",
  textAlign: "right"
});

export default function Suggestions({ suggestions, hasSuggestions }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Divider className={classes.divider} orientation="horizontal" />
      <div className={classes.block}>
        {suggestions.map(suggestion => (
          <SearchDiv key={suggestion}>
            <GoogleSearchIcon aria-label="search icon" />
            <span className={classes.suggestion}>{suggestion}</span>
          </SearchDiv>
        ))}
      </div>
      <SearchControls hasSuggestions={hasSuggestions} />
      <ReportLink>Report inappropriate predictions</ReportLink>
    </Fragment>
  );
}
