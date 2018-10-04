import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-background-music-player',
  templateUrl: './background-music-player.component.html',
  styleUrls: ['./background-music-player.component.css']
})
export class BackgroundMusicPlayerComponent implements OnInit {

  songs: string[];
  songIndex = -1;
  currentSong: SafeUrl

  constructor(private sanitizer: DomSanitizer) {
    const folder = "/assets/audio/";
    this.songs = [
      folder + "01 Rest in Peace.mp3",
      folder + "02 What Appears.mp3",
      folder + "03 Got Yours.mp3",
      folder + "04 A Place We Set Afire.mp3",
      folder + "05 Leave a Light On.mp3",
      folder + "06 The Hurt Is Gone.mp3",
      folder + "07 Empty Street.mp3",
      folder + "08 I'm a Wrecking Ball.mp3",
      folder + "09 Savior's Robes.mp3",
      folder + "10 Fields & Fences.mp3",
    ];
   }

  ngOnInit() {
    this.advancePlayerTrack();
  }

  advancePlayerTrack() {
    this.songIndex = (this.songIndex + 1) % this.songs.length;
    this.currentSong = this.sanitizer.bypassSecurityTrustResourceUrl(this.songs[this.songIndex]);
    console.log('Playing ' + this.currentSong);
  }

}
