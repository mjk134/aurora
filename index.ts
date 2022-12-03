// IMPORTANT: For some reason bun doesn't like running files that aren't in the root folder. This is temporary!

import Client from "./src/client/Client";
import { GatewayDispatchEvents, Intents } from "./src/api/types/enums";

const client = new Client({ intents: [Intents.MESSAGE_CONTENT, Intents.GUILDS] })

client.run(process.env.DISCORD_TOKEN)