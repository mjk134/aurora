import Client from "../../client/Client";
import Permissions from "./Permissions";

interface GuildRoleProperties {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: number;
    permissions: Permissions;
    managed: boolean;
    mentionable: boolean;
    tags?: {
        bot_id?: string;
        integration_id?: string;
        premium_subscriber?: null;
    };
}

interface GuildRoleOptions {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: {
        bot_id?: string;
        integration_id?: string;
        premium_subscriber?: null;
    };
}

export default class GuildRole {
    private properties: GuildRoleProperties;
    private client: Client;

    constructor(options: GuildRoleOptions, client: Client) {
        this.client = client;
        let properties: any = options;
        properties.permissions = new Permissions(parseInt(options.permissions))
        this.properties = properties;
    }
    
    public get id(): string {
        return this.properties.id;
    }
    
    public get name(): string {
        return this.properties.name;
    }

    public get color(): string {
        return `#${this.properties.color.toString(16)}`
    }
    
    public get pinned(): boolean {
        return this.properties.hoist;
    }
    
    public get emoji(): string | null {
        return this.properties.unicode_emoji;
    }
    
    public get position(): number {
        return this.properties.position;
    }
    
    public get managed(): boolean {
        return this.properties.managed;
    }
    
    public get permissions(): Permissions {
        return this.properties.permissions;
    }
    
    
    public get mentionable(): boolean {
        return this.properties.mentionable;
    }
    
}