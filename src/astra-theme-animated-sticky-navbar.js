/*
** DATE:   
            Created 2020.10.27 - Republic of Ireland
** AUTHOR:  
            Kingsley Chimezie
            Software Engineer | Web Developer | Content Creator
** URLs:    
            https://kingsley.tech           (Social)
            https://kingsleymedia.ie        (Business)
*/ 


// Custom variables
var navbarPaddingDefault = "16px 0px";            // Enter your navbar padding | 16px = top & bottom, 0px = left & right
var navbarPaddingShrink = "0px";                  // Enter the padding size you want your navbar to shrink to
var navbarColorOnScroll = "";	                    // Set the colour you want your navbar to be when you scroll, leave blank for default '(accepted colour format: hex/rgb/rgba)
var animationSpeed = "0.2s";                      // How fast or slow you want the shrink animation to be
var scrollDistance = 80;                          // How far do you want to scroll before the activating sticky nav bar. DO NOT enter 'px', just number.
var siteContentTopPaddingDesktop = "0px";         // I recommend you set this to the height of your navbar (in px)
var siteContentTopPaddingTablet = "0px";          // I recommend you set this to the height of your navbar (in px)
var siteContentTopPaddingMobile = "0px";          // I recommend you set this to the height of your navbar (in px)


// Default/Custom variables (edit only when necessary)
var boxShadow = "0 4px 8px 0 rgba(0,0,0,0.3)";    // This adds a box shadow to the navbar, comment out (//) to disable
var siteContentId = "main";                       // 
var navbarClass = "main-header-bar";              // This is usually the default class in for Astra navbar
astraMinScreenWidthTablet = 921;                  // Screen Width
astraMinScreenWidthMobile = 768;



/* ONLY EDIT BEYOND THIS POINT IF YOU KNOW JS OR WHAT YOU'RE DOING :)
************************************************************************/
var i;
var siteContentDiv = document.getElementById(siteContentId);
var navBarDiv = document.getElementsByClassName(navbarClass);

// On scroll call scroll function
window.onscroll = function() {scrollFunction();};

// Setting main content padding for the site's Astra theme according to screen size
siteContentDiv.style.paddingTop = siteContentTopPaddingDesktop;
if (screen.width <= astraMinScreenWidthTablet) {
  siteContentDiv.style.paddingTop = siteContentTopPaddingTablet;
}
if (screen.width <= astraMinScreenWidthMobile) {
  siteContentDiv.style.paddingTop = siteContentTopPaddingMobile;
}

// Setting sticky icky navbar
for (i = 0; i < navBarDiv.length; i++) {
  navBarDiv[i].style.padding = navbarPaddingDefault;
  navBarDiv[i].style.position = "fixed";
  navBarDiv[i].style.width = "100%";
  navBarDiv[i].style.transition = animationSpeed;
  navBarDiv[i].style.transitionTimingFunction = "ease";
}

function scrollFunction() {
  
  // if scroll is greater than defined scroll distance, set sticky icky navbar 👌🏿
  if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {    
    // Setting sticky icky navbar when  
    for (i = 0; i < navBarDiv.length; i++) {
      navBarDiv[i].style.padding = navbarPaddingShrink;
      navBarDiv[i].style.boxShadow = boxShadow;
      navBarDiv[i].style.backgroundColor = navbarColorOnScroll;
    }
  } else {
    // reset when back to top
    for (i = 0; i < navBarDiv.length; i++) {
      navBarDiv[i].style.padding = navbarPaddingDefault;
      navBarDiv[i].style.boxShadow = "none";
      navBarDiv[i].style.backgroundColor = "";
    }
  }
}