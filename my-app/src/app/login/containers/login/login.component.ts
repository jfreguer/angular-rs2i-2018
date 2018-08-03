import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/interfaces/user';

import { ConnectService } from '../../../core/services/connect.service';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private connectService: ConnectService
  ) { }
  ngOnInit() {
  }

  public connect(user: User): void {
    const validCredentials = this.connectService.connect(user);

  }
}
