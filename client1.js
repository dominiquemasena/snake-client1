const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541,

  });
  conn.setEncoding('utf8'); 
  conn.on("data", function (message) {
  
    console.log(message);

    });
  return conn;
  }
  module.exports = { connect }