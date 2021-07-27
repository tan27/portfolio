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

AOS.init();