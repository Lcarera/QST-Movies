import { Movie } from '@/interface/movie.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent {
  @Input() 
  movie!: Movie;

  @Output() 
  addToWatchlistEmmiter = new EventEmitter<Movie>();

  addToWatchlist(movie: Movie): void {
    this.addToWatchlistEmmiter.emit(movie);
  }
}
