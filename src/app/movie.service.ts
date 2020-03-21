import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieAdapter } from './models/movie';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_KEY = '65e043c24785898be00b4abc12fcdaae';

  private TMDB_URL = 'https://api.themoviedb.org/3/';

  private popularMoviesUrl = `${this.TMDB_URL}discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc`;

  private popularMovies$;

  constructor(private http: HttpClient, private adapter: MovieAdapter, ) {

  }

  get popularMovies() {
    if (!this.popularMovies$) {
      this.popularMovies$ = this.fetchMovies().pipe(
        shareReplay(1)
      );
    }
    return this.popularMovies$;
  }

  fetchMovies(): Observable<Movie[]> {
    return this.http.get(this.popularMoviesUrl)
      .pipe(
        map((data: any) => data.results.map(item => this.adapter.adapt(item)))
      );
  }

  getMovieDetail(movieId : number): Observable<Movie> {
    const movieURL = `${this.TMDB_URL}movie/${movieId}?api_key=${this.API_KEY}`
    return this.http.get(movieURL)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }
}