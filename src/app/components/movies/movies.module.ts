import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesComponent, MovieThumbnailComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
