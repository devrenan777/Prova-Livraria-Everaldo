import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesejoPage } from './desejo.page';

const routes: Routes = [
  {
    path: '',
    component: DesejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesejoPageRoutingModule {}
