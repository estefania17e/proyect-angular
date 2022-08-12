import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/persons/list/list.module').then(m => m.ListModule) }, { path: 'list', loadChildren: () => import('./pages/persons/new/new.module').then(m => m.NewModule) }, { path: 'new', loadChildren: () => import('./pages/persons/new/new.module').then(m => m.NewModule) }, { path: 'details', loadChildren: () => import('./pages/persons/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/persons/edit/edit.module').then(m => m.EditModule) }, { path: 'delete', loadChildren: () => import('./pages/persons/delete/delete.module').then(m => m.DeleteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
