'use strict';

var net = require('net');
var uuid = require('uuid');
var fs = require('fs');

var server = net.createServer(function(socket) {
  var log = '';
  var uuidString = uuid.v1();

  socket.on('data', function(data) {
    log += data;
  });

  socket.on('end', function() {
    fs.writeFile(__dirname + '/logs/' + uuidString, log);
    console.log('check log folder for unique files');
  });
});

server.listen(3000, function(){
  console.log('listening');
});

