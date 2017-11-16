import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl']
})
export class BookComponent implements OnInit {

  @Input()
    title: any;
  @Input()
    url: string;
  @Input()
    rating: string;
  @Input()
    author: any;
  @Input()
    id: any;
 
  constructor() { }

  ngOnInit() {
  }

}
