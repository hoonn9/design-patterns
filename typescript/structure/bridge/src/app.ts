import {Tv} from "./device/tv";
import {Remote} from "./remote";
import {AdvanceRemote} from "./advance-remote";
import {Radio} from "./device/radio";

class App {

    static execute() {
        const tv = new Tv();
        const remote = new Remote(tv);
        remote.volumeUp();

        const radio = new Radio();
        const radioRemote = new Remote(radio);
        radioRemote.togglePower();

        const tv2 = new Tv();
        const advancedRemote = new AdvanceRemote(tv2);


        console.log(tv);
        console.log(radio);

        advancedRemote.channelUp();
        advancedRemote.channelUp();
        advancedRemote.channelUp();
        advancedRemote.channelToPrev();

        console.log(tv2);
    }
}

App.execute();
