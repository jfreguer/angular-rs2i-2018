import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveLoginComponent } from './form-reactive-login.component';

describe('FormReactiveLoginComponent', () => {
  let component: FormReactiveLoginComponent;
  let fixture: ComponentFixture<FormReactiveLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
