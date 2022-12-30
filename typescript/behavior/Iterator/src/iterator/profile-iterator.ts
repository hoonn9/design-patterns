import {Profile} from "../profile/profile";

export interface ProfileIterator {
    hasNext(): Promise<boolean>;
    getNext(): Promise<Profile | null>;
    reset(): void;
}