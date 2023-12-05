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

  changeWatchList(value: Boolean): void {
    this.addedToWatchlist = value;
  }

}
