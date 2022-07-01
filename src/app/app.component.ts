import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  base64: any;
  title = 'datasite-frontend';
  constructor(
    private api: ApiService,
    ) {};
  Gene() {
    this.api.postGene().subscribe(data => {this.base64 = data; console.log(this.base64)})
  };
  Plot() {
    this.api.getBase64().subscribe(data => {this.base64 = data; console.log(this.base64)})
  };

}
