"use strict";
var core_1 = require("@angular/core");
var connectivity = require("connectivity");
var permissions = require("nativescript-permissions");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent.prototype.checkConnection = function () {
        var _this = this;
        permissions.requestPermission(android.Manifest.permission.ACCESS_NETWORK_STATE, "I need these permissions because I'm cool")
            .then(function () {
            console.log("Woo Hoo, I have the power!");
            switch (connectivity.getConnectionType()) {
                case connectivity.connectionType.none:
                    _this.connectWith = "None";
                    console.log("none");
                    break;
                case connectivity.connectionType.wifi:
                    _this.connectWith = "Wi-Fi";
                    console.log("wifi");
                    break;
                case connectivity.connectionType.mobile:
                    _this.connectWith = "Mobile";
                    console.log("mobile");
                    break;
                default:
                    break;
            }
        })
            .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map