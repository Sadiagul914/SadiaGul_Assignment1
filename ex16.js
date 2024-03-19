"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestlist = ["komal", "amna", "lubna"];
let newguest = "rabia";
//adding guest to the start of list
guestlist.unshift("rehana");
//adding guest to the middle of list
guestlist.splice(2, 0, "Fatima");
//adding guest to the end of list
guestlist.push(newguest);
for (let i = 0; i < guestlist.length; i++)
    console.log('i would like to invite', guestlist[i]);
console.log('we have found a bigger table for dinner');
