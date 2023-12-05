import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies.sort((a, b) => a.title.localeCompare(b.title)));
  }

  sortMovies(value: any): void {
    let selectedValue = value.target.value;

    if (selectedValue === "byTitle") {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (selectedValue === "byRelease") {
      this.movies.sort((a, b) => a.releasedDate < b.releasedDate ? -1 : a.releasedDate > b.releasedDate ? 1 : 0);
    }
  }

}
