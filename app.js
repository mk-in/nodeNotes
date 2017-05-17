const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notesLib = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
const command = argv._[0];

if (command === 'add') {
  const note = notesLib.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notesLib.logNote(note);
  } else {
    console.log('Duplicate Note');
  }
} else if (command === 'list') {
  const allNotes = notesLib.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notesLib.logNote(note));
} else if (command === 'read') {
  const note = notesLib.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notesLib.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  const noteRemoved = notesLib.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Unknown command');
}
