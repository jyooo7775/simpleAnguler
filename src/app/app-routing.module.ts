import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

import { SubComComponent } from './sub-com/sub-com.component';

const routes: Routes = [
  {
    path:"simple",

    component:SampleComponent
  },{
    path:"sub",
    component:SubComComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SampleComponent,SubComComponent]
