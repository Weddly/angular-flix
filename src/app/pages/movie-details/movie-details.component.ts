import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import YoutubeUtils from 'src/app/utils/youtube-utils';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie!: Movie;
  movieUrlId = '';
  backIcon = faArrowCircleLeft;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  goBack(): void {
    this.location.back();
  }

  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.selectedMovie = movie;
        this.getMovieUrlId();
      });
  }

  getMovieUrlId() {
    if (this.selectedMovie?.trailer) {
      this.movieUrlId = YoutubeUtils.extractVideoID(this.selectedMovie.trailer) ?? '';
    }
  }
}
