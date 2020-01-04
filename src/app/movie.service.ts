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

  private moviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='+ this.apiKey;  // URL to web api

  constructor(private http: HttpClient, private adapter: MovieAdapter,) { }
  
  getMovies(): Observable<Movie[]> {
    return this.http.get(this.moviesUrl + '&sort_by=popularity.desc')
    .pipe(map((data: any) => data.results.map(item => this.adapter.adapt(item))));  }
}
