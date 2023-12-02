import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private http: HttpClient = inject(HttpClient);
  private serverUrl = 'http://localhost:3000/watchlist';

  getWatchlist(): Observable<WatchlistItem[]> {
    return this.http.get<WatchlistItem[]>(this.serverUrl);
  }

  addToWatchlist(movie: WatchlistItem): Observable<WatchlistItem> {
    return this.http.post<WatchlistItem>(
      this.serverUrl,
      movie
    );
  }

  isOnWatchlist(movieId: number): Observable<boolean> {
    return this.http.get<boolean>(
      this.serverUrl + `/${movieId}`
    );
  }
}
