import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appnoticias';
  newsList: any[] = [];
  loading = false;

  constructor (private api: ApiService){}

  newsSearch(param: any){
    this.loading = true;
    this.newsList = [];
    
    setTimeout(() => {
    this.api.getNews(param).subscribe(result =>{
      console.log(result);
      this.loading = false;
      this.newsList = result.articles;
    });
  }, 1000);
  }
}
