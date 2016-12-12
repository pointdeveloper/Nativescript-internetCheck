import { Component } from "@angular/core";
import * as connectivity from "connectivity";
import * as permissions from "nativescript-permissions";

declare var android: any
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public connectWith: string;
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;

    }

    public checkConnection() {

        permissions.requestPermission(android.Manifest.permission.ACCESS_NETWORK_STATE, "I need these permissions because I'm cool")
            .then(() => {
                console.log("Permission Granted!");
               
                switch (connectivity.getConnectionType()) {
                    case connectivity.connectionType.none:
                        this.connectWith = "None";
                        console.log("none");
                        break;
                    case connectivity.connectionType.wifi:
                        this.connectWith = "Wi-Fi";
                        console.log("wifi");
                        break;
                    case connectivity.connectionType.mobile:
                        this.connectWith = "Mobile";
                        console.log("mobile");
                        break;
                    default:
                        break;
                }
            })
            .catch(() => {
                console.log("Permission Denied");
            });

    }

}
