"use strick";

// Toggle Menu
const toggleMenu = document.querySelector(".toggleMenu");
const toggleBtn = document.querySelector(".toggleBtn");
const menuItems = document.querySelector(".menu-items");

toggleMenu.onmouseover = handleToggleBtnOver;
toggleMenu.onmouseout = handleToggleBtnOut;

function handleToggleBtnOver() {
  toggleMenu.style.width = "270px";
}

function handleToggleBtnOut() {
  toggleMenu.style.width = "0px";
}

// // Complete CheckBox
// const comChk = document.querySelector(".compelteBtn");
// console.dir(comChk);
