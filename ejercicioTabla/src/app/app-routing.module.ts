import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule {


  





 }





