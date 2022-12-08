import { PermissionsBits } from "../types/enums";

export default class Permissions {
    private permissionBits: number;

    constructor(permissions: number) {
        this.permissionBits = permissions;
    }

    public has(permission: PermissionsBits) {
        return (this.permissionBits & permission) === permission;
    }

    public toArray() {
        return Object.keys(PermissionsBits).filter((value) => (this.permissionBits & PermissionsBits[value]) === PermissionsBits[value]);
    }
}