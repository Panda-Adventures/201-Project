'use strict'

document.getElementById('pop-btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('sign-dd').addEventListener("click", function() {
	document.querySelector('.bg-modal1').style.display = "flex";
});

document.querySelector('.close1').addEventListener("click", function() {
	document.querySelector('.bg-modal1').style.display = "none";
});
// mmmmmmmmmmmmmmmmmmmmmmTHE CELENDER mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
document.getElementById('ss-calender').addEventListener("click", function() {
	document.querySelector('.bg-celender').style.display = "flex";
});

document.querySelector('.close3').addEventListener("click", function() {
	document.querySelector('.bg-celender').style.display = "none";
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}





var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

// Thumbnail image controls
function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  slides2[slideIndex2 - 1].style.display = "block";
}





