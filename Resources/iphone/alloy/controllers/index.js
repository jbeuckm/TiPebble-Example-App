function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function watchConnected() {
        Ti.API.info("watchConnected");
        $.connectedCount.text = pebble.connectedCount;
    }
    function watchDisconnected() {
        Ti.API.info("watchDisconnected");
        $.connectedCount.text = pebble.connectedCount;
    }
    function getVersionInfo() {
        pebble.getVersionInfo({
            success: function(e) {
                alert(e);
            },
            error: function(e) {
                Ti.API.error(e);
            }
        });
    }
    function launchApp() {
        pebble.launchApp({
            success: function(e) {
                Ti.API.info(e);
            },
            error: function(e) {
                Ti.API.error(e);
            }
        });
    }
    function killApp() {
        pebble.killApp({
            success: function(e) {
                Ti.API.info(e);
            },
            error: function(e) {
                Ti.API.error(e);
            }
        });
    }
    function sendImage() {
        var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "123456789A.png");
        pebble.sendImage({
            key: 2,
            image: f.read(),
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
                1: "TiPebble"
            },
            success: function(e) {
                Ti.API.info(e);
            },
            error: function(e) {
                Ti.API.error(e);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "25dp",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Get Version Info",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    getVersionInfo ? $.__views.__alloyId1.addEventListener("click", getVersionInfo) : __defers["$.__views.__alloyId1!click!getVersionInfo"] = true;
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Launch App",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    launchApp ? $.__views.__alloyId2.addEventListener("click", launchApp) : __defers["$.__views.__alloyId2!click!launchApp"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Send Message",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    sendMessage ? $.__views.__alloyId3.addEventListener("click", sendMessage) : __defers["$.__views.__alloyId3!click!sendMessage"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        height: "44dp",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "connected watches:",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.connectedCount = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "connectedCount"
    });
    $.__views.__alloyId4.add($.__views.connectedCount);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        image: "123456789A.png",
        id: "__alloyId6"
    });
    $.__views.index.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        title: "Send Image",
        id: "__alloyId7"
    });
    $.__views.index.add($.__views.__alloyId7);
    sendImage ? $.__views.__alloyId7.addEventListener("click", sendImage) : __defers["$.__views.__alloyId7!click!sendImage"] = true;
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Kill App",
        id: "__alloyId8"
    });
    $.__views.index.add($.__views.__alloyId8);
    killApp ? $.__views.__alloyId8.addEventListener("click", killApp) : __defers["$.__views.__alloyId8!click!killApp"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pebble = require("org.beuckman.tipebble");
    pebble.setAppUUID("226834ae-786e-4302-a52f-6e7efc9f990b");
    $.connectedCount.text = pebble.connectedCount;
    pebble.addEventListener("watchConnected", watchConnected);
    pebble.addEventListener("watchDisconnected", watchDisconnected);
    pebble.addEventListener("update", function(e) {
        Ti.API.info("updateReceived");
        alert(e);
    });
    $.index.open();
    __defers["$.__views.__alloyId1!click!getVersionInfo"] && $.__views.__alloyId1.addEventListener("click", getVersionInfo);
    __defers["$.__views.__alloyId2!click!launchApp"] && $.__views.__alloyId2.addEventListener("click", launchApp);
    __defers["$.__views.__alloyId3!click!sendMessage"] && $.__views.__alloyId3.addEventListener("click", sendMessage);
    __defers["$.__views.__alloyId7!click!sendImage"] && $.__views.__alloyId7.addEventListener("click", sendImage);
    __defers["$.__views.__alloyId8!click!killApp"] && $.__views.__alloyId8.addEventListener("click", killApp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;