var pebble = require('org.beuckman.tipebble');

pebble.setAppUUID("28AF3DC7-E40D-490F-BEF2-29548C8B0600");


$.connectedCount.text = pebble.connectedCount;


function watchConnected(e) {
  alert("watchConnected");
  $.connectedCount.text = pebble.connectedCount;
}
function watchDisconnected(e) {
  alert("watchDisconnected");
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
      alert(e);
    }
  });
}



function launchApp() {
  pebble.launchApp({
    success : function(e) {
      alert(e);
    },
    error : function(e) {
      alert(e);
    }
  });
}

function killApp() {
  pebble.killApp({
    success : function(e) {
      alert(e);
    },
    error : function(e) {
      alert(e);
    }
  });
}

function sendImage() {

  var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, '123456789A.png');

  pebble.sendImage({
    image : f.read()
  });
}

/*
 pebble.appMessageSupported(function(e) {
 Ti.API.info("appMessageSupported");
 });

 var update = {
 0: 123,
 1: "hello"
 };
 pebble.pushUpdate({
 update: update,

 });

 pebble.addEventListener("updateReceived", function(e) {
 Ti.API.info("updateReceived");
 Ti.API.info(e);
 });
 pebble.receiveUpdates(true);

 */

$.index.open();
