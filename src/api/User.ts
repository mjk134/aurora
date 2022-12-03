import Client from "../client/Client";

interface UserProperties {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string;
    accent_color?: number;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: any[];
    premium_type?: any;
    public_flags?: any[];
}

export default class User {
    private properties: UserProperties;
    private client: Client;

    constructor (options: UserProperties, client: Client) {
        this.properties = options;
        this.client = client;
    }
    
    /**
     * ID for the user, a discord snowflake.
     */
    public get id(): string {
        return this.properties.id;
    }
    
    public get bot(): boolean {
        return this.properties.bot;
    }
    
    
}