import {Component, OnInit} from '@angular/core';

import {Item} from "../item";
import {CollectionService} from "../collection.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection: any[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getItem().valueChanges().subscribe((data) =>
      this.collection = data
    );
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
