import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";
import {trigger, transition, style, animate, query, stagger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // remember that :enter is a special
        // selector that will return each
        // newly inserted node in the ngFor list
        query(':enter', style({ opacity: 0 })),
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]))
      ])
    ])  
  ]
})
export class AppComponent implements OnInit {
  title = 'movieDB';
  movies = [];

  bindingVar = '';
  fadeIn() {
    console.log("in")
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

  constructor() {}
  ngOnInit() {
  }
  
}
