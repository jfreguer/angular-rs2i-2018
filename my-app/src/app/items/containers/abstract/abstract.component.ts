import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  public collection: Item[];

  constructor(
    protected collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }

}
