'use strict';

const Q = require('./lib/subscriber.js');


const db = new Q('database');
db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});
db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});


// const nw = new Q('network');
// nw.subscribe('attack', (payload) => {
//   console.log('attack happened', payload);
// });
// nw.subscribe('no-server', (payload) => {
//   console.log('serv error happened', payload);
// });


console.log(`Subscriber: i am subscribed to: ${db.subscriptions()}`);
