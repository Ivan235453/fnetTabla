import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueriesServiceService } from '../queries-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private router:Router, private servicio:QueriesServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const length = Object.keys(this.servicio.clickedElement).length;
      if(length>0)
      //Object.keys(exampleObject).length
      {
        return true;
      }else
      this.router.navigate(['/']);
        return false;
  }
 
}
