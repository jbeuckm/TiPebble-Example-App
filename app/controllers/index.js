var pebble = require('org.beuckman.tipebble');

pebble.setAppUUID("226834ae-786e-4302-a52f-6e7efc9f990b");


$.connectedCount.text = pebble.connectedCount;


function watchConnected(e) {
  Ti.API.info("watchConnected");
  $.connectedCount.text = pebble.connectedCount;
}
function watchDisconnected(e) {
  Ti.API.info("watchDisconnected");
  $.connectedCount.text = pebble.connectedCount;
}
pebble.addEventListener("watchConnected", watchConnected);
pebble.addEventListener("watchDisconnected", watchDisconnected);



function getVersionInfo() {
  pebble.getVersionInfo({
    success : function(e) {
      alert(e);
    },
    error : function(e) {
      Ti.API.error(e);
    }
  });
}



function launchApp() {
  pebble.launchApp({
    success : function(e) {
      Ti.API.info(e);
    },
    error : function(e) {
      Ti.API.error(e);
    }
  });
}

function killApp() {
  pebble.killApp({
    success : function(e) {
      Ti.API.info(e);
    },
    error : function(e) {
      Ti.API.error(e);
    }
  });
}

function sendImage() {

  var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, '123456789A.png');

  pebble.sendImage({
    key: 2,
    image : f.read(),
    success: function() {
        Ti.API.info("sendImage success");
    },
    error: function(e) {
        Ti.API.error("sendImage error");
        Ti.API.error(e);
    }
  });
}

function sendMessage() {
  pebble.sendMessage({
    message: {
      0: 123,
      1: 'TiPebble'
    },
    success: function(e) {
      Ti.API.info(e);
    },
    error : function(e) {
      Ti.API.error(e);
    }
  });
}


pebble.addEventListener("update", function(e) {
    Ti.API.info("updateReceived");
    alert(e);
});

$.index.open();
