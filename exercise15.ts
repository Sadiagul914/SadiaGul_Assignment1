//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestlist = ["komal", "amna","lubna","rehana"]
guestlist.pop(0);
guestlist.push("naila");
for(let i=0;i< guestlist.length;i++)
console.log('i would like to invite', guestlist[i]);