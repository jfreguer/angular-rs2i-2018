import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollectionService } from '../../../core/services/collection.service';

import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Item): void {
    console.log(item);
    this.collectionService.add(item);
    this.router.navigate(['items/list']);
  }

}
