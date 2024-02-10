import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPhotos } from '../interface/photos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private  baseUrl:string = environment.baseUrl
  habilitar:boolean = false;
  lsBusqueda : string[] = [];
  constructor(private http : HttpClient) { }

  get photos() : Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(`${this.baseUrl}`);
  }

  buscarPhotos( termino : string ) : Observable<IPhotos[]>{
    if (termino.length > 1) {
      return this.http.get<IPhotos[]>(`${this.baseUrl}?q=${termino}`);
    } else {
      return this.http.get<IPhotos[]>(`${this.baseUrl}`);
    }
  }

  agregarBusqueda(obj : string){
    this.lsBusqueda.unshift(obj)
  }




}
