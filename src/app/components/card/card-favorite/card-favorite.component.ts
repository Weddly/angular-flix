import { Component, Input } from '@angular/core';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.css']
})
export class CardFavoriteComponent {
  addIcon = faPlusCircle;
  removeIcon = faMinusCircle;
  @Input()
  addedToWatchlist: Boolean = false;
  @Input()
  movieId!: number;

  constructor() { }

  changeWatchList(id: number, value: Boolean): void {
    if (value) {
      localStorage.setItem(id.toString(), value.toString());

    } else {
      localStorage.removeItem(id.toString());
    }
    this.addedToWatchlist = value;
  }

}
