import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss'],
})
export class MovieGenresComponent {
  @Input()
  genres: string[] = [];
}
