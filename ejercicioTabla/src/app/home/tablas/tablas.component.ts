import { Component } from '@angular/core';
import { first } from 'rxjs';
import { QueriesServiceService } from 'src/app/queries-service.service';
import Swal from 'sweetalert2';


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

  constructor(private service: QueriesServiceService) {}
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

    edit(){
      console.log("wtflol")
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

}
