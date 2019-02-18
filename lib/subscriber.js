'use strict';
require('dotenv').config()
let io = require('socket.io-client');
const util = require('util');

class Q {
  constructor(namespace){
    // ~~~ connect to namespace ~~~
    this.namespace = namespace;
    this.serverConnection = io.connect(`${process.env.Q_SERVER}/${namespace}`);
    this.subArr = [];
  }

  subscribe(room, cb){
    console.log(`subscriber: ${room}, ${this.namespace}`);
    // ~~~ connect to room ~~~
    this.serverConnection.emit('join', room);
    
    // push room to subArr (if not already there)
    this.subArr.push(room);

    this.serverConnection.on(room, (payload)=>{
      cb(payload);
    });
  }

  subscriptions(){
    return this.subArr;
  }
}

module.exports = Q;
