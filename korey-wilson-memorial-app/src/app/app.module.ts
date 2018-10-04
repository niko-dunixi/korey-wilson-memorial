import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoSlideshowComponent } from './photo-slideshow/photo-slideshow.component';
import { BackgroundMusicPlayerComponent } from './background-music-player/background-music-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoSlideshowComponent,
    BackgroundMusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
