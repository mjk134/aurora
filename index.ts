// IMPORTANT: For some reason bun doesn't like running files that aren't in the root folder. This is temporary!
import DiscordSocketManager from "./src/client/SocketMananger"

const discordGatewayConn = new DiscordSocketManager({ version: "10", token: "" })
discordGatewayConn.initialise();
