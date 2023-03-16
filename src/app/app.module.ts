import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FinalizarTareaComponent } from './componentes/finalizar-tarea/finalizar-tarea.component';
import { PanelTareasComponent } from './componentes/panel-tareas/panel-tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { TareasComponent } from './componentes/tareas/tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FinalizarTareaComponent,
    PanelTareasComponent,
    TareaComponent,
    TareasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
