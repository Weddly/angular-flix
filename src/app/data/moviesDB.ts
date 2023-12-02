import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        poster: "assets/images/Tenet.png",
        title: "Tenet",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold insomething beyond real time.",
        rating: 7.8,
        duration: "2h 30min",
        genre: "Action, Sci-Fi",
        releasedDate: new Date('2020-09-03'),
        trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
      },
      {
        id: 2,
        poster: "assets/images/Spider_Man.png",
        title: "Spider-Man: Into the Spider-Verse",
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.",
        rating: 8.4,
        duration: "1h 57min",
        genre: "Action, Animation, Adventure",
        releasedDate: new Date("2018-12-14"),
        trailer: "https://www.youtube.com/watch?v=tg52up16eq0"
      },
      {
        id: 3,
        poster: "assets/images/Knives_Out.png",
        title: "Knives Out",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family",
        rating: 7.9,
        duration: "2h 10min",
        genre: "Comedy, Crime, Drama",
        releasedDate: new Date("2019-11-27"),
        trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA"
      },
      {
        id: 4,
        poster: "assets/images/Avengers.png",
        title: "Avengers: Age of Ultron",
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest movies to stop the villainous Ultron from enacting his terrible plan.",
        rating: 7.3,
        duration: "2h 21min",
        genre: "Action, Adventure, Sci-Fi",
        releasedDate: new Date("2015-05-01"),
        trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do"
      },
    ];
    return { movies };
  }
}
