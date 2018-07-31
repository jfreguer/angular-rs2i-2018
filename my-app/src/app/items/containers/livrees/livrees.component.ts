import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-livrees',
  templateUrl: './livrees.component.html',
  styleUrls: ['./livrees.component.css']
})
export class LivreesComponent extends AbstractComponent implements OnInit {

  public collection: Item[];
  public state = State;

  constructor(collectionService: CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
  }
}
