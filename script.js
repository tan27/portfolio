var nav = document.getElementById("navi");
var aside = document.getElementById("aside")

window.onscroll = function() {scrolling()};

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