'use strict';

// var btncreate = document.getElementById('btnCreatePlane');

// btncreate.addEventListener("click", function () {

// })
var CreateForm = document.getElementById('DivCreatPlane');
var ChooseForm = document.getElementById('ChooseForm');
function toogleCreateForm(){
   
    ChooseForm.classList.add("Hidden");
    CreateForm.classList.toggle("Hidden");
    
}
function toogleChooseForm(){
    CreateForm.classList.add("Hidden");
    ChooseForm.classList.toggle("Hidden");
}