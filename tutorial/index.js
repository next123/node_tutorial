/*
//print
console.log('hello world');
//print win 32
console.log(process.platform);
//event 
 process.on('exit', function() {
     console.log('build-in event from node')
 })
 const { EventEmitter} = require('events');
 const eventEmitter = new EventEmitter();
 eventEmitter.on('lunch', () => {
     console.log('Custom eventEmitter');
 });
 eventEmitter.emit('lunch');

 //reading files
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./textfile.txt', 'utf-8');
console.log(txt)

readFile('./textfile.txt', 'utf-8', (err, txt) => {
    console.log('reading file from readFile' +' '+ txt);
});

console.log('first reading the file');
 */

//module
const myModule = require('./my-module');
const express = require('express');
const fs = require('fs');


const app = express();

app.get('/', (request, response) => {
    fs.readFile('./home.html', 'utf8', function(err, html) {
        if(err){
            response.status(500).send('error');
        }
        response.send(html);
    });
})

app.listen(process.env.PORT || 3000, () => console.log('App avaliable: http://localhost:3000'))