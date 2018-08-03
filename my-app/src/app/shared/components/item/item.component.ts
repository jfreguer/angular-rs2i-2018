import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { database } from '../../../../../node_modules/firebase';

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

  public delete(): void {
    console.log('delete');
    this.collectionService.delete(this.item);

    // this.collectionService.delete(item).subscribe((data) => {
    //  if (data) {
        // message to user
    //  }
    // });
  }

  public update(item: Item): void {
    this.collectionService.update(this.item);

    // En cas d'utilisation de HTTP Client :
    // this.collectionService.update(item).subscribe((data) => {
    //    if (data){
    //      data.state = item.state;
    //    }
    //  });
  }

  public add(item: Item): void {
    this.collectionService.add(this.item);
  }

}
