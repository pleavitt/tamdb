import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie, MovieAdapter } from './models/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '65e043c24785898be00b4abc12fcdaae';

  private tmdbUrl = 'https://api.themoviedb.org/3/';

  private popularMoviesUrl = this.tmdbUrl + 'discover/movie?api_key=' + this.apiKey;  // URL to web api

 // private getMoviesUrl = this.tmdbUrl + 'discover/movie?api_key=' + this.apiKey;  // URL to web api

  constructor(private http: HttpClient, private adapter: MovieAdapter, ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get(this.popularMoviesUrl + '&sort_by=popularity.desc')
      .pipe(map((data: any) => data.results.map(item => this.adapter.adapt(item))));
  }

  getMovieDetail(movieId : number): Observable<Movie> {
    this.popularMoviesUrl = this.tmdbUrl + 'movie/' + movieId + '?api_key=' + this.apiKey
    return this.http.get(this.popularMoviesUrl)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }
}
