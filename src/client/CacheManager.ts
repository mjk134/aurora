import Guild from "../api/guild/Guild";
import User from "../api/User";
import Client from "./Client";

export default class CacheManager {
    public guilds: Map<string, Guild> = new Map();
    public users: Map<string, User> = new Map();
    private client: Client

    constructor(client: Client) {
        this.client = client;
    }

}