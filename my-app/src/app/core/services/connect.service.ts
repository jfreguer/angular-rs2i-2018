import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { User } from '../../shared/interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private usersCollection: AngularFirestoreCollection<User>;
  private users$: Observable<User[]>;
  public msg: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) {
  }

  connect(user: User): void {

    this.usersCollection = this.afs.collection<User>('userCollection', ref =>
      ref.where('login', '==', user.login)
      .where('password', '==', user.password)
    );

    this.users$ = this.usersCollection.valueChanges();

    this.users$.subscribe((data) => {
      if (data.length === 1) {
          this.router.navigate(['items/list']);
        } else {
          // Redirection vers la page d'erreur
          // Push la donnée dans l'observable :
          this.msg.next('tu t\'es trompé tonton');
          this.router.navigate(['login']);
        }
    });
  }
}
