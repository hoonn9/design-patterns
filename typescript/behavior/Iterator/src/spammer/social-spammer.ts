import {SocialNetwork} from "../social-network/social-network.interface";
import {ProfileIterator} from "../iterator/profile-iterator";
import {Profile} from "../profile/profile";

export class SocialSpammer {
    private iterator?: ProfileIterator;

    constructor(private socialNetwork: SocialNetwork) {
    }

    async sendSpamToFriends(profileEmail: string, message: string): Promise<void> {
        console.log("Iterating over friends...");
        this.iterator = this.socialNetwork.createFriendsIterator(profileEmail);
        while(await this.iterator.hasNext()) {
            const profile = await this.iterator.getNext() as Profile;
            this.sendMessage(profile.email, message);
        }
    }

    async sendSpamToCoworkers(profileEmail: string, message: string): Promise<void> {
        console.log("Iterating over coworkers...");
        this.iterator = this.socialNetwork.createCoworkersIterator(profileEmail);
        while(await this.iterator.hasNext()) {
            const profile = await this.iterator.getNext() as Profile;
            this.sendMessage(profile.email, message);
        }
    }

    sendMessage(email: string, message: string): void {
        console.log(`Sent message to: ${email}. Message body: ${message}`);
    }
}