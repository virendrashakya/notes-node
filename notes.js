const fs = require('fs');
const notes_db = 'notes-db.json';

let fetchNotes = function () {
  try {
    let fetched_notes = fs.readFileSync(notes_db);
    return JSON.parse(fetched_notes);
  } catch (exception) {
    return [];
  }
}

let saveNotes = function (notes) {
  fs.writeFileSync(notes_db, JSON.stringify(notes));
}

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicatedNotes = notes.filter((note) => note.title === title);

  if (duplicatedNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return {
      success: true,
      message: 'note created sucessfully',
      title,
      body
    };
  } else {
    return {
      success: false,
      message: 'A note with similar title exists',
      title,
      body
    };
    // console.log('\x1b[41m', `There is already a note exists with title -> ${title}`);
    // console.log('\x1b[0m', '');
  }
}

let getAllNotes = () => {
  return fetchNotes();
}

let readNotes = (title) => {
  let notes = fetchNotes();
  let readNote = notes.filter((note) => note.title === title);
  if (readNote.length === 0) {
    return {
      success: false,
      message: `Not note exist for title: ${title}`
    }
  } else {
    return {
      success: true,
      message: `title: ${title} \n Body: ${readNote[0].body}`
    }
  }
}

let removeNotes = (title) => {
  let notes = fetchNotes();
  let deleteNote = notes.filter((note) => note.title !== title);
  if (notes.length > deleteNote.length) {
    saveNotes(deleteNote);
    return {
      success: true,
      message: `Note removed for title: ${title}`
    }
  } else {
    return {
      success: false,
      message: `Not note exist for title: ${title}`
    }
  }
}

module.exports = {
  addNote,
  getAllNotes,
  readNotes,
  removeNotes
}