import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';
import { ContenedorComponent } from '../contenedor/contenedor.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  parametroBuscar : string = '';
  constructor(private contenedor: ContenedorComponent, private photoService :PhotosService ) { }

  ngOnInit(): void {
  }

  buscar() : void {
      this.contenedor.buscar(this.parametroBuscar);
      this.photoService.agregarBusqueda(this.parametroBuscar);
  }
  mostrar(){
    this.contenedor.mostrar();
  }
}
