import React from "react";
import Navbar from "./Navbar";
import Paper from '@material-ui/core/Paper'
import SideDrawer from "./SideDrawer"
import MainContent from "./MainContent";
import Router from './Router'
import {makeStyles, CssBaseline} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    padding: "0",
    margin: "0",
    display: "flex",
    height: "100%"
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#8892b0"
  },
  toolbar: {
    ...theme.mixins.toolbar,
  }
}));

function PersonalWebsite() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Navbar/>
      <SideDrawer/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Router/>
      </main>
    </div>
  );
}


export default PersonalWebsite;