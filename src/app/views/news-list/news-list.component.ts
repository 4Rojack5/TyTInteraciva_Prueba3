import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  //Se añade un input para traer una array
  @Input() newsLists: any;

  constructor() { }

  ngOnInit(): void {
  }

}
