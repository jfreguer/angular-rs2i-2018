import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';
import { AuthGuardGuard } from '../core/services/auth-guard.guard';
import { DetailResolveService } from '../core/services/detail-resolve.service';
import { EditComponent } from './containers/edit/edit.component';
import { ListComponent } from './containers/list/list.component';
import { LivreesComponent } from './containers/livrees/livrees.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent },
  { path: 'add', component: AddComponent },
  {
    path: 'edit/:id',
    component: EditComponent,
    resolve: {item: DetailResolveService}
  },
  {
    path: 'add-reactive',
    component: AddReactiveComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
})
export class ItemsRoutingModule { }
