// var sticky = document.getElementById("sticky");
var nav = document.getElementById("navi");
var aside = document.getElementById("aside")
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-links");
// const navLinks = document.querySelectorAll(".nav-links");
// const bars = document.querySelector(".fa-bars");

// window.onscroll = function() {scrollFunction()};
window.onscroll = function() {scrolling()};
// sticky.addEventListener('click', topFunction)

// hamburger.addEventListener("click", mobileMenu);
// navLinks.forEach(n => n.addEventListener("click", closeMenu));
// bars.addEventListener('click', hamFunction);

function scrolling() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.style.display = "flex";
    aside.style.display = "block";
  } else {
    nav.style.display = "none";
    aside.style.display = "none";
  }
}

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     sticky.style.display = "block";
//   } else {
//     sticky.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0; 
// }

// function mobileMenu() {
//     nav = navMenu.classList.toggle("active");
//     bars.classList.toggle('fa-bars');
// }

// function hamFunction() {
//   bars.classList.toggle('fa-times');
// }

// function closeMenu() {
//     navMenu.classList.remove("active");
// }