import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


import { TablasComponent } from './tablas/tablas.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { RemoverComponent } from './remover/remover.component';


@NgModule({
  declarations: [
    TablasComponent,
    AgregarComponent,
    EditarComponent,
    RemoverComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatDialogModule,
    
  ]
})
export class HomeModule { }
