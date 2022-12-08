import Client from "./Client";

/**
 * A class to help Aurora to interact with the HTTP API
 */
export class REST {
    private client: Client;
    private version: string;
    private headers: Headers;

    constructor(client: Client, version: string) {
        this.client = client;
        this.headers = new Headers({
            "Authorization": `Bot ${client.token}`,
            "User-Agent": "DiscordBot (https://github.com/mjk134/aurora 0.0.1)"
        })
        this.version = version;
    }

    public post(endpoint: string, data: Record<string, any>) {

    }

    public async get(endpoint: string) {
        const response = await fetch(`https://discord.com/api/v${this.version + endpoint}`, {
            headers: this.headers
        })
        if (response.status === 200) return await response.json();
        else throw Error("Failed to get.");
    }
}