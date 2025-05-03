import { ItemType } from "../enum/ItemType";
import { IItem } from "../types/Iitem";


export class Key implements IItem {
    type: ItemType;

    constructor(
        public id: string | number,
        public name: string,
        public opensDoorId: string
    ) {
        this.type = ItemType.KEY;
    }
}