import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../interfaces/user';
import { ConnectService } from '../../../core/services/connect.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-reactive-login',
  templateUrl: './form-reactive-login.component.html',
  styleUrls: ['./form-reactive-login.component.css']
})
export class FormReactiveLoginComponent implements OnInit {

  public form: FormGroup;
  public msg: BehaviorSubject<string>;

  @Output() nUser: EventEmitter<User> = new EventEmitter;

  constructor(
    private fb: FormBuilder,
    private connectService: ConnectService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.msg = this.connectService.msg;
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }
  public process() {
    this.nUser.emit(this.form.value);

    // vide l'ensemble du formulaire
    this.form.reset();
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }
}
