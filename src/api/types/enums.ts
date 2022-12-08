export enum GatewaySessionEvents {
    DISPATCH = 0,
    HEARTBEAT = 1,
    IDENTIFY = 2,
    PRESENCE = 3,
    VOICE_STATE = 4,
    VOICE_PING = 5,
    RESUME = 6,
    RECONNECT = 7,
    REQUEST_MEMBERS = 8,
    INVALIDATE_SESSION = 9,
    HELLO = 10,
    HEARTBEAT_ACK = 11,
    GUILD_SYNC = 12
}

export enum Intents {
    GUILDS = 1,
    GUILD_MEMBERS = 2,
    GUILD_BANS = 4,
    GUILD_EMOJIS_AND_STICKERS = 8,
    GUILD_INTEGRATIONS = 16,
    GUILD_WEBHOOKS = 32,
    GUILD_INVITES = 64,
    GUILD_VOICE_STATES = 128,
    GUILD_PRESENCES = 256,
    GUILD_MESSAGES = 512,
    GUILD_MESSAGE_REACTIONS = 1024,
    GUILD_MESSAGE_TYPING = 2048,
    DIRECT_MESSAGES = 4096,
    DIRECT_MESSAGE_REACTIONS = 8192,
    DIRECT_MESSAGE_TYPING = 16384,
    MESSAGE_CONTENT = 32768,
    GUILD_SCHEDULED_EVENTS = 65536,
    AUTO_MODERATION_CONFIGURATION = 1048576,
    AUTO_MODERATION_EXECUTION = 2097152
}

export enum GatewayDispatchEvents {
    Ready = "READY",
    GuildCreate = "GUILD_CREATE"
}

// TOTAL_BITS & BIT_TO_CHECK === BIT_TO_CHECK -> true | false
export enum PermissionsBits {
    CREATE_INSTANT_INVITE = 1 << 0,
	KICK_MEMBERS = 1 << 1,
	BAN_MEMBERS = 1 << 2,
	ADMINISTRATOR = 1 << 3,
	MANAGE_CHANNELS = 1 << 4,
	MANAGE_GUILD = 1 << 5,
	ADD_REACTIONS = 1 << 6,
	VIEW_AUDIT_LOG = 1 << 7,
	PRIORITY_SPEAKER = 1 << 8,
	STREAM = 1 << 9,
	VIEW_CHANNEL = 1 << 10,
	SEND_MESSAGES = 1 << 11,
	SEND_TTS_MESSAGES = 1 << 12,
	MANAGE_MESSAGES = 1 << 13,
	EMBED_LINKS = 1 << 14,
	ATTACH_FILES = 1 << 15,
	READ_MESSAGE_HISTORY = 1 << 16,
	MENTION_EVERYONE = 1 << 17,
	USE_EXTERNAL_EMOJIS = 1 << 18,
	VIEW_GUILD_INSIGHTS = 1 << 19,
	CONNECT = 1 << 20,
	SPEAK = 1 << 21,
	MUTE_MEMBERS = 1 << 22,
	DEAFEN_MEMBERS = 1 << 23,
	MOVE_MEMBERS = 1 << 24,
	USE_VAD = 1 << 25,
	CHANGE_NICKNAME = 1 << 26,
	MANAGE_NICKNAMES = 1 << 27,
	MANAGE_ROLES = 1 << 28,
	MANAGE_WEBHOOKS = 1 << 29,
	MANAGE_EMOJIS_AND_STICKERS = 1 << 30,
	USE_APPLICATION_COMMANDS = 1 << 31,
	REQUEST_TO_SPEAK = 1 << 32,
    MANAGE_EVENTS = 1 << 33,
    MANAGE_THREADS = 1 << 34,
    CREATE_PUBLIC_THREADS = 1 << 35,
    CREATE_PRIVATE_THREADS = 1 << 36,
    USE_EXTERNAL_STICKERS = 1 << 37,
    SEND_MESSAGES_IN_THREADS = 1 << 38,
    USE_EMBEDDED_ACTIVITIES = 1 << 39,
    MODERATE_MEMBERS = 1 << 40,
}