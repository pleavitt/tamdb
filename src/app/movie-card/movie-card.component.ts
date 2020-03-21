import { Component, Input } from '@angular/core';
import { Movie } from 'app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: Movie;

  public imagePath = "https://image.tmdb.org/t/p/w342/";

}
