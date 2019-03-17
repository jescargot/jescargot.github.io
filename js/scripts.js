/*HEY! DONT FORGET TO TRY TO MINIFY THIS FILE FOR PERFORMANCE BECAUSE THAT'S COOL*/
//USE GOOGLE'S CLOSURE COMPLIER SERVICE

//PASSWORD VALIDATION

var password = ''; //Initialize a variable called password, to eventually store the user's input

function checkPass(){

    var password = document.getElementById("userInput").value.toLowerCase();


    if (password === "friendsandfam") {
      // block of code to be executed if condition 1 is true
        location.assign('timeline.html');
    }

    else if (password === "mommy") {
      // block of code to be executed if the condition 1 is false and condition 2 is true
        location.assign('entry.html');
    }

    else {
      // block of code to be executed if the condition 1 is false and condition 2 is false
    	alert("Password not found! :(")
    }

} //END FUNCTION

//TESTING JQUERY INTEGRATION
//$('#userInput').hide();
//spoiler alert: it works :)

// $('#userInput').keydown(function(){
//     checkPass();
// });

//COUNTDOWN

var end = new Date('June 8, 2019 12:00:00'); //create a variable named 'end' and store the end date inside

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date(); //create a variable named 'now' and store the CURRENT date inside (Date(); is the current date)
    var distance = end - now; //create a variable named 'distance' and store the difference in dates inside
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'BABY CASSIDY IS OVERDUE!'; //message displayed instead of the counter if there is no time left

        return;
    }

    var days = Math.floor(distance / _day); //find number of days left using math
    var hours = Math.floor((distance % _day) / _hour); //find number of hours left using math
    var minutes = Math.floor((distance % _hour) / _minute); //find number of minutes left using math
    var seconds = Math.floor((distance % _minute) / _second); //find number of seconds left using math

    document.getElementById('countdown').innerHTML = days + ' days '; //display number of days left
    document.getElementById('countdown').innerHTML += hours + ' hrs '; //display number of hours left
    document.getElementById('countdown').innerHTML += minutes + ' mins and '; //display number of mins left
    document.getElementById('countdown').innerHTML += seconds + ' secs left!'; //display number of seconds left
}

timer = setInterval(showRemaining, 1000); //set timer variable to hold the result of the showRemaining function

//adding a comment literally just to test my github push


