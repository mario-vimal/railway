import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    width: 250,
    "margin-left": "auto",
    "margin-right": "auto"
  },
  container: {
    display: "grid",
    width: 250
  },
  login: { marginTop: 10 },
  password: { marginTop: 10 },
  submit: { marginTop: 10, width: 100, marginLeft: "auto", marginRight: "auto" }
}));
function SignIn() {
  const classes = useStyles();
  const onClick = () => {
    console.log("hit");
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextField className={classes.login} label="UserName" />
        <TextField className={classes.password} label="Password" />
        <Link to={"/book"} target="_blank">
          <Button className={classes.submit}><a href="/book">Sign In</a></Button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
