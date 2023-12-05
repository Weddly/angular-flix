import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie-service';
import YoutubeUtils from 'src/app/utils/youtube-utils';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie | undefined;
  safeURL = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,

  ) { }

  ngOnInit(): void {
    this.getMovie();


  }

  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.selectedMovie = movie;
        this.sanitizeURL();
      });
    debugger;
  }

  sanitizeURL() {
    debugger;
    if (this.selectedMovie?.trailer) {
      this.safeURL = YoutubeUtils.extractVideoID(this.selectedMovie.trailer) ?? '';
    }
  }
}
