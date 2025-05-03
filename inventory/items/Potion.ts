import { ItemType } from "../enum/ItemType";
import { IItem } from "../types/Iitem";



export class Potion implements IItem {
    type: ItemType;

    constructor(
        public id: string | number,
        public name: string,
        public healAmount: number
    ) {
        this.type = ItemType.POTION;
    }
}