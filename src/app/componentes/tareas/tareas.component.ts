import { Component } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas:Tarea[] = [];
  filtro:string = "Todas";
  pendientes:number = 0;
  realizadas:number = 0;

  constructor(private servicioTarea:TareasService){

  }

  ngOnInit(){
    this.tareas = this.servicioTarea.getTareas();
    let valores = this.servicioTarea.getTotales();
    this.pendientes=valores.totPendientes;
    this.realizadas=valores.totRealizadas;
  }

  filtrar(){
    if(this.filtro=="Todas"){
      this.tareas = this.servicioTarea.getTareas();
    }
    else{
      this.tareas = this.servicioTarea.filtrarTarea(this.filtro)
    }
  }


}
