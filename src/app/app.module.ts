import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/moviesDB';
import { HttpClientModule } from '@angular/common/http';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardFavoriteComponent } from './components/card/card-favorite/card-favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieInfoComponent } from './components/movie/movie-info/movie-info.component';
import { MovieTrailerComponent } from './components/movie/movie-trailer/movie-trailer.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    CardComponent,
    CardLabelComponent,
    CardFavoriteComponent,
    MovieDetailsComponent,
    MovieInfoComponent,
    MovieTrailerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FontAwesomeModule,
    YouTubePlayerModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
