import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input()
  selectedMovie!: Movie;

  ngOnInit(): void {
    this.checkWatchList()
  }

  changeWatchList(): void {
    this.selectedMovie.addedToWatchList = !this.selectedMovie.addedToWatchList;
    if (this.selectedMovie.addedToWatchList) {
      localStorage.setItem(this.selectedMovie.id.toString(), this.selectedMovie.addedToWatchList.toString());
    } else {
      localStorage.removeItem(this.selectedMovie.id.toString());
    }
  }

  checkWatchList(): void {
    let value = localStorage.getItem(this.selectedMovie.id.toString());
    if (value) {
      this.selectedMovie.addedToWatchList = Boolean(value);
    }
  }
}
