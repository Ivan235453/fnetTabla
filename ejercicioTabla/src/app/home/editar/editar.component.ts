import { Component,Input } from '@angular/core';
import { QueriesServiceService } from 'src/app/queries-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  
  constructor(private service: QueriesServiceService, private router:Router) {}

  actorEdit:any=this.getClicked()
  actorEditCopy = {...this.actorEdit};


  //actorEdit:any=this.getClicked()

  getClicked(){
   return (this.service.clickedElement);
  }

  editActor(){
      console.log(this.actorEdit);
      this.service.editActor(this.actorEdit).subscribe((res:any)=>{
        if(res['success']==true){
          Swal.fire(
            'Correcto',
            'Se ha editado el actor',
            'success'
          )
          this.router.navigate(['/'])
        }else{
          alert("Error")
          
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res['message'],
            footer: 'Algo ocurrió'
          })
        
        }
      });

    }

}
