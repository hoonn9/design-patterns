import {Network} from "./network/network.abstract";
import {Facebook} from "./network/facebook";
import {Twitter} from "./network/twitter";

class App {

    static execute(socialType: 'facebook' | 'twitter'): void {
        const username = 'admin';
        const password = 'password';

        let network: Network;

        switch (socialType) {
            case 'facebook':
                network = new Facebook(username, password);
                break;
            case 'twitter':
                network = new Twitter(username, password);
        }

        network.post("Hi. users!");
    }
}

App.execute('facebook');
App.execute('twitter');