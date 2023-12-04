import { Movie } from '@/interface/movie.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Movie[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();
    return items.filter((it) => {
      return (
        it.title.toLowerCase().includes(searchTerm) ||
        it.releasedDate.toLowerCase().includes(searchTerm)
      );
    });
  }
}
