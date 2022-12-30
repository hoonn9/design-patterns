import {Profile} from "./profile/profile";
import {Facebook} from "./social-network/facebook";
import {SocialNetwork} from "./social-network/social-network.interface";
import {SocialSpammer} from "./spammer/social-spammer";
import {Linkedin} from "./social-network/linkedin";

class App {

    static async execute() {
        await this.sendSpam('facebook');
        await this.sendSpam('linkedin');
    }

    static async sendSpam(platform: 'facebook' | 'linkedin'): Promise<void> {
        let network: SocialNetwork;

        if (platform === 'facebook') {
            network = new Facebook(this.createTestProfiles());
        } else {
            network = new Linkedin(this.createTestProfiles());
        }

        const spammer = new SocialSpammer(network);

        await spammer.sendSpamToFriends("anna.smith@bing.com",
            "Hey! This is Anna's friend Josh. Can you do me a favor and like this post [link]?");
        await spammer.sendSpamToCoworkers("anna.smith@bing.com",
            "Hey! This is Anna's boss Jason. Anna told me you would be interested in [link].");
    }

    static createTestProfiles(): Profile[] {
        const result: Profile[] = [];

        result.push(new Profile("anna.smith@bing.com", "Anna Smith", "friends:mad_max@ya.com", "friends:catwoman@yahoo.com", "coworkers:sam@amazon.com"));
        result.push(new Profile("mad_max@ya.com", "Maximilian", "friends:anna.smith@bing.com", "coworkers:sam@amazon.com"));
        result.push(new Profile("bill@microsoft.eu", "Billie", "coworkers:avanger@ukr.net"));
        result.push(new Profile("avanger@ukr.net", "John Day", "coworkers:bill@microsoft.eu"));
        result.push(new Profile("sam@amazon.com", "Sam Kitting", "coworkers:anna.smith@bing.com", "coworkers:mad_max@ya.com", "friends:catwoman@yahoo.com"));
        result.push(new Profile("catwoman@yahoo.com", "Liza", "friends:anna.smith@bing.com", "friends:sam@amazon.com"));

        return result;
    }
}

App.execute();