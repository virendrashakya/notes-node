const fs = require('fs');

let originalNotes = {
  title: 'SomeTitle',
  body: 'SomBody Text'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNotes));
let noteString = fs.readFileSync('notes.json');

console.log(typeof(noteString));
console.log(JSON.parse(noteString).title);
