var date = document.querySelector("#currentDay")
var block = document.querySelector("textarea")
var time = document.querySelector("time")
var saveBtn= document.querySelectorAll(".saveBtn")

// Current date displayed on top
var day = moment ().format('dddd, MMMM Do');
date.textContent= (day)






var colorTime = function(){
    if(time > moment ()){
        block.addClass=("past")
    }
}




// save block text 


document.getElementById("hour-09").value = localStorage.getItem("hour-09")
document.getElementById("hour-10").value = localStorage.getItem("hour-10")

for (i=0; i<saveBtn.length; i++) {
    
    saveBtn[i].addEventListener("click", event=> {
        localStorage.setItem(event.target.previousElementSibling.id,event.target.previousElementSibling.value)
        console.log(block.value)
        console.log(event.target.previousElementSibling.id)
    })
}










