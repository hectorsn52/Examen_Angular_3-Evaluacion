import { Component } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-panel-tareas',
  templateUrl: './panel-tareas.component.html',
  styleUrls: ['./panel-tareas.component.css']
})
export class PanelTareasComponent {

  tareas:Tarea[] = [];

  constructor(private servicioTarea:TareasService){

  }

  ngOnInit(){
    this.tareas = this.servicioTarea.getTareas();
  }
}
