import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {

  bookId: string;
  book: any;
  ratings= [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    d3.csv('./assets/books.csv', (error, data) => {
      this.book = data.filter((el) => { 
        this.route.params.subscribe(params=> {this.bookId = params['id']});
        return el.id == this.bookId})[0];
        this.ratings.push(100 * this.book.ratings_1 / this.book.work_ratings_count);
        this.ratings.push(100 * this.book.ratings_2 / this.book.work_ratings_count);
        this.ratings.push(100 * this.book.ratings_3 / this.book.work_ratings_count);
        this.ratings.push(100 * this.book.ratings_4 / this.book.work_ratings_count);
        this.ratings.push(100 * this.book.ratings_5 / this.book.work_ratings_count);
        d3.select('#graph')
          .selectAll('rect')
          .data(this.ratings)
          .enter()
          .append('rect')
          .attr('x',(d, i)=>{
            return i * 50;
          })
          .attr('y',(d, i) => {
            return 210 - d*2 
          })
          .attr('width', '30')
          .attr('height', function(d){
            return d*2;
          })
          .attr('fill', '#F3DF2C')
          .append('text')
          .attr('x', (d,i) => {
            return i * 50 + 5
          })
          .attr('y', '210')
          .text((d, i) => {return i})
                  
    });
    
  }

}
