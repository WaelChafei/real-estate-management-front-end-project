import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "componentsNew/Header/Header.js";
import Footer from "componentsNew/Footer/Footer.js";
import GridContainer from "componentsNew/Grid/GridContainer.js";
import GridItem from "componentsNew/Grid/GridItem.js";
import Button from "componentsNew/CustomButtons/Button.js";
import Parallax from "componentsNew/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "componentsNew/Header/HeaderLinks.js";
 import SectionCarousel from "./Sections/SectionCarousel.js";
 import SectionDownload from "./Sections/SectionDownload.js";
 import mazed from '../image/mazed.png'
import Profiles from './profiles'
import styles from "assets/jss/material-kit-react/views/components.js";
import Home from "GP/home.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
    
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}/>
      <Parallax image={require("image/back5.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{lineHeight:"10px"}}>Real Estate Management</h1>
                <h3 className={classes.subtitle} >
                  The best website to find the BEST real estate prices .
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
 
        
    
        <Home/>
 
     
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <Footer />
    </div>
  );
}
