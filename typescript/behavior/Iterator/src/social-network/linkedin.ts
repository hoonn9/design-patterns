import {SocialNetwork} from "./social-network.interface";
import {ProfileIterator} from "../iterator/profile-iterator";
import {Profile} from "../profile/profile";
import {LinkedinIterator} from "../iterator/linkedin-iterator";

export class Linkedin implements SocialNetwork {
    constructor(
        private profiles: Profile[] = []
    ) {
    }

    async requestContactInfoFromLinkedInAPI(profileEmail: string): Promise<Profile | undefined> {
        console.log(`LinkedIn: Loading profile ${profileEmail} over the network...`)
        await this.simulateNetworkLatency();

        return this.findProfile(profileEmail);
    }

    async requestRelatedContactsFromLinkedInAPI(profileEmail: string, contactType: string): Promise<string[]> {
        console.log(`LinkedIn: Loading ${contactType} list of ${profileEmail} over the network...`)
        await this.simulateNetworkLatency();

        const profile = this.findProfile(profileEmail);

        if (profile) {
            return profile.getContacts(contactType);
        }

        return [];
    }

    private findProfile(profileEmail: string): Profile | undefined {
        return this.profiles.find((profile) => profile.email === profileEmail);
    }

    private simulateNetworkLatency(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, 2500));
    }

    createCoworkersIterator(profileEmail: string): ProfileIterator {
        return new LinkedinIterator(this, "friends", profileEmail);
    }

    createFriendsIterator(profileEmail: string): ProfileIterator {
        return new LinkedinIterator(this, "coworkers", profileEmail);
    }
}