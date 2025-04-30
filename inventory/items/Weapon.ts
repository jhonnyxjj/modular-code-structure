import { IItem, ItemType } from "../enum/index";


export class Weapon implements IItem {
    type: ItemType;

    constructor(
        public id: string | number,
        public name: string,
        damage: number
    ) {
        this.type = ItemType.KEY;
    }
}