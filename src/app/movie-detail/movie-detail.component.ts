import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'app/models/movie';
import { MovieService } from 'app/movie.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  
  public imagePath = "https://image.tmdb.org/t/p/w154/";

  public BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
  
  constructor(public router: Router, private movieService: MovieService) {
    this.movie = this.router.getCurrentNavigation().extras.state.movie;
   }

  ngOnInit() { 
    this.movieService.getMovieDetail(this.movie.id)
    .subscribe(response => {
      this.movie = response;
    });
   }

}
