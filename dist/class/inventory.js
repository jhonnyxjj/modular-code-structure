"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    listItems() {
        return [...this.items];
    }
    filterByType(type) {
        return this.items.filter(item => item.type === type);
    }
}
exports.Inventory = Inventory;
