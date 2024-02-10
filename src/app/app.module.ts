import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './shared/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    BuscarComponent,
    ResultadoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
