'use strict';

let io = require('socket.io-client');

class Publisher {
  constructor(){
    this.emitter = io.connect(`http://localhost:3000`);
  }


  publish(namespace, room, payload){
    console.log('publishing an event');
    this.emitter.emit(namespace, room, payload);
  }
}

module.exports = Publisher;

