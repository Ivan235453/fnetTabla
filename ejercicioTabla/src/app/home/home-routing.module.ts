import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './tablas/tablas.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { GuardianGuard } from './guardian.guard';
import { RemoverComponent } from './remover/remover.component';

const routes: Routes = [
  {path:'',component:TablasComponent},
  {path:'table',component:TablasComponent},
  {path:'add',component:AgregarComponent},
  {path:'edit',component:EditarComponent,canActivate:[GuardianGuard]},
  {path:'remove',component:RemoverComponent,canActivate:[GuardianGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
