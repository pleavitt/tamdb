import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Movie {
    constructor(
      public id: number,
      public title: string,
      public overview: string,
      public poster_path: string,
      public release_date: Date,
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
      new Date(item.release_date),
    );
  }
}