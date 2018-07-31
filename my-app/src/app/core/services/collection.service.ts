import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  get collection(): Item[] {
    return this._collection;
  }

  /**
    * set collection
    */
  set collection(col: Item[]) {
    this._collection = col;
  }

  /**
  * get one item from collection
  */

  /**
  * add item in collection
  */

  /**
  * update item in collection
  */
  public update(arg0: Item): void {
    // Update en base de données à mettre en place + catch des erreurs
  }

  /**
  * delete item in collection
  */
  }
