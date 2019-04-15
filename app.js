//node 3rd party module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//imported user files
const notes = require('./notes.js');

let command = process.argv[2];
let argv = yargs.argv;
console.log(command);

if (command === 'add') {
  let result = notes.addNote(argv.title, argv.body);
  if (result.success) {
    console.log('\x1b[32m', result.message);
    console.log('\x1b[0m', '');
  } else {
    console.log('\x1b[31m', result.message);
    console.log('\x1b[0m', '');
  }
} else if (command === 'list')  {
  let result = notes.getAllNotes();
  console.log(`Total ${result.length} notes found`);
  result.forEach(note => {
    console.log('-----------------------------------')
    console.log('Title: ', note.title);
    console.log('Title: ', note.body);
    console.log('-----------------------------------')
  });
} else if (command === 'read') {
  let result = notes.readNotes(argv.title);
  if (result.success) {
    console.log('\x1b[32m', result.message);
    console.log('\x1b[0m', '');
  } else {
    console.log('\x1b[31m', result.message);
    console.log('\x1b[0m', '');
  }
} else if (command === 'remove') {
  let result = notes.removeNotes(argv.title);
  if (result.success) {
    console.log('\x1b[32m', result.message);
    console.log('\x1b[0m', '');
  } else {
    console.log('\x1b[31m', result.message);
    console.log('\x1b[0m', '');
  }
} else {
  console.log('command not recognized !');
}