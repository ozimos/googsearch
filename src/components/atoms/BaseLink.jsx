import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

 const BaseLink = styled(Link)({
  color: 'inherit',
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
});

export default BaseLink