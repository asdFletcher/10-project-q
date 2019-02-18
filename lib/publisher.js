'use strict';
require('dotenv').config()
let io = require('socket.io-client');
const util = require ('util');

class Publisher {
  constructor(){
    this.emitter = io.connect(`${process.env.Q_SERVER}`);
  }

  publish(namespace, room, payload){
    console.log(`Simulator: namespace: ${namespace}, room: ${room}, payload:${util.inspect(payload)}`);
    
    this.emitter.emit('publish', namespace, room, payload);
  }
}

module.exports = Publisher;
