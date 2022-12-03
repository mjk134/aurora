// Circluar dependencies everywhere! Will fix soon!
import { EventEmitter } from "stream";
import { GatewayDispatchEvents, Intents } from "../api/types/enums";
import User from "../api/User";
import { REST } from "./REST";
import DiscordSocketManager from "./SocketMananger";

interface ClientInterface {
    socket: DiscordSocketManager;
    token: string;
    intents: Intents[];
    cache: any;
    rest: any;
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
    cache: any;
    rest: REST = new REST(this, "10");
    user: User;
    socket: DiscordSocketManager = new DiscordSocketManager({ version: "10", client: this });

    constructor ({ intents }: ClientOptions) {
        super();
        this.intents = intents;
    }

    public run(token: string) {
        this.token = token;
        this.socket.initialise({ intents: this.intents, token })
        this.once(GatewayDispatchEvents.READY, () => {
            console.log(this.user.id)
            this.rest.get(`/users/${this.user.id}`).then(console.log)
        })
    }
    
    
}