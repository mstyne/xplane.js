var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
  //console.log(msg)

  var out = ''
  for (i = 0; i < msg.length; i++ ) {
    out = out + " " + msg.readUInt8(i)
  }
  console.log(out)
  //console.log("server got: " + msg + " from " +
    //rinfo.address + ":" + rinfo.port);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(49000);
