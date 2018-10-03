import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, TimeInterval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-photo-slideshow',
  templateUrl: './photo-slideshow.component.html',
  styleUrls: ['./photo-slideshow.component.css']
})
export class PhotoSlideshowComponent implements OnInit {

  maxImageCount: number
  currentImageIndex: number
  looper: Observable<number>
  currentImage: string

  constructor() {
    // Set the total number of pictures we have and start using one randomly
    this.maxImageCount = 4
    this.currentImageIndex = Math.floor(Math.random() * this.maxImageCount);
    // Loop through all images
    this.looper = timer(0, 5000);
    this.looper.subscribe(tick => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.maxImageCount;
      this.setImage();
    })
  }

  ngOnInit() {
  }

  setImage() {
    this.currentImage = "/assets/img/korey/" + this.currentImageIndex + ".jpg" as string
    console.log("Setting current image: " + this.currentImage);
  }

}
