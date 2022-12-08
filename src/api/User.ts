import Client from "../client/Client";

enum PremiumType {
    None = 0,
    NitroClassic = 1,
    Nitro = 2,
    NitroBasic = 3
}

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
    flags?: any[]; // TODO: Implement this
    premium_type?: PremiumType;
    public_flags?: any[]; // TODO: Implement this
}

interface UserOptions {
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
    flags?: any;
    premium_type?: any;
    public_flags?: any;
}

export default class User {
    private properties: UserProperties;
    private client: Client;

    constructor (options: UserOptions, client: Client) {
        this.properties = options;
        this.client = client;
    }
    
    /**
     * ID for the user, a discord snowflake.
     */
    public get id(): string {
        return this.properties.id;
    }
    
    public get username(): string {
        return this.properties.username;
    }

    public get discriminator(): string {
        return this.properties.discriminator;
    }

    /**
     * @description Whether the user is an Official Discord System user (part of the urgent message system)
     */
    public get system(): boolean {
        return this.properties.system;
    }

    /**
     * Whether the user is a bot or not.
     */
    public get bot(): boolean {
        return this.properties.bot;
    }

    /**
     * @returns The hexadecimal value of the `number` colour.
     */
    public get accentColor() : string {
        return `#${this.properties.accent_color.toString(16)}`;
    }
    

    /**
     * @description The subscription of nitro they have.
     */
    public get nitroType(): PremiumType {
        return this.properties.premium_type;
    }
    
    
}