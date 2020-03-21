import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { Movie } from '../models/movie';

import { trigger, transition, style, animate, query, stagger } from "@angular/animations";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})

export class MovieSearchComponent implements OnInit {
  title = 'movieDB';
  movies$: Observable<Array<Movie>>;

  bindingVar = '';
  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.movies$ = this.movieService.popularMovies;
  }
}
