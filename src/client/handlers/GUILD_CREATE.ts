import Guild from "../../api/guild/Guild";
import { GatewayDispatchEvents } from "../../api/types/enums";
import Client from "../Client";

const guildCreateHandler = (client: Client, data) => {
    client.cache.guilds.set(data.id, new Guild(data, client))
    client.emit(GatewayDispatchEvents.GuildCreate, client.cache.guilds.get(data.id))
}

export default guildCreateHandler;