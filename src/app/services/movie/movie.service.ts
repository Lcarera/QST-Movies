import { Movie } from '@/interface/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http: HttpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('assets/data/movies.json');
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie[]>('assets/data/movies.json')
      .pipe(
        map(movies => {
          const movie = movies.find(movie => movie.id === Number(id));
          if (!movie) {
            throw new Error('Movie not found');
          }
          return movie;
        }),
        catchError(error => throwError(() => error))
      );
  }
}
