"use strict";
//Variable declarations
const menuNav = document.getElementById("menu-main");
const menuToggle = document.getElementById("mobile-button");

//Hamburger navigation
//add event listener to menu
menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  //toggle between showing and hiding the menu
  menuNav.classList.toggle("displayMenu");
}

//History page collapsible
//Add event listener to all instances of button
document.querySelectorAll('.btnAbout').forEach(button => {
  button.addEventListener('click', event => {
    //grab the content of the div directly below the button clicked
    let details = button.nextElementSibling;
    //show/hide
    if (details.style.maxHeight) {
      details.style.maxHeight = null;
    } else {
      details.style.maxHeight = details.scrollHeight + "em";
    }
  })
})
