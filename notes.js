const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // const duplicateNotes = notes.filter( (note)=> note.title === title)
    const duplicateNote = notes.find((note)=>note.title===title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const removeNotes =(title)=>{
    const notes = loadNotes()
    // const notestoKeep = notes.filter(function(note){
    //     return note.title !== title
    const notestoKeep = notes.filter((note)=>note.title !== title)
    if(notes.length>notestoKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
    }else{
        console.log(chalk.red.inverse('No Note found'))
    }
    saveNotes(notestoKeep)

    }
const listNotes=()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Yours Notes'))
    notes.forEach((note)=> {
        console.log(note.title)
        
    });
    
}
const readNotes=(title)=>{
    const notes = loadNotes()
    const note =notes.find((note)=>note.title===title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
       console.log(chalk.red.inverse("No note found!"))
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes

}