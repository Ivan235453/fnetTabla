import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueriesServiceService {

  constructor(private http:HttpClient) { }


  clickedElement:any = {
  }


  
  queryAllActors(){
    return this.http.get(`http://127.0.0.1:8080/`)
  }

  insertNewActor(actor:any){
    return this.http.post(`http://127.0.0.1:8080/new`,actor)
  }

  editActor(actor:any){
    return this.http.post(`http://127.0.0.1:8080/edit`,actor)
  }

  deleteActor(actor:any){
    console.log(actor);
    return this.http.post(`http://127.0.0.1:8080/remove`,actor)
  }


}
