import { Component } from '@angular/core';
import { QueriesServiceService } from 'src/app/queries-service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.css']
})
export class RemoverComponent {
  constructor(private service: QueriesServiceService, private router:Router, public dialogRef: MatDialogRef<RemoverComponent>) {}

  actorEdit:any=this.service.clickedElement

  cerrarModal() {
    this.dialogRef.close();
  }

    removeActor(){
      console.log(this.actorEdit);
      this.service.deleteActor(this.actorEdit).subscribe((res:any)=>{
        if(res['success']==true){
          Swal.fire(
            'Listo',
            'Se ha eliminado el actor',
            'success'
          )
         
          //this.router.navigate(['/'])
        }else{
          alert("Error");
        }
      });
      this.cerrarModal();
      
       
    }
}
