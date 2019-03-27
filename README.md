BABY CASSIDY TIMELINE PROJECT!

//INTRO
Hello!
This project was created as my final/capstone for Code Louisville FEWD (January 2019 Session)

//SUMMARY
This project is a digital journal to document my pregnancy with my first child (due in June!)
I wanted a way to share big news with only people who cared, instead of ALL of my Facebook friends.
There is an entry page, only accessible by the author (with password) as well as the timeline page, accessible by anyone who has the public side password.
To access the entry page, use password "mommy" - Note: Please don't submit the form as it will write to my faux database (a Google Spreadsheet)
To access the timeline page, use password "friendsandfam"

//CUSTOM CSS SELECTORS
1. #hidden-label
2. #countdown
3. .btn-submit
4. .form-container
5. .note

And many, many, many more!

I chose not to integrate normalize.css or bootstrap to test my own abilities with CSS and responsive design, since this is a relatively simple layout.

//CUSTOM JS FUNCTION
I created the custom function checkPass(); that reads user input from a form field, and checks it against the 2 specified options.
It then redirects the user to the appropriate page based on their password OR displays an error message in an alert.

//OTHER JS FUNCTIONS
I also created a countdown feature (following a tutorial) to display the days, hours, minutes, and seconds left until my due date.

//FAUX BACK-END
I integrated Google Sheets to create a faux back-end database to hold my blog entries. The "admin" form currently works to write submissions to a spreadsheet in my Google Drive (https://docs.google.com/spreadsheets/d/1YGCSlwcGoGcnOya0u3xh9oQuwzbl3yfZJzZFec-wwHw/edit?usp=sharing). Unfortunately, I ran out of time before the Code Louisville deadline to finish the read from functionality to display the entries, so they are all hard-coded.

I also couldn't figure out how to handle images in this process, so I removed the photo option I had in my original idea.

I began this project using only a free trial of the Blockspring API. The free trial expires on March 31, 2019. If it's broken, I probably haven't paid for it.

//FUTURE IMPROVEMENTS
I hope to improve the integration with Google Sheets in the future so that it reads entries from the sheet instead of a hard-coded approach.

Eventually I'd like to figure out how to handle images in the google sheets integration, if it is even possible.

Originally, I imagined the entries as popover windows that were spaced based on date. Unfortunately, I ran out of time to figure out the complexities of this model and had to go with hard-coded entries that were evenly spaced and always visible. Eventually, I'd like to figure out how to integrate popover windows and dynamically space the points on the timeline.

//ACKNOWLEDGEMENTS
Faux Backend Tutorial:
Kevin Kononenko - https://medium.com/@kevink/build-a-complete-back-end-in-20-minutes-with-google-sheets-a-hack-for-beginners-404c8e728e3
P.S. It took longer than 20 minutes ;P

Javascript Countdown Tutorial:
https://www.w3schools.com/howto/howto_js_countdown.asp

Timeline Tutorial:
https://www.w3schools.com/howto/howto_css_timeline.asp

Justin Toon - a coworker who answered a bunch of insane questions

Hector Ricardo - a classmate who always helped troubleshoot problems in class

Tina Thomas, Ryan Hess, Sam Dabney, Nyshia Taylor - For being the best tablemates a girl could ask for <3