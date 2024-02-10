import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../interface/photos';
import { PhotosService } from '../service/photos.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit {

    photos : IPhotos[] = [];

  constructor(private photosService : PhotosService) { }

  ngOnInit(): void {

  }
  mostrar():void {
    this.photosService.photos.subscribe((resp) => {
      this.photos = resp;
    })
  }

  buscar( param : string) : void {
    this.photosService.buscarPhotos(param).subscribe((resp)=>{
      this.photos = resp;
    })
}




}
