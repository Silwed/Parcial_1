import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/service/photos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  datos : string[] = [];
  constructor(private photoService : PhotosService) { }

  ngOnInit(): void {

    this.datos = this.photoService.lsBusqueda;


  }




}
