console.log('helllo');


const EventEmitter = require('events');

const newEvent = new EventEmitter()


newEvent.on('response',() =>{
    console.log('test');
});

newEvent.emit('response')