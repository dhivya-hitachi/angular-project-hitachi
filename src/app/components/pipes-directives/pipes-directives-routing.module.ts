import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesDirectivesComponent } from './pipes-directives.component';

const routes: Routes = [
  { path: '', component: PipesDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesDirectivesRoutingModule { }
