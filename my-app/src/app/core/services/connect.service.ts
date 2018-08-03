import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable, BehaviorSubject } from 'rxjs';
import { Auth } from '../../shared/interfaces/auth';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private usersCollection: AngularFirestoreCollection<User>;
  private users$: Observable<User[]>;
  public msg$: BehaviorSubject<string> = new BehaviorSubject(null);
  public isConnected$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public user: User;

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) {
  }

  connect(auth: Auth): void {

    this.usersCollection = this.afs.collection<User>('userCollection', ref =>
      ref.where('login', '==', auth.login)
      .where('password', '==', auth.password)
    );

    this.users$ = this.usersCollection.valueChanges();

    this.users$.subscribe((data) => {
      if (data.length === 1) {
          this.isConnected$.next(true);
          this.user = data[0];
          this.router.navigate(['items/list']);
        } else {
          // Redirection vers la page d'erreur
          // Push la donnée dans l'observable :
          this.isConnected$.next(false);
          this.msg$.next('tu t\'es trompé tonton');
          this.router.navigate(['login']);
        }
    });
  }
}
