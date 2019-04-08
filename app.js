//node 3rd party module
const fs = require('fs');
const _ = require('lodash');

//imported user files
const notes = require('./notes.js');

let command = process.argv[2];

if (command === 'add') {
  console.log('adding new note...');
} else if (command === 'list')  {
  console.log('listing all note...');
} else if (command === 'read') {
  console.log('reading note...', process.argv[3]);
} else if (command === 'remove') {
  console.log('removing note...');
} else {
  console.log('command not recognized !');
}