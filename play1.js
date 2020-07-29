const { connect} = require('./client1');

/**
 * Establishes connection with the game server
 */

  // interpret incoming data as text


console.log('Connecting ...');
connect();

const setupInput = function(key) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = function(key) {
    console.log(key);
    if (key === '\u0003') {
      process.exit(); 
    }
  }
  stdin.on("data", handleUserInput);


  // handleUserInput();
  return stdin;

}

setupInput();