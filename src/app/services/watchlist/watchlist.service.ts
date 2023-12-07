import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistKey = 'watchlist';

  getWatchlist(): Observable<WatchlistItem[]> {
    const watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    return of(watchlist);
  }

  addToWatchlist(movie: WatchlistItem): Observable<WatchlistItem> {
    const watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    watchlist.push(movie);
    localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
    return of(movie);
  }

  getWatchlistItem(movieId: number): Observable<WatchlistItem> {
    const watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    const item = watchlist.find((movie: WatchlistItem) => movie.id === movieId);
    return of(item);
  }

  removeFromWatchlist(watchListItem:WatchlistItem): Observable<void> {
    let watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    watchlist = watchlist.filter((watchlist: WatchlistItem) => watchlist.movie.id !== watchListItem.movie.id);
    localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
    return of(undefined);
  }

  isOnWatchlist(movieId: number): Observable<boolean> {
    const watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    const isOnWatchlist = !!watchlist.find((movie: WatchlistItem) => movie.id === movieId);
    return of(isOnWatchlist);
  }
}