import { Component, OnInit } from '@angular/core';
import { MovieService } from "./movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movieDB';
  movies = [];

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(response => {
      this.movies = response;
      console.log("results => ", response);
    });
  }
}
