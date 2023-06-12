const validator = require('validator')
const chalk = require('chalk')
const Notes = require('./notes.js')
const yargs = require('yargs')
const sum = require('./add.js')

// console.log(process.argv)
// console.log(chalk.blue("Sucess"))
// 
//Create a add command
yargs.command({
    command: 'add',
    describe: 'Adding a Notes',
    builder: {
        title: {
            describe:'Notes Title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'content of the notes',
            demandOption:'true',
            type:'string'

        }         
        
    },
    handler: function(argv){
        Notes.addNote(argv.title, argv.body)
        // console.log('Title: ',argv.title)
        // console.log('Body: ',argv.body)

    }
})
//Create a Remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the Note',
    builder:{
        title:{
            describe:"Notes Title",
            demandOption:'true'
        }
    },
    handler: function (argv) {
        // console.log('Remove the Notes')
        Notes.removeNotes(argv.title)
    }
})
//Create list command
yargs.command({
   command: 'list',
   describe: 'List the Notes',
   handler: function () {
    console.log('Listing the Notes')

   } 
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read the Notes',
    handler: function() {
        console.log('Reading the Notes')
    }
})
yargs.parse();

// console.log(yargs.argv)
