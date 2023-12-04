import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', loadChildren: () => import('@/components/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'movie/:id', loadChildren: () => import('@/components/movies/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
