import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.styl']
})
export class GifComponent implements OnInit {

  @Input() 
  url: string;

  @Input()
  ref: string;

  constructor() { }

  ngOnInit() {
  }

}
