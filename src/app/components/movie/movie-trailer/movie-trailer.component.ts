import { Component, Input } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent {
  @Input()
  videoId = '';
  showTrailer = false;
  openIcon = faChevronCircleDown;
  closeIcon = faChevronCircleUp;
}
