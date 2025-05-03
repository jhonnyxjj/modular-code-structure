import { ItemType } from "../enum/ItemType";

export interface IItem {
    id: string | number;
    name: string;
    type: ItemType;
} 