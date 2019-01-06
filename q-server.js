'use strict'

const Q = require('./lib/server.js');
Q.start();

// database namespace
const db = new Q('database');

// database rooms
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');

// network namespace
const network = new Q('network');

// network rooms
network.monitorEvent('attack');
network.monitorEvent('no-server');

