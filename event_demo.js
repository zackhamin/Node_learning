const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { };

//INIT object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event Fired'));

//INIT event
myEmitter.emit('event');
