import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MoviesComponent, MovieThumbnailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MoviesModule {}
