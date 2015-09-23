////ASSIGNMENT 2 - PART 1

////1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.////

/*var userName = window.prompt("What is your name?");
window.alert (userName.length)*/

////2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.////
/*var userName = window.prompt("What is your name?");

var nameNumber = window.prompt("Pick a number between 0 and " + userName.length + ":");
window.alert(userName.charAt(nameNumber));*/

////3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.////

/*var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");
window.alert("Your name is: " + firstName.concat(lastName));*/

////4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.////

/*var statement = "The quick brown fox jumps over the lazy dog";
window.alert(statement.indexOf("fox"));*/

////5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.////

/*var statement = "The quick brown fox jumps over the lazy fox";
window.alert(statement.lastIndexOf("fox"));*/

////6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.////

/*var statement = "The quick brown fox jumped over the lazy dog";
var userName = window.prompt("Please enter your full name: ");
window.alert(statement.replace("the lazy dog", userName));*/

////7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.////

/*var statement = "The quick brown fox jumped over the lazy dog";
var userSearch = window.prompt("Please enter a word: ");
var pattern = new RegExp(userSearch, 'g');
window.alert(statement.match(pattern));*/

////8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.////

/*var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = (old_string.slice(31, 43));
window.alert(new_string.toUpperCase());*/

////9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.////

/*var old_string = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var new_string = (old_string.trim());
window.alert(new_string.toLocaleLowerCase());*/

////10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.////

/*var old_string = "the quick brown fox jumps over the lazy dog";
var cap_string = (old_string.toUpperCase());
window.alert(cap_string.slice(0, 1) + old_string.slice(1, 43));*/


////ASSIGNMENT 2 - PART 2 SECTION 1/9

////1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.////
/*var x = window.prompt("Please enter a number:");
window.console.log(Math.abs(x));*/

////2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.////
/*var decimal = window.prompt("Please enter a floating point value (decimal):");
window.console.log(Math.ceil(decimal));*/

////3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.////
/*var decimal = window.prompt("Please enter a floating point value (decimal):");
window.console.log(Math.floor(decimal));*/

////4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.////
/*var var1 = window.prompt("Please enter a number: ");
var var2 = window.prompt("Please enter another number: ");
var var3 = window.prompt("Please enter another number: ");
var var4 = window.prompt("Please enter another number: ");
var var5 = window.prompt("Please enter another number: ");
Number(var1);
Number(var2);
Number(var3);
Number(var4);
Number(var5);
window.console.log("Max Number Entered: " + Math.max(var1, var2, var3, var4, var5));
window.console.log("Min Number Entered: " + Math.min(var1, var2, var3, var4, var5));*/

////5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.////
/*var x = window.prompt("Please enter a number: ");
window.console.log(Math.sqrt(x));*/


////ASSIGNMENT 2 - PART 2 SECTION 2/9

////6.	Create an application that gets the current date. Display that result within the console window.////
/*var d = new Date();
window.console.log(d.getDate());*/

////7.	Create an application that gets the number of days in a month. Display that result within the console window.////
/*var d = new Date ();
var month = d.getMonth();
if (month == 0||month == 2||month == 4||month == 6||month == 7||month == 9||month == 11) {
    window.console.log(31);
} else if (month == 3||month == 5||month == 8||month == 10) {
    window.console.log(30);
} else if (month == 1) {
    window.console.log(28);
}*/

////8.	Create an application that gets the month name from a particular date. Display that result within the console window.////
/*var d = new Date ();
var month = d.getMonth();
if (month == 0) {
    window.console.log("January");
} else if (month == 1) {
    window.console.log("February");
} else if (month == 2) {
    window.console.log("March");
} else if (month == 3) {
    window.console.log("April");
} else if (month == 4) {
    window.console.log("May");
} else if (month == 5) {
    window.console.log("June");
} else if (month == 6) {
    window.console.log("July");
} else if (month == 7) {
    window.console.log("August");
} else if (month == 8) {
    window.console.log("September");
} else if (month == 9) {
    window.console.log("October");
} else if (month == 10) {
    window.console.log("Novermber");
} else if (month == 11) {
    window.console.log("December");
}*/

////9.	Create an application that tests whether a date is a weekend. Display that result within the console window.////
/*var d = new Date ();
var day = d.getDay();
if (day == 0||day == 6) {
    window.console.log("Weekend");
} else {
    window.console.log("Weekday");
}*/

////10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.////
/*var d = new Date ();
var day = d.getDay()-1;
if (day == 0) {
    window.console.log("Sunday");
} else if (day == 1) {
    window.console.log("Monday");
} else if (day == 2) {
    window.console.log("Tuesday");
} else if (day == 3) {
    window.console.log("Wednesday");
} else if (day == 4) {
    window.console.log("Thursday");
} else if (day == 5) {
    window.console.log("Friday");
} else if (day == 6) {
    window.console.log("Saturday");
}*/

////11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.////
/*var d = new Date ();
var day = d.getDay();
if (day == 0||day == 6) {
    window.console.log("S");
} else if (day == 1) {
    window.console.log("M");
} else if (day == 2||day == 4) {
    window.console.log("T");
} else if (day == 3) {
    window.console.log("W");
} else if (day == 5) {
    window.console.log("F");
} */

////ASSIGNMENT 2 - PART 2 SECTION 3/9

////12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.////
/*var x = window.prompt("Please enter an integer: ");
var y = window.prompt("Please enter a different integer: ");
if (x > y) {
    window.console.log(x);
} else {
    window.console.log(y);
}*/

////
/*13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
 
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68

The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100 A*/
////
/*var ursulaGrade = 80;
(ursulaGrade < 60) ? window.console.log("Ursula got an F") :
(ursulaGrade < 70) ? window.console.log("Ursula got an D") :
(ursulaGrade < 80) ? window.console.log("Ursula got an C") :
(ursulaGrade < 90) ? window.console.log("Ursula got an B") : window.console.log("Ursula got an A");

var paulGrade = 77;
(paulGrade < 60) ? window.console.log("Paul got an F") :
(paulGrade < 70) ? window.console.log("Paul got an D") :
(paulGrade < 80) ? window.console.log("Paul got an C") :
(paulGrade < 90) ? window.console.log("Paul got an B") : window.console.log("Paul got an A");

var henryGrade = 88;
(henryGrade < 60) ? window.console.log("Henry got an F") :
(henryGrade < 70) ? window.console.log("Henry got an D") :
(henryGrade < 80) ? window.console.log("Henry got an C") :
(henryGrade < 90) ? window.console.log("Henry got an B") : window.console.log("Henry got an A");

var tabithaGrade = 95;
(tabithaGrade < 60) ? window.console.log("Tabitha got an F") :
(tabithaGrade < 70) ? window.console.log("Tabitha got an D") :
(tabithaGrade < 80) ? window.console.log("Tabitha got an C") :
(tabithaGrade < 90) ? window.console.log("Tabitha got an B") : window.console.log("Tabitha got an A");

var lucyGrade = 68;
(lucyGrade < 60) ? window.console.log("Lucy got an F") :
(lucyGrade < 70) ? window.console.log("Lucy got an D") :
(lucyGrade < 80) ? window.console.log("Lucy got an C") :
(lucyGrade < 90) ? window.console.log("Lucy got an B") : window.console.log("Lucy got an A");*/

////14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.////
/*for (var i = 1; i <= 15; i++) {
	if (i % 2 === 0) {
        window.console.log(i + " is even");
    } else {
        window.console.log(i + " is odd");
    }
}*/

////15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.////
/*for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
        window.console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        window.console.log("Fizz");
    } else if (i % 5 === 0) {
        window.console.log("Buzz");
    } else {
        window.console.log(i);
    }
}*/

////ASSIGNMENT 2 - PART 2 SECTION 4/9
////1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.////
/*var answer = window.confirm("Are you ready to play this game? \n(Click OK for Yes, Click Cancel for No)");
if (answer == true) {
    window.alert("Awesome, our hero is waiting!");
} else if (answer == false) {
    window.alert("Too bad, we're going to play anyways because our hero desperately needs your help!");
}

////2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”////
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

////3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”////
var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");

////4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”////
switch (direction) {
    case "forward":
        alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
    case "right":
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
		break;
    default: 
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}*/

////5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”////

////6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.////
/* var rating = window.prompt("Please rate the game on a scale of 1 to 10: ");
if (rating < 1 || rating > 10) {
    var newRating = rating.replace(rating, 10);
} else {
    var newRating = rating;
} 

if (0 < newRating && newRating <= 5) {
    window.alert("Whatever, you weren’t very good at this game anyway!");
} else {
    window.alert("Thank you, we will continue to make improvements to the game!");
}*/

////ASSIGNMENT 2 - PART 2 SECTION 5/9

////1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.////
/*var coinFlip = Math.random();
window.console.log(coinFlip);

////2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.////
var choice = window.prompt("Choose Heads or Tails: ").toLowerCase();

////3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.////
if (coinFlip < 0.5) {
    var newCoinFlip = "heads";
} else {
    var newCoinFlip = "tails";
}

////4.	If the result is heads and the user selects heads, display the following message within an alert: The flip was heads and you chose heads...you win!////
if (newCoinFlip == "heads" && choice == "heads") {
    window.alert("The flip was heads and you chose heads...you win!");
}

////5.	If the result is heads and the user selects tails, display the following message within an alert: The flip was heads but you chose tails...you lose!////
else if (newCoinFlip == "heads" && choice == "tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
}

////6.	If the result is tails and the user selects heads, display the following message within an alert: The flip was tails but you chose heads...you lose!////
else if (newCoinFlip == "tails" && choice == "heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
}

////7.	If the result is tails and the user selects tails, display the following message within an alert: The flip was tails and you chose tails...you win!////
else if (newCoinFlip == "tails" && choice == "tails") {
    window.alert("The flip was tails and you chose tails...you win!");
}*/

////8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.////
/*var coinFlip = Math.random();
if (Math.round(coinFlip) == true) {
    var newCoinFlip = "Heads";
} else if (Math.round(coinFlip) == false) {
    var newCoinFlip = "Tails";
}
window.console.log(coinFlip);
window.console.log(newCoinFlip);*/

////ASSIGNMENT 2 - PART 2 SECTION 6/9

////1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.////
////2.	Create a for loop that loops 10 times.////
////3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.////
////4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.////

/*var coinFlip;
for (coinFlip = 0; coinFlip < 10; coinFlip++) {
if (Math.round(Math.random(coinFlip)) == false) {
    window.console.log("Heads");
    } else if (Math.round(Math.random(coinFlip)) == true) {
    window.console.log("Tails");
}
}*/

////ASSIGNMENT 2 - PART 2 SECTION 7/9

////1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.////
////2.	Create a do while loop.////
////3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.////
////4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.////
////5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.////

/*var coinFlip;
do {
    var x = Math.round(Math.random(coinFlip));
    if (x == false) {
    window.console.log("Heads");
    } else if (x == true) {
    window.console.log("Tails");
}   
} while (x == false);*/


////ASSIGNMENT 2 - PART 2 SECTION 8/9
/*
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######*/

/*var triangle = "#";
for (triangle = "#"; triangle < "########"; triangle += "#") {
    window.console.log(triangle);
}*/

////ASSIGNMENT 2 - PART 2 SECTION 9/9

/*Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"*/
/*var i;
for (i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
        window.console.log(i + " is even");
    } else {
        window.console.log(i + " is odd");
    }
}*/