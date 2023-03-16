import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  // Password para acceder a Panel de Tareas

  password:string="123456"

  // Listado de tareas para el servicio. Definir el tipo de datos adecuado de la lista de tareas

    tareas:Tarea[]= [
      {
      id:'1',
      nombre: 'Examen Cliente',
      estado: 'Pendiente'
      },
      {
      id:'2',
      nombre: 'Examen Servidor',
      estado: 'Pendiente'
      },
      {
      id:'3',
      nombre: 'Examen Interfaces',
      estado: 'Realizada'
      },
      {
      id:'4',
      nombre: 'Examen Despliegue',
      estado: 'Pendiente'
      },
      {
      id:'5',
      nombre: 'Examen EEIE',
      estado: 'Pendiente'
      },
      {
      id:'6',
      nombre: 'Ingles',
      estado: 'Realizada'
      }
   ]

  //Definir los metodos del servicio que se piden

  getTareas(){
    return this.tareas;
  }

  getTarea(id:string){
    return this.tareas.find(tarea => tarea.id == id)!;
  }

  endTarea(id:string){
    let tarea = this.tareas.find(tarea => tarea.id == id)!;
    tarea.estado = "Realizada";
  }

  getTotales(){
    let totRealizadas = 0;
    let totPendientes = 0;
    this.tareas.forEach(tarea => {
      if (tarea.estado == "Pendiente") {
        totPendientes++;
      }else{
        totRealizadas++;
      }
    })
    return {"totRealizadas":totRealizadas,"totPendientes":totPendientes}
  }

  filtrarTarea(estado:string){
    let tareasFiltradas = this.tareas.filter(tarea=>tarea.estado == estado);
    return tareasFiltradas;
  }

  getPassword(){
    return this.password;
  }
}
