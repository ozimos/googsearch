import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { styled, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: props => (props.hasSuggestions ? theme.spacing(7) : theme.spacing(11)),
  }
}));
const SearchButton = styled(ButtonBase)({
  margin: "auto 4px",
  marginBottom: props => (props.hasSuggestions ? 0 : 'auto'),
  padding: "0px 16px",
  fontSize: 14,
  backgroundColor: "#f2f2f2",
  border: "1px solid #f2f2f2",
  borderRadius: 4,
  backgroundImage: "-webkit-linear-gradient(top,#f5f5f5,#f1f1f1)",
  height: 36,
  minWidth: 54,
  color: "#5F6368",
  "&:hover": {
    boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
    backgroundImage: "-webkit-linear-gradient(top,#f8f8f8,#f1f1f1)",
    backgroundColor: "#f8f8f8",
    border: "1px solid #c6c6c6",
    color: "#222"
  }
});
export default function SearchControls(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <SearchButton>
        Google Search
      </SearchButton>
      <SearchButton>
        I'm Feeling Lucky
      </SearchButton>
    </Grid>
  );
}
