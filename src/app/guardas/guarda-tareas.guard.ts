import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TareasService } from '../servicios/tareas.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaTareasGuard implements CanActivate {

  constructor(private servicoTareas:TareasService, private ruta:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let contrasenya = prompt("Dime...");
      console.log(contrasenya);
      if (contrasenya==this.servicoTareas.getPassword()) {
        return true;
      }else{
        this.ruta.navigate(["/"]);
        return false;
      }
  }

}
