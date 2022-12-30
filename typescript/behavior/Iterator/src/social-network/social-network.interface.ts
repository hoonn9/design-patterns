import {ProfileIterator} from "../iterator/profile-iterator";

export interface SocialNetwork {
    createFriendsIterator(profileEmail: string): ProfileIterator;
    createCoworkersIterator(profileEmail: string): ProfileIterator;
}