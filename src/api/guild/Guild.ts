import Client from "../../client/Client";
import { PermissionsBits } from "../types/enums";
import User from "../User";
import GuildEmoji from "./GuildEmoji";
import GuildMember from "./GuildMember";
import GuildRole from "./GuildRole";

interface GuildProperties {
    id: string;
    name: string;
    icon: string;
    icon_hash?: string;
    splash: string;
    discovery_splash: string;
    owner?: boolean; 
    owner_id: string;
    permissions?: any[];
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    region?: string;
    voice_states?: any[];
    members?: Map<string, GuildMember>;
    channels?: any[];
    threads?: any[];
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string | null;
    verification_level: number;
    default_message_notifications: string;
    explicit_content_filter: string;
    roles: Map<string, GuildRole>;
    emojis: Map<string, GuildEmoji>;
    features: any[];
    mfa_level: number;
    application_id: string;
    system_channel_id: string;
    system_channel_flags: number;
    rules_channel_id: string;
    max_presences?: number | null;
    max_members: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: number;
    presences?: any[];
    guild_scheduled_events?: any[];
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: Record<string, any>;
    nsfw_level: number;
    stickers?: any[];
    stage_instances?: any[];
    premium_progress_bar_enabled: boolean;
}

interface GuildOptions {
    id: string;
    name: string;
    icon: string;
    icon_hash?: string;
    splash: string;
    discovery_splash: string;
    owner?: boolean; 
    owner_id: string;
    permissions?: any[];
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    region?: string;
    voice_states?: any[];
    members?: any[];
    channels?: any[];
    threads?: any[];
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string | null;
    verification_level: number;
    default_message_notifications: string;
    explicit_content_filter: string;
    roles: any[];
    emojis: any[];
    features: any[];
    mfa_level: number;
    application_id: string;
    system_channel_id: string;
    system_channel_flags: number;
    rules_channel_id: string;
    max_presences?: number | null;
    max_members: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: number;
    presences?: any[];
    guild_scheduled_events?: any[];
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: Record<string, any>;
    nsfw_level: number;
    stickers?: any[];
    stage_instances?: any[];
    premium_progress_bar_enabled: boolean;
}

export default class Guild {
    private properties: GuildProperties;
    private client: Client;

    constructor(options: GuildOptions, client: Client) {
        this.client = client;
        let properties: any = options; // Definetly a much better way to do this
        if (options.members) {
            let newMembers = new Map<string, GuildMember>()
            options.members.forEach((value) => {
                newMembers.set(value.user.id, new GuildMember(value, client))
            })
            properties.members = newMembers;
        }
        if (options.roles) {
            let newRoles = new Map<string, GuildRole>();
            options.roles.forEach(value => newRoles.set(value.id, new GuildRole(value, client)))
            properties.roles = newRoles;
        }
        if (options.emojis) {
            let newEmojis = new Map<string, GuildEmoji>();
            options.emojis.forEach(value => newEmojis.set(value.id, new GuildEmoji(value, client)))
            properties.emojis = newEmojis;
        }
        this.properties = properties;
    }

    public get members() : Map<string, GuildMember> {
        return this.properties.members;
    }
    
    
}