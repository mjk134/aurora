import Client from '../../client/Client';
import User from '../User'

interface GuildEmojiProperties {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean; 
}

interface GuildEmojiOptions {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: Record<string, any>;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean; 
}

export default class GuildEmoji {
    private properties: GuildEmojiProperties;
    
    constructor(options: GuildEmojiOptions, client: Client) {
        let properties: any = options;
        if (options.user) {
            properties.user = new User(properties.user, client)
        }
        this.properties = properties;
    }
    
    public get id() : string | null {
        return this.properties.id;
    }
    
}