function Controller() {
    function watchConnected() {
        alert("watchConnected");
        $.connectedCount.text = pebble.connectedCount;
    }
    function watchDisconnected() {
        alert("watchDisconnected");
        $.connectedCount.text = pebble.connectedCount;
    }
    function getVersionInfo() {
        pebble.getVersionInfo({
            success: function(e) {
                alert(e);
            },
            error: function(e) {
                alert(e);
            }
        });
    }
    function launchApp() {
        pebble.launchApp({
            success: function(e) {
                alert(e);
            },
            error: function(e) {
                alert(e);
            }
        });
    }
    function killApp() {
        pebble.killApp({
            success: function(e) {
                alert(e);
            },
            error: function(e) {
                alert(e);
            }
        });
    }
    function sendImage() {
        var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "123456789A.png");
        pebble.sendImage({
            image: f.read()
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
        title: "Kill App",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    killApp ? $.__views.__alloyId3.addEventListener("click", killApp) : __defers["$.__views.__alloyId3!click!killApp"] = true;
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pebble = require("org.beuckman.tipebble");
    pebble.setAppUUID("28AF3DC7-E40D-490F-BEF2-29548C8B0600");
    $.connectedCount.text = pebble.connectedCount;
    pebble.addEventListener("watchConnected", watchConnected);
    pebble.addEventListener("watchDisconnected", watchDisconnected);
    $.index.open();
    __defers["$.__views.__alloyId1!click!getVersionInfo"] && $.__views.__alloyId1.addEventListener("click", getVersionInfo);
    __defers["$.__views.__alloyId2!click!launchApp"] && $.__views.__alloyId2.addEventListener("click", launchApp);
    __defers["$.__views.__alloyId3!click!killApp"] && $.__views.__alloyId3.addEventListener("click", killApp);
    __defers["$.__views.__alloyId7!click!sendImage"] && $.__views.__alloyId7.addEventListener("click", sendImage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;