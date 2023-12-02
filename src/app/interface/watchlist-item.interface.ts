import { Movie } from './movie.interface';

export interface WatchlistItem {
    movie: Movie;
    rating?: number;
    watched: boolean;
}
