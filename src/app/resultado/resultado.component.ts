import { Component, Input, OnInit } from '@angular/core';
import { IPhotos } from '../interface/photos';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent  {

  @Input() obj!:IPhotos;

}
