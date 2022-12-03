interface GuildProperties {
    id: string;
    name: string;
    icon: string;
    icon_hash: string;
    splash: string;
    discovery_splash: string;
    owner_id: string;
    joined_at: string;
    large: boolean;
    unavailable: boolean;
    member_count: number;
    region: string;
    voice_states: any[];
    members: any[];
    channels: any[];
    threads: any[];
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled: boolean;
    widget_channel_id: string;
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
    max_presences: number | null;
    max_members: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: number;
    presences: any[];
    guild_scheduled_events: any[];
    premium_subscription_count: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users: number;
    approximate_member_count: number;
    approximate_presence_count: number;
    welcome_screen: Record<string, any>;
    nsfw_level: number;
    stickers: any[];
    stage_instances: any[];
    premium_progress_bar_enabled: boolean;
}

export default class Guild {
    private properties: GuildProperties;

    
}