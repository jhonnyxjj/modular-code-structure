import { ItemType } from "../enum/ItemType";
import { IItem } from "../types/Iitem";


export class Weapon implements IItem {
    type: ItemType;
    

    constructor(
        public id: string | number,
        public name: string,
        public damage: number
    ) {
        this.type = ItemType.WEAPON;
    }
}