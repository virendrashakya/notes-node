const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const user = os.userInfo();
//  console.trace(user.username);

try {
  fs.appendFileSync('message.cred', `\nHello ${user.username}`);
} catch (err) {
  /* Handle the error */
}

let add_result = notes.add(9,-2);
console.log('added result => ', add_result);