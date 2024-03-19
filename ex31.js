"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let username = [];
if (username.length == 0)
    console.log('We need to find some users!');
else if (username.includes('admin'))
    console.log('Hello admin, would you like to see a status report?');
else
    console.log('Hello', username, 'thank you for logging in again.');
