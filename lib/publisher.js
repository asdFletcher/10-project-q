'use strict';

let io = require('socket.io-client');

class Publisher {
  constructor(){
    this.emitter = io.connect(`http://localhost:3000`);
  }


  publish(namespace, room, payload){
    // console.log(`Simulator: namespace: ${namespace}, room: ${room}, payload:${payload}`);
    
    this.emitter.emit('event', namespace, room, payload);
  }
}

module.exports = Publisher;

