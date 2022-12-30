import {SocialNetwork} from "./social-network.interface";
import {Profile} from "../profile/profile";
import {ProfileIterator} from "../iterator/profile-iterator";
import {FacebookIterator} from "../iterator/facebook-iterator";

export class Facebook implements SocialNetwork {
    constructor(
     private profiles: Profile[] = []
    ) {
    }

    async requestProfileFromFacebook(profileEmail: string): Promise<Profile | undefined> {
        console.log(`Facebook: Loading profile ${profileEmail} over the network...`)
        await this.simulateNetworkLatency();

        return this.findProfile(profileEmail);
    }

    async requestProfileFriendsFromFacebook(profileEmail: string, contactType: string): Promise<string[]> {
        console.log(`Facebook: Loading ${contactType} list of ${profileEmail} over the network...`)
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
        return new FacebookIterator(this, 'friends', profileEmail);
    }

    createFriendsIterator(profileEmail: string): ProfileIterator {
        return new FacebookIterator(this, 'coworkers', profileEmail);
    }
}