"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestlist = ["komal", "amna", "lubna", "rehana", "rabia"];
console.log("we can invite only two people for dinner");
//removing guest from the list*/
while (guestlist.length > 2) {
    let guest = guestlist.pop();
    console.log('sorry', guest, 'we cant invite you to the dinner ');
}
for (let i = 0; i < guestlist.length; i++)
    console.log('i would like to invite', guestlist[i]);
