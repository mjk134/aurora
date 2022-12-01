import EventEmitter from "events";
import { GatewayEvent } from "../types/enums";

interface SocketManagerInterface {
    version: string;
    socket: WebSocket;
    token: string;
    heartbeatInterval: number | null;
}

interface SocketManagerOptions {
    /**
     * The Discord Gateway version number.
     */
    version: string;
    /**
     * The token to be used to identify with the Discord Gateway.
     * !!! WILL BE REPLACED WITH A CLIENT CLASS !!!
     */
    token: string; 
}

/**
 * A class that manages interactions between Aurora and the Discord Gateway.
 */
class DiscordSocketManager extends EventEmitter implements SocketManagerInterface {
    version: string;
    socket: WebSocket;
    token: string;
    heartbeatInterval: number | null;

    constructor({ version, token }: SocketManagerOptions) {
        super()
        this.version = version;
    }

    /**
     * Initialise event handlers and connection to gateway
     */
    public initialise() {
        this.socket = new WebSocket(`wss://gateway.discord.gg/?v=${this.version}&encoding=json`)
        this.socket.addEventListener("message", ({ data }) => {
            const parsedData = JSON.parse(data)

            switch (parsedData.op) {
                case GatewayEvent.HELLO:
                    this.sendHeartbeat() // Send hearbeat immediately
                    this.heartbeatInterval = setInterval(() => this.sendHeartbeat(), parsedData.d.heartbeat_interval) // Send hearbeats given the interval by discord
                    break;
            }
        })
        this.socket.addEventListener("close", () => {
            this.heartbeatInterval = null;
        })
        this.socket.addEventListener("error", (event) => {
            console.log(event)
        })
    }

    private sendHeartbeat() {
        const data = {
            "op": GatewayEvent.HEARTBEAT,
            "d": null
        }
        this.send(data);
    }

    private send(data: Record<string, any>) {
        if (this.socket.OPEN) {
            this.socket.send(JSON.stringify(data))
        }
    }
}

export default DiscordSocketManager;