import React, { Fragment } from "react";
import BaseRightNav from "components/molecules/BaseRightNav";
import FooterLinks from "components/atoms/FooterLinks"
import Search from "components/organisms/Search";
import { ReactComponent as Google } from "google.svg";
import { BaseLink, Footer } from "components/atoms";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: "white",
    textAlign: "center",
  },
  logo: {
    width: theme.spacing(34),
    height: theme.spacing(11.5),
    margin: theme.spacing(17, 0, 4)
  },
  footer: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.54)"
  }
}));

export default function() {
  const classes = useStyles();
  return (
    <Fragment>
      <main className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div />
          <BaseRightNav>
            <BaseLink to="/gmail">
              <Typography variant="body2">Gmail</Typography>
            </BaseLink>
            <BaseLink to="/images">
              <Typography variant="body2">Images</Typography>
            </BaseLink>
          </BaseRightNav>
        </Grid>

        <Google className={classes.logo} />
        <Search />
      </main>
      <div className="spacer"></div>
      <Footer height={41} >
        <span className={classes.footer}>Nigeria</span>
      </Footer>
      <Footer height={40} >
        <FooterLinks />
      </Footer>
    </Fragment>
  );
}
