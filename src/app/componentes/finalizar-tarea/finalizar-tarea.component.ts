import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css']
})
export class FinalizarTareaComponent {

  tareas:Tarea[] = [];
  tarea!:Tarea;
  id!:string;

  constructor(private servicioTarea:TareasService,private rutaActiva:ActivatedRoute,private ruta:Router){

  }

  ngOnInit(){
    this.tareas = this.servicioTarea.getTareas();
    this.id = this.rutaActiva.snapshot.params["id"];
    this.tarea = this.tareas.find(tarea => tarea.id == this.id)!;
  }

  finalizar(){
    this.servicioTarea.endTarea(this.id)
    this.ruta.navigate(["tareas"])
  }

}
