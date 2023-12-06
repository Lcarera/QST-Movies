import { Movie } from '@/interface/movie.interface';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss'],
})
export class MovieThumbnailComponent {
  @Input()
  movie!: Movie;

  @Input()
  isOnWatchlist!: boolean;

  @Output()
  addToWatchlistEmmiter = new EventEmitter<Movie>();

  @Output()
  removeFromWatchlistEmmiter = new EventEmitter<Movie>();

  _snackBar: MatSnackBar = inject(MatSnackBar);
  router: Router = inject(Router);

  addToWatchlist(movie: Movie): void {
    this.addToWatchlistEmmiter.emit(movie);
    this.isOnWatchlist = true;
    this.openSnackBar('Movie added to watchlist', 'OK');
  }

  removeFromWatchlist(movie: Movie): void {
    this.removeFromWatchlistEmmiter.emit(movie);
    this.isOnWatchlist = false;
    this.openSnackBar('Movie removed from watchlist', 'OK');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 30000,
      panelClass: 'custom-snackbar',
    });
  }

  redictToDetail() {
    this.router.navigate(['/movies/details/' + this.movie.id]);
  }
}
