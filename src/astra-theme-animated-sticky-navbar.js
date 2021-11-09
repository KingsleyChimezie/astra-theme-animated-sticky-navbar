/*
  TITLE:
            Astra Theme Animated Sticky Nav Bar / Header
  VERSION:  
            1.2.0
  DATE:   
            Released 2021.07.04 - Republic of Ireland
  AUTHOR:  
            Kingsley Chimezie
            Software Engineer | Web Developer | Content Creator
  URLs:    
            https://kingsley.tech

  - My code is free to use for your personal / commercial projects
  - Selling my code or claiming it as your own is strictly prohibited ⚠
  - Do not remove my credits and give credit where credit is due

  Copyright © 2020 Kingsley Chimezie | Kingsley Chimezie Creations
*/ 



/* VARIABLE INITIALISATION                                DESCRIPTION                                                                         ACCEPTED VALUE EXAMPLES
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Accepted colour formats: name / hex / rgb / rgba

// Custom Variables
var navbarColorOnScroll = "";                                     // Set the navbar colour on scroll                                           "rgba(242, 160, 65, 0.9)"
var navbarPaddingDefault = "";                                    // Set the navbar padding default - "top right bottom left"                  "25px 20px 25px 20px"
var navbarPaddingOnScroll = "";                                   // Set the navbar padding on scroll - "top right bottom left"                "5px 20px 5px 20px"
var animationSpeed = "0.5s";                                      // Set how fast or slow you want the navbar transition animation to be       0.5s
var scrollDistance = 1;                                           // Set how far you want to scroll before activating sticky navbar            1
var boxShadow = "0px 4px 8px 0px rgba(0, 0, 0, 0.4)";             // Set the navbar box shadow on scroll                                       "0px 4px 8px 0px rgba(0, 0, 0, 0.4)"

// Custom Variables (Optional)
var siteContentTopPaddingDesktop = "";                            // Set the site content area top padding for Desktop - > 921px width         "0px"
var siteContentTopPaddingTablet = "";                             // Set the site content area top padding for Tablet - <= 921px width         "0px"
var siteContentTopPaddingMobile = "";                             // Set the site content area top padding for Mobile - <= 768px width         "0px"



/* DEFAULT VARIABLES - EDIT ONLY WHEN NECESSARY I.E. ADVISED BY KINGSLEY OR IF YOU KNOW WHAT YOU'RE DOING 😊
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
var astraMinScreenWidthTablet = 921;                              // Astra minimum screen width for tablet                                     921
var astraMinScreenWidthMobile = 768;                              // Astra minimum screen width for mobile                                     768
var siteContentId = "content";                                    // Site content area ID                                                      "content"                                               
var headerClass = "site-header";                                  // Header area - main container for all navbars                              "site-header"
var navbarPrimaryOldClass = "main-header-bar";                    // Navbar area primary class name (works with OLD Astra Header < 3.0.0)      "main-header-bar"
var navbarPrimaryClass = "ast-primary-header-bar";                // Navbar area primary class name                                            "ast-primary-header-bar"
var navbarAboveClass = "ast-above-header-bar";                    // Navbar area above class name                                              "ast-above-header-bar"
var navbarBelowClass = "ast-below-header-bar";                    // Navbar area below class name                                              "ast-below-header-bar"



/****************************************************************************************************************************************************************************
  ⚠ ONLY EDIT BEYOND THIS POINT IF YOU HAVE GOOD JAVASCRIPT KNOWLEDGE 😊 ⚠
*****************************************************************************************************************************************************************************/
var i;
var navBarDivHeight;

// user defined variables
var siteContentDiv = document.getElementById(siteContentId);
var headerDiv = document.getElementsByClassName(headerClass);
var navbarPrimaryOldDiv = document.getElementsByClassName(navbarPrimaryOldClass);
var navbarPrimaryDiv = document.getElementsByClassName(navbarPrimaryClass);
var navbarAboveDiv = document.getElementsByClassName(navbarAboveClass);
var navbarBelowDiv = document.getElementsByClassName(navbarBelowClass);
navBarDivHeight = headerDiv[0].offsetHeight + "px";

// set pre-scroll default variables
setPreScrollDefaults();

// On scroll, call scroll function
window.onscroll = function() {scrollFunction();};



/* MAIN FUNCTION - SCROLL
-------------------------------------------------------------------------------------- */
function scrollFunction() {
  
  /*  if scroll is greater than your defined scroll distance, set sticky header 👌🏿. 
      We should only do this on scroll, so that the default header padding is not affected untill we scroll.
  */
  if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
    
    // Setting sticky header  
    for (i = 0; i < headerDiv.length; i++) {
      
      // @DEPRECATED
      // add header height as padding to top of content div on scroll, this prevents 
      // navBarDivHeight = headerDiv[i].offsetHeight + "px";
      // siteContentDiv.style.paddingTop = navBarDivHeight;
      
      // Set main container header
      headerDiv[i].style.position = "fixed";
      headerDiv[i].style.width = "100%";
      headerDiv[i].style.boxShadow = boxShadow;
      setAnimation(headerDiv[i], animationSpeed);
      
      // Standard navbar display - only shows primary navbar on scroll
      setNavbar(navbarPrimaryOldDiv, navbarColorOnScroll, navbarPaddingOnScroll, animationSpeed);
      setNavbar(navbarPrimaryDiv, navbarColorOnScroll, navbarPaddingOnScroll, animationSpeed);
      hBar(navbarAboveDiv);
      hBar(navbarBelowDiv);
      
    }
    
  } 
  
  //  Else when scroll is less than your defined scroll distance, reset sticky header. 
  else {
    
    // Re-setting sticky header  
    for (i = 0; i < headerDiv.length; i++) {

      // reset main container header
      headerDiv[i].style.position = "";
      headerDiv[i].style.width = "";
      headerDiv[i].style.boxShadow = "";
      setAnimation(headerDiv[i], animationSpeed);

      // Reset standard navbar display - only shows primary navbar on scroll
      resetNavbar(navbarPrimaryOldDiv, "", "", animationSpeed);
      resetNavbar(navbarPrimaryDiv, "", "", animationSpeed);
      resetNavbar(navbarAboveDiv, "", "", animationSpeed);
      resetNavbar(navbarBelowDiv, "", "", animationSpeed);

    }

  }
}


/* OTHER FUNCTIONS
-------------------------------------------------------------------------------------- */
function setPreScrollDefaults() {
  // Setting pre-scroll default: set primary navbar (old) padding to your padding default
  for (i = 0; i < navbarPrimaryOldDiv.length; i++) {
    navbarPrimaryOldDiv[i].style.padding = navbarPaddingDefault;
  }
  // Setting pre-scroll default: set primary navbar (new) padding to your padding default
  for (i = 0; i < navbarPrimaryDiv.length; i++) {
    navbarPrimaryDiv[i].style.padding = navbarPaddingDefault;
  }
  // Setting pre-scroll default: your defined site content padding according to screen size
  siteContentDiv.style.paddingTop = siteContentTopPaddingDesktop;
  if (screen.width <= astraMinScreenWidthTablet) {
    siteContentDiv.style.paddingTop = siteContentTopPaddingTablet;
  }
  if (screen.width <= astraMinScreenWidthMobile) {
    siteContentDiv.style.paddingTop = siteContentTopPaddingMobile;
  }
}


function setAnimation(classElement, transitionSpeed) {
    classElement.style.transition = transitionSpeed;
    classElement.style.transitionTimingFunction = "ease";
}


function setNavbar(classElement, colorOnScroll, paddingOnScroll, transitionSpeed) {
  for (i = 0; i < classElement.length; i++) {
    classElement[i].style.backgroundColor = colorOnScroll; 
    classElement[i].style.padding = paddingOnScroll;
    setAnimation(classElement[i], transitionSpeed);
  }
}


function resetNavbar(classElement, colorOnScroll, paddingOnScroll, transitionSpeed) {
  setPreScrollDefaults();
  sBar(navbarPrimaryDiv);
  sBar(navbarAboveDiv);
  sBar(navbarBelowDiv);
  for (i = 0; i < classElement.length; i++) {
    classElement[i].style.backgroundColor = colorOnScroll; 
    classElement[i].style.padding = paddingOnScroll;
    setAnimation(classElement[i], transitionSpeed);
  }
}


function hBar(classElement) {
  for (i = 0; i < classElement.length; i++) {
    classElement[i].style.display = "none";
    setAnimation(classElement[i], animationSpeed);
    
  }
}


function sBar(classElement) {
  for (i = 0; i < classElement.length; i++) {
    classElement[i].style.display = "";
    setAnimation(classElement[i], animationSpeed);
  }
}