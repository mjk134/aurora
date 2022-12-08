// Circluar dependencies everywhere! Will fix soon!
import { EventEmitter } from "stream";
import { GatewayDispatchEvents, Intents } from "../api/types/enums";
import User from "../api/User";
import CacheManager from "./CacheManager";
import { REST } from "./REST";
import DiscordSocketManager from "./SocketMananger";

interface ClientInterface {
    socket: DiscordSocketManager;
    token: string;
    intents: Intents[];
    cache: CacheManager;
    rest: REST;
    user: User;

    run: (token: string) => void;
}

interface ClientOptions {
    /**
     * The intents to send to gateway via identify.
     */
    intents: Intents[];
}

export default class Client extends EventEmitter implements ClientInterface {
    token: string;
    intents: Intents[];
    cache: CacheManager = new CacheManager(this);
    rest: REST;
    user: User;
    socket: DiscordSocketManager = new DiscordSocketManager({ version: "10", client: this });

    constructor ({ intents }: ClientOptions) {
        super();
        this.intents = intents;
    }

    public run(token: string) {
        this.token = token;
        this.rest = new REST(this, "10");
        this.socket.initialise({ intents: this.intents, token })
        this.once(GatewayDispatchEvents.Ready, () => {
            console.log("Ready!")
        })
        this.on(GatewayDispatchEvents.GuildCreate, (guild) => {
            // console.log(this.cache.guilds)
        })
    }
    
    
}