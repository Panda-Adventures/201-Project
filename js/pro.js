`use strict`;
var showOrders =document.getElementById('showOrders');
var myShow=document.getElementById('myShow');
 // now we will create the constructor function for my logIn form
 //////////////////////////////////////
 function LogIn(email,name,isagree,password,day,month,year){

this.email=email;
this.name=name;
this.isagree=isagree;
this.password=password ;
this.day=day;
this.month =month;
this.year =year;

LogIn.log.push(this);

 }
 //create an array to push all the object inside it 
 LogIn.log=[];
 console.log(LogIn.log)
 //now we will craete a function for every submit event


  function submithandle(event){
event.preventDefault();
console.log(event.target);
console.log(LogIn.log)
var formId=document.getElementById('showOrders');
var log= event.target ;
var email=log.email.value ;
var name=log.name.value;
var isagree =log.isagree.value;
var password=log.password.value ;
var day=log.day.value;
var month = log.month.value;
var year = log.year.value;
new LogIn(email ,name,isagree ,password ,day ,month ,year);
setItem();
renderodrders();
 formId.reset();

  }


  function setItem(){
    var sign = JSON.stringify(LogIn.log);
    localStorage.setItem( 'signUp',sign);
  }
  
  
  function getItem(){
    var signUp = localStorage.getItem('signUp');
    LogIn.log = JSON.parse(signUp);
    renderodrders();
  }





  //noe we will write the function of renderorders to show the result 

  function renderodrders(){

myShow.textContent=""; //to prevent duplicate
for(var i=0 ;i< LogIn.log.length ;i++){

var liEl =document.createElement('li');
var pEl =document.createElement('p');
var accept ;
if(LogIn.log[i].isagree === 'on'){
    accept ='you agree';
}else{
    accept = 'you disagree';
};
pEl.textContent =`your Email is ${LogIn.log[i].email} and your name is ${LogIn.log[i].name} and ${accept} and your password is ${LogIn.log[i].password} and your birth in :${LogIn.log[i].day}/${LogIn.log[i].month}/${LogIn.log[i].year}`;
liEl.appendChild(pEl);
myShow.appendChild(liEl);

}
  }


console.log(renderodrders);




showOrders.addEventListener('submit',submithandle);
getItem();



function buttonpass(){
    var myPassWors =document.getElementById(pass);
    if (pass.type === "password"){
        pass.type ="text";
    }else{
        pass.type ="password";
        
    }
}





// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
var signinfo = [];
var logpage = document.getElementById('logpage');
var hereprint = document.getElementById('hereprint');

function Sign(name,password){
this.name =name;
this.password =password;

signinfo.push(this);

}
console.log(signinfo);

function myFunction(event){
    event.preventDefault();
    var formId=document.getElementById('logpage');
    var log =event.target;
     var name =log.name.value;
     var password =log.password.value;
     new Sign(name,password);
     render();
     formId.reset();
     //setItem();
}


function render(){
hereprint.textContent="";
for(var i=0 ;i < signinfo.length ;i++){
var liEl =document.createElement('li');
var pEl =document.createElement('p');
pEl.textContent = ` your name is ${signinfo[i].name} and your pass is ${signinfo[i].name}`;
liEl.appendChild(pEl);
hereprint.appendChild(liEl);

}
console.log(render());


}
 logpage.addEventListener('submit',myFunction);

