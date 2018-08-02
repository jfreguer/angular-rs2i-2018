import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  public states = Object.values(State);
  faCoffee = faCoffee;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  public changeState(state: State): void {
    this.item.state = state;
    // update using collection service in database
    this.collectionService.update(this.item);
  }
}
