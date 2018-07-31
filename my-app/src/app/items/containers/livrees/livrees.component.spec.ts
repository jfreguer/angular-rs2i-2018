import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreesComponent } from './livrees.component';

describe('LivreesComponent', () => {
  let component: LivreesComponent;
  let fixture: ComponentFixture<LivreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
