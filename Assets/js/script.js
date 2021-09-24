var date = document.querySelector("#currentDay")
var block = document.querySelector("textarea")
var saveBtn= document.querySelector(".saveBtn")

// Current date displayed on top
var day = moment ().format('dddd, MMMM Do');
date.textContent= (day)

// color codes
var colorTime = function(){
    var time = new Date().getHours();

if(time<10){
    $(block).addClass ('.present');
}


    // if(day === (".hour"){
    //     $(block).addClass ('.present');
    // }
}



// save description
var saveBlock = function(){
    var text = localStorage.getItem('textarea');
   


};

saveBtn.addEventListener("click", function ( ) {

    var text = document.querySelector('textarea').value;

    localStorage.setItem('text', text);
    saveBlock();

})







