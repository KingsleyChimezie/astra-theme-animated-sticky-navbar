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


// CUSTOM VARIABLES
var navbarPaddingOnScroll = "0px";                // Enter the padding size you want your navbar to be on scroll
var navbarColorOnScroll = "";                     // Set the colour you want your navbar to be on scroll (accepted colour format: hex/rgb/rgba)
var animationSpeed = "0.3s";                      // How fast or slow do you want the navbar animation to be?
var scrollDistance = 10;                          // How far do you want to scroll before activating sticky navbar? DO NOT enter 'px', just number

// OPTIONAL CUSTOM VARIABLES
var navbarPaddingDefault = "";                    // How much top-bottom left-right padding (in px) do you want the navbar?
var siteContentTopPaddingDesktop = "";            // How much top padding (in px) do you want the site content area to have for Desktop? (> 921px width)
var siteContentTopPaddingTablet = "";             // How much top padding (in px) do you want the site content area to have for Tablet? (<= 921px width) 
var siteContentTopPaddingMobile = "";             // How much top padding (in px) do you want the site content area to have for Mobile? (<= 768px width)

// DEFAULT VARIABLES (EDIT ONLY WHEN NECESSARY)
var boxShadow = "0 4px 8px 0 rgba(0,0,0,0.3)";    // This adds a box shadow to the navbar, comment out (//) to disable
var astraMinScreenWidthTablet = 921;              // Minimum screen width for tablet
var astraMinScreenWidthMobile = 768;              // Minimum screen width for mobile
var siteContentId = "content";                    // The ID of site content div (do not enter the class name)
var navbarClass = "main-header-bar";              // This is usually the default class for Astra navbar


/* ⚠ ONLY EDIT BEYOND THIS POINT IF YOU KNOW JAVASCRIPT :) ⚠
******************************************************************************************************************/
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