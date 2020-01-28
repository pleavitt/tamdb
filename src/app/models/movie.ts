import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Movie {
    constructor(
      public id: number,
      public title: string,
      public overview: string,
      public poster_path: string,
      public backdrop_path: string,
      public rating: number,
      public release_date: string,
      public summary: string,
      public runtime?: number,
      public hours?: number,
      public minutes?: number,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class MovieAdapter implements Adapter<Movie> {

  adapt(item: any): Movie {
    return new Movie(
      item.id,
      item.title,
      item.overview,
      item.poster_path,
      item.backdrop_path,
      item.vote_average * 10,
      item.release_date,
      item.overview,
      item.runtime,
      Math.floor(item.runtime / 60),
      item.runtime % 60,
    );
  }
}