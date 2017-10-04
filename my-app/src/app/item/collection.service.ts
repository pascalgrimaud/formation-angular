import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Item} from "./item";

@Injectable()
export class CollectionService {

  constructor(private db: AngularFireDatabase) { }

  getItem(): AngularFireList<Item> {
    return this.db.list('/collection');
  }

  addItem(item: any) {
    this.db.list('/collection').push(item);
  }
}
