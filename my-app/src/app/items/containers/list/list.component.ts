import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { AbstractComponent } from '../abstract/abstract.component';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent extends AbstractComponent  implements OnInit {

  public state = State;

  constructor(collectionService: CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
  }

  public add(item: Item): void {
    console.log(item);
  }

}
