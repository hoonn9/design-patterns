import {ProfileIterator} from "./profile-iterator";
import {Facebook} from "../social-network/facebook";
import {Profile} from "../profile/profile";

export class FacebookIterator implements ProfileIterator {

    private emails: string[] = [];
    private profiles: Profile[] = [];
    private currentPosition: number = 0;
    constructor(
        private facebook: Facebook,
        private type: string,
        private email: string,
    ) {
    }

    private async lazyLoad(): Promise<void> {
        if (!this.emails.length) {
            const profiles = await this.facebook.requestProfileFriendsFromFacebook(this.email, this.type);

            for (const profile of profiles) {
                this.emails.push(profile);
                // this.profiles
            }
        }
    }

    async getNext(): Promise<Profile | null> {
        if (!await this.hasNext()) {
            return null;
        }

        const friendEmail = this.emails[this.currentPosition];
        let profile: Profile | undefined = this.profiles[this.currentPosition];

        if (!profile) {
           profile = await this.facebook.requestProfileFromFacebook(friendEmail);
           if (profile) {
               this.profiles[this.currentPosition] = profile;
           }
        }
        this.currentPosition++;
        return profile || null;
    }

    async hasNext(): Promise<boolean> {
        await this.lazyLoad();
        return this.currentPosition < this.emails.length;
    }

    reset(): void {
        this.currentPosition = 0;
    }
}