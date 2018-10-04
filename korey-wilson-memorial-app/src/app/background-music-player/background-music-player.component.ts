import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-music-player',
  templateUrl: './background-music-player.component.html',
  styleUrls: ['./background-music-player.component.css']
})
export class BackgroundMusicPlayerComponent implements OnInit {

  songs: string[];
  songIndex = 0;

  constructor() {
    const folder = "/assets/audio/";
    this.songs = [
      folder + "01 Rest in Peace.m4a",
      folder + "02 What Appears.m4a",
      folder + "03 Got Yours.m4a",
      folder + "04 A Place We Set Afire.m4a",
      folder + "05 Leave a Light On.m4a",
      folder + "06 The Hurt Is Gone.m4a",
      folder + "07 Empty Street.m4a",
      folder + "08 I'm a Wrecking Ball.m4a",
      folder + "09 Savior's Robes.m4a",
      folder + "10 Fields & Fences.m4a",
    ];
   }

  ngOnInit() {
  }

  advancePlayerTrack() {
    this.songIndex = (this.songIndex + 1) % this.songs.length;
  }

}
