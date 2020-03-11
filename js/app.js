'use strict'
document.getElementById('socialss').addEventListener("click", function() {
	document.querySelector('.bg-social').style.display = "flex";
});

document.querySelector('.close4').addEventListener("click", function() {
	document.querySelector('.bg-social').style.display = "none";
});
// mmmmmmmmmmmmmmmmmmmmmmTHE log in mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

document.getElementById('pop-btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
// mmmmmmmmmmmmmmmmmmmmmmTHE sign up mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


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

document.querySelector('.close2').addEventListener("click", function() {
	document.querySelector('.bg-celender').style.display = "none";
});
// mmmmmmmmmmmmmmmmmmmmmmTHE CLOCK mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
document.getElementById('clocks').addEventListener("mousemove", function() {
	document.querySelector('.bg-clock').style.display = "flex";
});

document.getElementById('MyClockDisplay').addEventListener("mousemove", function() {
	document.querySelector('.bg-clock').style.display = "none";
});


// mmmmmmmmmmmmmmmmmmmmmmTHE CLOCK mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
function showTime(){
  var date =new Date();
  var h=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
  var session="AM";
if (h == 0){
  h=12;
}
if (h>12){
  h =h-12;
  session="BM";
}
h =(h<10) ? "0" +h:h ;
m =(m<10) ? "0" +m:m ;
s =(s<10) ? "0" +s:s ;



  var time = h + ":" +m +":"+s+" "+session;
  document.getElementById("MyClockDisplay").innerText=time;
  document.getElementById("MyClockDisplay").textContent=time;
  setTimeout(showTime ,1000);
}

showTime();
// mmmmmmmmmmmmmmmmmmmmmmTHE CLOCK mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

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





