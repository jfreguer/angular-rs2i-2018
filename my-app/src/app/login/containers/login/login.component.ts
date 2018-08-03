import { Component, OnInit } from '@angular/core';

import { ConnectService } from '../../../core/services/connect.service';

import { Auth } from '../../../shared/interfaces/auth';

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

  public connect(auth: Auth): void {
    const validCredentials = this.connectService.connect(auth);

  }
}
