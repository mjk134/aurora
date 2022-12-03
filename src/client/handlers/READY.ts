import { GatewayDispatchEvents } from "../../api/types/enums";
import User from "../../api/User";
import Client from "../Client";

const readyEventHandler = (client: Client, data: Record<string, any>) => {
    client.user = new User(data.user, client)
    client.emit(GatewayDispatchEvents.READY)
}

export default readyEventHandler;