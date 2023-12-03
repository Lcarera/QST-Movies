import { Movie } from '@/interface/movie.interface';
import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { MovieService } from '@/services/movie/movie.service';
import { WatchlistService } from '@/services/watchlist/watchlist.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  private movieService: MovieService = inject(MovieService);
  private watchlistService: WatchlistService = inject(WatchlistService);
  movies:Movie[] = [];
  myWatchlist:WatchlistItem[] = [];

  ngOnInit(): void {
    this.fetchMovies();
    this.fetchWatchlist();
  }

  addToWatchlist(movie: Movie): void {
    const newWatchlistItem:WatchlistItem = {
      movie:movie,
      watched:false
    }
    this.watchlistService.addToWatchlist(newWatchlistItem).subscribe();
    this.fetchWatchlist();
  }

  isOnWatchlist(movieId: number): boolean {
    return this.myWatchlist.some((item) => item.movie.id === movieId);
  }

  removeFromWatchlist(movie: Movie): void {
    this.watchlistService.removeFromWatchlist(this.getWatchlistItem(movie.id)).subscribe();
    this.fetchWatchlist();
  }

  getWatchlistItem(movieId: number): WatchlistItem {
    return this.myWatchlist.find((item) => item.movie.id === movieId)!;
  }

  fetchMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  fetchWatchlist(): void {
    this.watchlistService.getWatchlist().subscribe((watchlist) => {
      this.myWatchlist = watchlist;
    });
  }
  
}
