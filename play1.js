const { connect } = require('./client1');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();

