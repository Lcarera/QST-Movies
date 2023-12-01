import { Movie } from '@/interface/movie.interface';
import { MovieService } from '@/services/movie.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  private movieService: MovieService = inject(MovieService);
  movies:Movie[] = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  addToWatchlist(movie: Movie): void {
    console.log(movie);
    
  }
}
