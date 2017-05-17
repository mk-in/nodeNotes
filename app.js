const fs = require('fs'); // inbuilt module
const _ = require('lodash'); // npm module
const yargs = require('yargs');

const notes = require('./notes.js'); // custom file module

console.log('Starting app....');
console.log('-------------------------------------------------------------------');

const argv = yargs.argv;
var command = argv._[0] ;
// console.log(command);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('What to do?');
}

console.log('-------------------------------------------------------------------');
// console.log(yargs.argv);
