import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { InViewportDirective } from './in-viewport.directive';
import { SliderComponent } from './components/slider/slider.component';
import { SliderCardsComponent } from './components/slider-cards/slider-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TicTacToeComponent,
    TimelineComponent,
    InViewportDirective,
    SliderComponent,
    SliderCardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
