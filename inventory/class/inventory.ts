import { IItem } from "../types/Iitem";
import { ItemType } from "../enum/ItemType";


export class Inventory {
  items: IItem[] = [];

  addItem(item: IItem) {
    this.items.push(item);
  }

  listItems(): IItem[] {
    return [...this.items];
  }

  filterByType(type: ItemType): IItem[] {
    return this.items.filter(item => item.type === type);
  }
}       
