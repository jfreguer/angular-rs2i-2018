import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../../../core/services/connect.service';
import { User } from 'src/app/shared/interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {

  public title = 'My super App';
  public isCollapsed = true;
  public isConnected$: BehaviorSubject<boolean>;
  public user: User;

  constructor(
    private connectService: ConnectService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.isConnected$ = this.connectService.isConnected$;
    this.user = this.connectService.user;
  }

  public logout(): void {
    this.connectService.isConnected$.next(false);
    this.router.navigate(['login']);
  }
}
