import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarTareaComponent } from './componentes/finalizar-tarea/finalizar-tarea.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PanelTareasComponent } from './componentes/panel-tareas/panel-tareas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { GuardaTareasGuard } from './guardas/guarda-tareas.guard';

const routes: Routes = [
  {path : "" , component:InicioComponent},
  {path : "tareas" , component:TareasComponent},
  {path : "panelTareas" ,canActivate:[GuardaTareasGuard], component:PanelTareasComponent},
  {path : "finalizarTarea/:id" , component:FinalizarTareaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
