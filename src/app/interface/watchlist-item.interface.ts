import { Movie } from './movie.interface';

export interface WatchlistItem {
    id?: number;
    movie: Movie;
    rating?: number;
    watched: boolean;
}
