import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    FormsModule,
    MatButtonToggleModule,
  ],
})
export class MovieDetailModule {}
