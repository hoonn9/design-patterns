export class Profile {
    public contacts: Map<string, string[]> = new Map();

    constructor(
        public email: string,
        public name: string,
        ...contacts: string[]
    ) {
        for (const contact of contacts) {
            const [contactType, email] = contact.split(":");

            if (!this.contacts.has(contactType)) {
                this.contacts.set(contactType, []);
            }
            this.contacts.get(contactType)!.push(email);
        }
    }

    getContacts(contactType: string): string[] {
        if (!this.contacts.has(contactType)) {
            this.contacts.set(contactType, []);
        }
        return this.contacts.get(contactType) as string[];
    }
}