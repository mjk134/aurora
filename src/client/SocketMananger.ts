import EventEmitter from "events";
import { GatewaySessionEvents, Intents } from "../api/types/enums";
import Client from "./Client";
import handlers from "./handlers";

interface SocketManagerInterface {
    version: string;
    socket: WebSocket;
    client: Client;
    heartbeatInterval: number | null;
}

interface SocketManagerOptions {
    /**
     * The Discord Gateway version number.
     */
    version: string;
    /**
     * Client class
     */
    client: Client; 
}

/**
 * A class that manages interactions between Aurora and the Discord Gateway.
 */
class DiscordSocketManager extends EventEmitter implements SocketManagerInterface {
    version: string;
    client: Client;
    socket: WebSocket;
    heartbeatInterval: number | null;

    constructor({ version, client }: SocketManagerOptions) {
        super()
        this.version = version;
        this.client = client;
    }

    /**
     * Initialise event handlers and connection to gateway
     */
    public initialise({ intents, token }: { intents: Intents[]; token: string; }) {
        this.socket = new WebSocket(`wss://gateway.discord.gg/gateway/bot?v=${this.version}&encoding=json`)
        this.socket.addEventListener("message", (message) => {
            console.log(message)
            const { data } = message;
            /* Basic discord error checking, will definetly need to be changed. */
            if (data === "Authentication failed.") {
                throw new Error("Invalid token.")
            }
            if (data === "Disallowed intent(s).") {
                throw new Error("You need to enable intents of your application.")
            }

            const parsedData = JSON.parse(data)

            switch (parsedData.op) {
                case GatewaySessionEvents.HELLO:
                    setTimeout(() => {
                        this.sendHeartbeat()
                        this.heartbeatInterval = setInterval(() => this.sendHeartbeat(), parsedData.d.heartbeat_interval) // Send hearbeats given the interval by discord
                    }, parsedData.d.heartbeat_interval * Math.round(Math.random()))
                    return this.identify({ intents, token });
                case GatewaySessionEvents.DISPATCH:
                    return this.handlePacket(parsedData.t, parsedData.d)
                case GatewaySessionEvents.HEARTBEAT:
                    return this.sendHeartbeat()
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
        console.debug("sending hearbeat")
        const data = {
            "op": GatewaySessionEvents.HEARTBEAT,
            "d": null
        }
        this.send(data);
    }

    private identify({ intents, token }: { intents: Intents[]; token: string; }) {
        const identify = {
            "op": GatewaySessionEvents.IDENTIFY,
            "d": {
                "token": token,
                "intents": intents.reduce((a, b) => a + b),
                "properties": {
                    "os": "linux",
                    "browser": "aurora",
                    "device": "aurora"
                }
            }
        }
        this.send(identify)
    }

    public send(data: Record<string, any>) {
        if (this.socket.OPEN) {
            this.socket.send(JSON.stringify(data))
        }
    }

    private handlePacket(event, data) {
        handlers[event](this.client, data)
    }
}

export default DiscordSocketManager;