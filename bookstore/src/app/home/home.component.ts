import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  booklist = [];

  constructor() {
   }

  ngOnInit() {

    d3.csv('./assets/books.csv', (error, data) => {
      this.booklist = data; 
    })
  }

  ratingSort(){
    this.booklist.sort((a,b) => d3.descending(a.average_rating, b.average_rating));
  }

  rSort(){
    this.booklist.sort((a,b) => d3.ascending(a.average_rating, b.average_rating));
  }

  authorSort(){
    this.booklist.sort((a,b) => d3.ascending(a.authors, b.authors));
  }

  aSort(){
    this.booklist.sort((a,b) => d3.descending(a.authors, b.authors));
  }

  titleSort(){
    this.booklist.sort((a,b) => d3.ascending(a.title, b.title));
  }

  tSort(){
    this.booklist.sort((a,b) => d3.descending(a.title, b.title));
  }

}
