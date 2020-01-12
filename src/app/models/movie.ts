import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { format } from 'date-fns';

export class Movie {
    constructor(
      public id: number,
      public title: string,
      public overview: string,
      public poster_path: string,
      public rating: number,
      public release_date: string,
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
      item.vote_average * 10,
      format(new Date(item.release_date), "MMMM yyyy"),
    );
  }
}