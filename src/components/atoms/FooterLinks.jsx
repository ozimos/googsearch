import React, { Fragment } from "react";
import BaseLink from "./BaseLink";
import { styled } from "@material-ui/core/styles";

const FooterLink = styled(BaseLink)({
  marginRight: 27,
  color: "#5f6368"
});
const SpacerDiv = styled("div")({
  flex: "1 0 auto"
});

export default function FooterLinks () {
  return (
    <Fragment>
      <FooterLink to="/Advertising">Advertising</FooterLink>
      <FooterLink to="/Business">Business</FooterLink>
      <FooterLink to="/About">About</FooterLink>
      <FooterLink to="/How Search works">How Search works</FooterLink>
      <SpacerDiv />
      <FooterLink to="/Privacy">Privacy</FooterLink>
      <FooterLink to="/Terms">Terms</FooterLink>
      <FooterLink to="/Settings">Settings</FooterLink>
    </Fragment>
  );
}
