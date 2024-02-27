"use script";

// slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Slides 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}
// slider3
let slideIndex3 = 1;
showSlides3(slideIndex3);

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}
function showSlides3(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides3");
  let dots = document.querySelectorAll(".dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}
// Mobile Toggle Button

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector(".navMobile");

  menuToggle.addEventListener("click", function () {
    navMobile.classList.toggle("hidden");
  });
});

// Accordian
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      item.classList.toggle("show");
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("show");
        }
      });
    });
  });
});
// Lazy Loading Image
const blurImg = document.querySelector(".blur-load");
const imgLazy = document.querySelector(".imgLazy");
function loaded() {
  blurImg.classList.add("loaded");
}
if (imgLazy.complete) {
  loaded();
} else {
  imgLazy.addEventListener("load", loaded);
}

//
//

let links = document.getElementsByTagName("a"),
  i = 0,
  l = links.length,
  body = document.body;
for (; i < l; i++) {
  links[i].addEventListener(
    "click",
    function () {
      body.className = "page-loading";
      setTimeout(function () {
        body.className = "";
      }, 4000);
    },
    false
  );
}
window.addEventListener(
  "beforeunload",
  function (e) {
    document.body.className = "page-loading";
  },
  false
);
