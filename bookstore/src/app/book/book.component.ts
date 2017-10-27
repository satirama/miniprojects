import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.styl']
})
export class BookComponent implements OnInit {

  @Input()
    title: string;
  @Input()
    url: string;
  @Input()
    rating: string;

  constructor() { }

  ngOnInit() {
  }

}
