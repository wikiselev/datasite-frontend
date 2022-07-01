import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface jsonPlot {
  image: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  getBase64() {
    return this.http.get<jsonPlot>('http://127.0.0.1:8000/ggplot').pipe(map(data => 'data:image/jpeg;base64,' + data.image))
  }

  postGene() {
    return this.http.post('http://127.0.0.1:8000/ggplot', "dfv");
  }

  constructor(private http: HttpClient) { }
}
