import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-music-player',
  templateUrl: './background-music-player.component.html',
  styleUrls: ['./background-music-player.component.css']
})
export class BackgroundMusicPlayerComponent implements OnInit {

  songs: string[];
  songIndex: number;
  audioPlayer: HTMLAudioElement
  autoplaySuccess: boolean

  constructor() {
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
    this.songIndex = -1;
    this.audioPlayer = new Audio();
    this.audioPlayer.onended = () => { this.advanceAudioTrack() };
    // If the audio fails, this will be set to false. Setting default true prevents the icon from blinking in and out when there is no problem
    this.autoplaySuccess = true;
   }

  ngOnInit() {
    this.advanceAudioTrack();
  }

  resetAudioAndPlay() {
    this.songIndex = -1;
    this.advanceAudioTrack();
  }

  advanceAudioTrack() {
    this.songIndex = (this.songIndex + 1) % this.songs.length;
    this.audioPlayer.src = this.songs[this.songIndex];
    console.log("Setting current music: " + this.songs[this.songIndex]);
    const promise = this.audioPlayer.play();
    if (promise !== undefined) {
      promise.then(_ => {
        this.autoplaySuccess = true;
      }).catch(error => {
        this.autoplaySuccess = false;
      })
    } else {
      this.autoplaySuccess = false;
    }
  }
}
