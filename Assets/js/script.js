var date = document.querySelector("#currentDay")
var block = document.querySelector("textarea")
var time = document.querySelector("time")
var saveBtn= document.querySelectorAll(".saveBtn")
var hour09 = document.getElementById("hour-09")
var rows = document.querySelector("time")

// Current date displayed on top
var day = moment ().format('dddd, MMMM Do');
date.textContent= (day)






var colorTime = function(){
    if( timeNine === day.dddd){
        console.log("good")
    }
    else{
        console.log(nonono)
    }
}












// save block text 


document.getElementById("hour-09").value = localStorage.getItem("hour-09")
document.getElementById("hour-10").value = localStorage.getItem("hour-10")
document.getElementById("hour-11").value = localStorage.getItem("hour-11")
document.getElementById("hour-12").value = localStorage.getItem("hour-12")
document.getElementById("hour-1").value = localStorage.getItem("hour-1")
document.getElementById("hour-2").value = localStorage.getItem("hour-2")
document.getElementById("hour-3").value = localStorage.getItem("hour-3")
document.getElementById("hour-4").value = localStorage.getItem("hour-4")
document.getElementById("hour-5").value = localStorage.getItem("hour-5")

for (i=0; i<saveBtn.length; i++) {
    
    saveBtn[i].addEventListener("click", event=> {
        localStorage.setItem(event.target.previousElementSibling.id,event.target.previousElementSibling.value)
        console.log(block.value)
        console.log(event.target.previousElementSibling.id)
    })
}










