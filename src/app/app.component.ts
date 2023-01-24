import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appnoticias';
  //Se crea una array para contener los articulos|noticias
  newsList: any[] = [];
  //loading booleano para el spinner
  loading = false;

  constructor (private api: ApiService){}

  //Se crea una funcion para hacer una busqueda y si es verdad ponga la array y el spinner a disposición, luego que espere un segundo y despues si muestre por los parametros dados las noticias y desaparezca el spinner.
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
