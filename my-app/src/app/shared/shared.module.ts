import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External librairies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';

import { FormComponent } from './components/form/form.component';
import { ItemComponent } from './components/item/item.component';
import { NavComponent } from './components/nav/nav.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective, FormComponent, FormReactiveComponent],
  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent, FormReactiveComponent]
})
export class SharedModule { }
