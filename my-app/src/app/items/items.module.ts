import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { LivreesComponent } from './containers/livrees/livrees.component';
import { AbstractComponent } from './containers/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, LivreesComponent, AbstractComponent],
  exports: [ListComponent, LivreesComponent]
})
export class ItemsModule { }
