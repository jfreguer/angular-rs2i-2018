import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../shared/interfaces/item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;
  private url_api = 'api.monsite.com/';

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.collection = this.itemsCollection.valueChanges();
    // this.collection = this.http.get<Item>(`${url_api}``);
  }

  /**
   * get collection
   */
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**
   * set collection
   */
  set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

  /**
   * get one item from collection
   */

  /**
   * add item in collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));

  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));

      // Avec HttpClient :
      // return this.http.patch<Item>(url, item, option);
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));

      // Avec HttpClient :
      // return this.http.delete<Item>(url, item, option);
    }

  // get data on item
  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }
}
