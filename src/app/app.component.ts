import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appnoticias';

  constructor (private api: ApiService){}

  newsSearch(param: any){
    console.log("Soy el padre");
    console.log(param);
    this.api.getNews(param).subscribe(result =>{
      console.log(result);
    });

  }
}
