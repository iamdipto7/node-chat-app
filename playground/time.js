const moment = require('moment');

// var date = moment();
// date.add(100,'year').subtract(9,'month');
// console.log(date.format('MMM Do, YYYY'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment();
console.log(date.format('h:mm a'));
