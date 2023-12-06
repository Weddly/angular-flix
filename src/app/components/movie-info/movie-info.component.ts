import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  @Input()
  selectedMovie!: Movie;

  changeWatchList(): void {
    this.selectedMovie.addedToWatchList = !this.selectedMovie.addedToWatchList;
  }

}
