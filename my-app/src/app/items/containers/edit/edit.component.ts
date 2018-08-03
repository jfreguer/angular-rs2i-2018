import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CollectionService } from '../../../core/services/collection.service';

import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public item: Item;

  constructor(
    private collectionService: CollectionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.item = data['item'];
      console.log(this.item);
    });
    console.log(this.activatedRoute);
    console.log(this.router);
  }

  public update(item: Item): void {
    console.log(item);
    this.collectionService.update(item);
//    this.router.navigate(['items/list']);
  }
}
