"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
const ItemType_1 = require("../enum/ItemType");
class Key {
    id;
    name;
    opensDoorId;
    type;
    constructor(id, name, opensDoorId) {
        this.id = id;
        this.name = name;
        this.opensDoorId = opensDoorId;
        this.type = ItemType_1.ItemType.KEY;
    }
}
exports.Key = Key;
