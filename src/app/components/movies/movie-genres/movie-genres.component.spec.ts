import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenresComponent } from './movie-genres.component';

describe('MovieGenresComponent', () => {
  let component: MovieGenresComponent;
  let fixture: ComponentFixture<MovieGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieGenresComponent]
    });
    fixture = TestBed.createComponent(MovieGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
