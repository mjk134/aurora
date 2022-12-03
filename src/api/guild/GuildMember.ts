import User from "../User"

interface GuildMemberProperties {
    user: User
    nick: string
    avatar: string
    roles: any[]
    joined_at: string
    premium_since: string
    deaf: boolean
    mute: boolean
    pending: boolean
    permissions: string
    communication_disabled_until: string
}

export class GuildMember {
    private properties: GuildMemberProperties;
}