"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potion = void 0;
const ItemType_1 = require("../enum/ItemType");
class Potion {
    id;
    name;
    healAmount;
    type;
    constructor(id, name, healAmount) {
        this.id = id;
        this.name = name;
        this.healAmount = healAmount;
        this.type = ItemType_1.ItemType.POTION;
    }
}
exports.Potion = Potion;
