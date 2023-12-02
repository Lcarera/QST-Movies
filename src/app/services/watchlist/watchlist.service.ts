import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private http: HttpClient = inject(HttpClient);

  getWatchlist(): Observable<WatchlistItem[]> {
    return this.http.get<WatchlistItem[]>('http://localhost:3000/wathclist');
  }

  addToWatchlist(movie: WatchlistItem): Observable<WatchlistItem> {
    return this.http.post<WatchlistItem>(
      'http://localhost:3000/watchlist',
      movie
    );
  }
}
