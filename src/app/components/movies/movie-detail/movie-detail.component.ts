import { Movie } from '@/interface/movie.interface';
import { MovieService } from '@/services/movie/movie.service';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WatchlistItem } from '@/interface/watchlist-item.interface';
import { WatchlistService } from '@/services/watchlist/watchlist.service';
import { MatButtonToggle } from '@angular/material/button-toggle';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  id: string = '';
  ifreameUrl: SafeUrl = '';
  movie!: Movie;
  myWatchlist: WatchlistItem[] = [];

  @ViewChild('watchlistToggle') watchlistToggle!: MatButtonToggle;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private movieService: MovieService = inject(MovieService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private watchlistService: WatchlistService = inject(WatchlistService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/movies']);
    } else {
      this.id = id;
      this.fetchMovie();
      this.fetchWatchlist();
    }
  }

  fetchMovie(): void {
    this.movieService.getMovie(this.id).subscribe((movie) => {
      this.movie = movie;
      const videoId = movie.trailerLink.split('v=')[1];
      const url = `https://www.youtube.com/embed/${videoId}`;
      this.ifreameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }

  fetchWatchlist(): void {
    this.watchlistService.getWatchlist().subscribe((watchlist) => {
      this.myWatchlist = watchlist;
    });
  }

  addToWatchlist(movie: Movie): void {
    const newWatchlistItem: WatchlistItem = {
      movie: movie,
      watched: false,
    };
    this.watchlistService.addToWatchlist(newWatchlistItem).subscribe();
    this.fetchWatchlist();
  }

  isOnWatchlist(movieId: number): boolean {
    console.log(movieId);
    console.log(this.myWatchlist);
    
    
    return this.myWatchlist.some((item) => item.movie.id === movieId);
  }

  removeFromWatchlist(movie: Movie): void {
    this.watchlistService
      .removeFromWatchlist(this.getWatchlistItem(movie.id))
      .subscribe();
    this.fetchWatchlist();
  }

  getWatchlistItem(movieId: number): WatchlistItem {
    return this.myWatchlist.find((item) => item.movie.id === movieId)!;
  }

  onToggleWatchlist() {
    if (this.watchlistToggle.checked) this.addToWatchlist(this.movie);
    else this.removeFromWatchlist(this.movie);
  }
}
