import { Component } from '@angular/core';
import { QueriesServiceService } from 'src/app/queries-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  actor={
    firstname: '',
    lastname: '',
  }

    constructor(private service:QueriesServiceService, private router:Router){}

  newActor(){
    this.actor.firstname=this.actor.firstname.toUpperCase()
    this.actor.lastname=this.actor.lastname.toUpperCase()
    console.log(this.actor);
    this.service.insertNewActor(this.actor).subscribe((res:any)=>{
      //res['success']==true
      console.log(res);
      if(res['success']==true){
        Swal.fire(
          'Exito',
          'Se ha agregado un nuevo actor',
          'success'
        )
        console.log(res['data']['0']);
        this.router.navigate(['/'])
      }else{
        console.log(res['data']);


       /* Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res['message'],
          footer: 'Verifique los datos ingresados'
        })*/
      
      }
     });
  }

}
