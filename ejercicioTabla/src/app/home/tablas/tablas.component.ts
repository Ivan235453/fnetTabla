import { Component } from '@angular/core';
import { QueriesServiceService } from 'src/app/queries-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RemoverComponent } from '../remover/remover.component';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent {
  //clickedElement:any;

  actors:any;
  actorData: any;
  dataFiltered:any;
  
  look='';

  actorDataFiltered(){
    if(this.look==''){
      this.dataFiltered = Object.values(this.actorData).map(x=>x)
    }else{
      const regex = new RegExp(`^${this.look}\\w*`, 'gi');
    this.dataFiltered = Object.values(this.actorData).filter((obj: any) =>regex.test(obj.first_name));
    }             
  }
  ngOnInit(){
    this.getAllActors()
    console.log(this.clicked);
  }


  constructor(private service: QueriesServiceService, public dialog:MatDialog) {}
  indexClicked=0;

  clicked(member:any){
    this.indexClicked=member.actor_id;
    this.service.clickedElement=member;
  }
 

   getAllActors(){
    this.service.queryAllActors().subscribe((res:any)=>{
      if(res["success"])
      this.actorData=res['data'][0];
      this.dataFiltered=res['data'][0];
     });
    }

    dialogRef: MatDialogRef<RemoverComponent> | undefined;

    removeModal(){
      if(this.indexClicked!=0){

        this.dialogRef=this.dialog.open(RemoverComponent, {
          
          width: '50%', // Ancho del modal
          height: '50%', // Altura del modal
          autoFocus: true, // Enfocar automáticamente el primer elemento dentro del modal
        });

        this.dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit()
            // console.log('Modal cerrado:', result); // Resultado enviado desde el modal si lo cierras con 'this.dialogRef.close(resultado)'
        });

      } 
    }


    }






