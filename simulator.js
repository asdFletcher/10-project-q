'use strict';

const Publisher = require('./lib/publisher.js');

const Q = new Publisher;

// Q.publish('database', 'delete', {id:77});
// Q.publish('database', 'delete', {id:77, name:'John'});
// Q.publish('network', 'attack', {type: 'DDOS', source:'Russia'});

setInterval(() => {
  Q.publish('database', 'delete', {id:77});
  Q.publish('database', 'create', {id:55});
  Q.publish('network', 'attack', {type: 'DDOS', source:'Russia'});
},2000);
