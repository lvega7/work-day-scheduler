var date = document.querySelector("#currentDay")
var block = document.querySelector("textarea")
var saveBtn= document.querySelector(".saveBtn")

// Current date displayed on top
var day = moment ().format('dddd, MMMM Do');
date.textContent= (day)






var colorTime = function(){
var now = new Date();
var hours = now.getHours();

var ft = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
});

if (5 <= hours && hours < 8) {//Morning
    $(block).addClass ('.present');
    
}}




// save block text 
block.value=localStorage.getItem("notes")


saveBtn.addEventListener("click", event=> {
    localStorage.setItem("notes", block.value)
})








