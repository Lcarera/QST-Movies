import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '@/pipes/filter.pipe';
import { MovieGenresComponent } from './movie-genres/movie-genres.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieThumbnailComponent,
    FilterPipe,
    MovieDetailComponent,
    MovieGenresComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
  ],
})
export class MoviesModule {}
