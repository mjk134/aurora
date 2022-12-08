import Client from "../../client/Client"
import User from "../User"
import GuildRole from "./GuildRole";

interface GuildMemberProperties {
    user?: User;
    nick?: string | null;
    avatar?: string | null;
    roles: string[];
    joined_at: string;
    premium_since?: string | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string | null;
}

interface GuildMemberOptions {
    user?: any;
    nick?: string | null;
    avatar?: string | null;
    roles: any[];
    joined_at: string;
    premium_since?: string | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string | null;
}

export default class GuildMember {
    private properties: GuildMemberProperties;
    private client: Client;

    constructor(options: GuildMemberOptions, client: Client) {
        this.client = client;
        const properties: any = options; // Definetly a much better way to do this
        if (properties.user) {
            properties.user = new User(properties.user, client)
        }
        this.properties = properties;
    }
    
    public get nickname(): string {
        return this.properties.nick;
    }
    
    public get roles(): string[] {
        return this.properties.roles;
    }
    
    /**
     * @descripition The Date of when the user joined the guild
     */
    public get joinedAt(): Date {
        return new Date(this.properties.joined_at);
    }

    /**
     * @description If the `GuildMember` is mute or not.
     */
    public get isMute(): boolean {
        return this.properties.mute;
    }

    /**
     * @description If the `GuildMember` is deaf or not.
     */
    public get isDeaf(): boolean {
        return this.properties.deaf;
    }

    /**
     * @description Whether the user has passed the membership screening or not.
     */
    public get pendingVerification(): boolean {
        return this.properties.pending;
    }

    public get timeoutFinish() : Date | null {
        if (this.properties.communication_disabled_until) return new Date(this.properties.communication_disabled_until);
        else return null;
    }
    
    
}