"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const ItemType_1 = require("../enum/ItemType");
class Weapon {
    id;
    name;
    type;
    constructor(id, name, damage) {
        this.id = id;
        this.name = name;
        this.type = ItemType_1.ItemType.KEY;
    }
}
exports.Weapon = Weapon;
