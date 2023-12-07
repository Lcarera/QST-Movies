import { Movie } from '@/interface/movie.interface';
import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { WatchlistService } from '@/services/watchlist/watchlist.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent {
  myWatchlist: WatchlistItem[] = [];
  movies: Movie[] = [];
  watchlistService: WatchlistService = inject(WatchlistService);
  searchTerm: string = '';

  ngOnInit(): void {
    this.fetchWatchlist();
  }

  removeFromWatchlist(movie: Movie): void {
    this.watchlistService.removeFromWatchlist(this.getWatchlistItem(movie.id)).subscribe();
    this.fetchWatchlist();
  }

  getWatchlistItem(movieId: number): WatchlistItem {
    return this.myWatchlist.find((item) => item.movie.id === movieId)!;
  }

  fetchWatchlist(): void {
    this.watchlistService.getWatchlist().subscribe((watchlist) => {
      this.myWatchlist = watchlist;
      this.movies = watchlist.map((item) => item.movie);
    });
  }
}
