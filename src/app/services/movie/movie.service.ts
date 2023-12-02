import { Movie } from '@/interface/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http:HttpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }
}