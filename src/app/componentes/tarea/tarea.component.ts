import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() tarea!:Tarea;

}
