/*
  DATE:   
            Created 2020.10.27 - Republic of Ireland
  AUTHOR:  
            Kingsley Chimezie
            Software Engineer | Web Developer | Content Creator
  URLs:    
            https://kingsley.tech           (Social)
            https://kingsleymedia.ie        (Business)

  - My code is free to use for your personal / commercial projects
  - Selling my code or claiming it as your own is strictly prohibited ⚠
  - Do not remove my credits and give credit where credit is due

  Copyright © 2020 Kingsley Chimezie | Kingsley Chimezie Creations | Kingsley Media Productions
*/ 


/* VARIABLE INITIALISATION                                DESCRIPTION                                                                  ACCEPTED VALUE EXAMPLES
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Accepted colour formats: name / hex / rgb / rgba

// Custom Variables
var navbarPaddingDefault = "";                            // Set the navbar padding default - top-bottom left-right                    "25px 0px"
var navbarPaddingOnScroll = "";                           // Set the navbar padding on scroll - top-bottom left-right                  "15px 0px"
var navbarColorOnScroll = "";                             // Set the navbar colour on scroll                                           "rgba(47, 79, 79, 0.5)"
var boxShadow = "0px 4px 8px 0px rgba(0, 0, 0, 0.4)";     // Set the navbar box shadow on scroll                                       "0px 4px 8px 0px rgba(0, 0, 0, 0.4)"
var animationSpeed = "0.5s";                              // Set how fast or slow you want the navbar transition animation to be       0.5s
var scrollDistance = 1;                                   // Set how far you want to scroll before activating sticky navbar            1

// Custom Variables (Optional)
var siteContentTopPaddingDesktop = "";                    // Set the site content area top padding for Desktop - > 921px width         "0px"
var siteContentTopPaddingTablet = "";                     // Set the site content area top padding for Tablet - <= 921px width         "0px"
var siteContentTopPaddingMobile = "";                     // Set the site content area top padding for Mobile - <= 768px width         "0px"

// DEFAULT VARIABLES (EDIT ONLY WHEN NECESSARY)
var astraMinScreenWidthTablet = 921;                      // Astra minimum screen width for tablet                                     921
var astraMinScreenWidthMobile = 768;                      // Astra minimum screen width for mobile                                     768
var siteContentId = "content";                            // Site content area ID                                                      "content"                                               
var navbarClass = "main-header-bar";                      // Navbar area class name                                                    "main-header-bar"


/* ⚠ ONLY EDIT BEYOND THIS POINT IF YOU KNOW JAVASCRIPT :) ⚠
*****************************************************************************************************************************************************************************/
var i;
var siteContentDiv = document.getElementById(siteContentId);
var navBarDiv = document.getElementsByClassName(navbarClass);

// Setting any pre-scroll defaults to navbar
for (i = 0; i < navBarDiv.length; i++) {
  navBarDiv[i].style.padding = navbarPaddingDefault;
}
// Setting site content padding according to screen size
siteContentDiv.style.paddingTop = siteContentTopPaddingDesktop;
if (screen.width <= astraMinScreenWidthTablet) {
  siteContentDiv.style.paddingTop = siteContentTopPaddingTablet;
}
if (screen.width <= astraMinScreenWidthMobile) {
  siteContentDiv.style.paddingTop = siteContentTopPaddingMobile;
}

// On scroll, call scroll function
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  
  /*  if scroll is greater than your defined scroll distance, set sticky-icky navbar 👌🏿. 
      We should only do this on scroll, so that the default navbar padding is not affected untill we scroll.
  */
  if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {

    // Setting sticky-icky navbar  
    for (i = 0; i < navBarDiv.length; i++) {
      navBarDiv[i].style.position = "fixed";
      navBarDiv[i].style.width = "100%";
      navBarDiv[i].style.transition = animationSpeed;
      navBarDiv[i].style.transitionTimingFunction = "ease";
      
      navBarDiv[i].style.padding = navbarPaddingOnScroll;
      navBarDiv[i].style.boxShadow = boxShadow;
      navBarDiv[i].style.backgroundColor = navbarColorOnScroll;
    }

  } 
  
  //  Else when scroll is less than your defined scroll distance, reset sticky-icky navbar. 
  else {
  
    // Resetting sticky-icky navbar when back to top
    for (i = 0; i < navBarDiv.length; i++) {
      navBarDiv[i].style.position = "";
      navBarDiv[i].style.width = "";
      navBarDiv[i].style.transition = animationSpeed;
      navBarDiv[i].style.transitionTimingFunction = "ease";
      
      navBarDiv[i].style.padding = navbarPaddingDefault;
      navBarDiv[i].style.boxShadow = "";
      navBarDiv[i].style.backgroundColor = "";
    }

  }
}