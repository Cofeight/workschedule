//defines global variables
var timeEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var allTextEl = $(".textInput");
var timeNow = moment();


//Variable dateToday displays current day of week and date
//Also logged the variable in the console
var dateToday = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(dateToday);
console.log(dateToday);


//This function is supposed to establish the time parameters via for loop
//establishing past, present, or future coloration
function timeCheck () {
    var hourNow = timeNow.hours();
    console.log(hourNow);
    var timeSlot = $(".timeslot");
    for(var i = 0; i < timeSlot.length; i++){
        var block = timeSlot[i];
        console.log(block.id.split("-"));
        if(parseInt(block.id.split("-")[1]) < hourNow){
            $(block).addClass("past");
        }
        else if(parseInt(block.id.split("-")[1]) === hourNow){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}
localStorage.clear();
timeCheck();
