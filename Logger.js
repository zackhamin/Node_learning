const EventEmitter = require('events');
const { v4: uuidv4 } = require("uuid");
const getGuid = () => { return uuidv4(); };

console.log(getGuid());

class Logger extends EventEmitter{

    log(msg){
    //Call event
    this.emit('message', {id: getGuid(), msg})
    };
};

module.exports = Logger;