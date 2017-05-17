console.log('Starting Notes');
const fs = require('fs');

var fetchNotes = () => {
     try{
          return JSON.parse(fs.readFileSync('notes-data.json'));
     } catch(e){
        return [];
     };
}

var saveNotes  = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
}

var addNote = (title, body) => {
    // var noteObj = {
    //     title : title,
    //     body : body
    // }
    // var noteStr = JSON.stringify(noteObj);
    //  console.log('Note Added -> ', noteStr);
    //  fs.appendFileSync('notes.json',noteStr);

     var notes = [];
     var note = {
        title,
        body
     };
// get old notes first and save in array
    notes = fetchNotes();
    // console.log(notes);

// check if new note has a duplicate title
     var duplicateNotes = notes.filter((note) => {
        //  console.log(note.title);
        return note.title === title;
     });

     if (duplicateNotes.length === 0){
        // console.log('Adding note', note);
        notes.push(note);
        saveNotes(notes);
     }
     

};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading note', title)
};

var removeNote = (title) => {
    console.log('Removing note', title)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// }