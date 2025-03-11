import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesDirectivesRoutingModule } from './pipes-directives-routing.module';
import { PipesDirectivesComponent } from './pipes-directives.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesDirectivesRoutingModule,
    PipesDirectivesComponent
  ]
})
export class PipesDirectivesModule { }
