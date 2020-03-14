'use strict';



// mmmmmmmmmmmmmmmmmmmmmmSocial Media mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

document.getElementById('socialss').addEventListener("click", function() {
	document.querySelector('.bg-social').style.display = "flex";
});

document.querySelector('.close4').addEventListener("click", function() {
	document.querySelector('.bg-social').style.display = "none";
});

// mmmmmmmmmmmmmmmmmmmmmmTHE CELENDER mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
document.getElementById('ss-calender').addEventListener("click", function() {
	document.querySelector('.bg-celender').style.display = "flex";
});

document.querySelector('.close2').addEventListener("click", function() {
	document.querySelector('.bg-celender').style.display = "none";
});
// mmmmmmmmmmmmmmmmmmmmmmTHE CLOCK mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
document.getElementById('clocks').addEventListener("click", function() {
	document.querySelector('.bg-clock').style.display = "flex";
});

document.querySelector('.close3').addEventListener("click", function() {
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