import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { timeout } from 'q';

@Component({
  selector: 'app-photo-slideshow',
  templateUrl: './photo-slideshow.component.html',
  styleUrls: ['./photo-slideshow.component.css'],
  animations: [
    trigger('transitionImage',[
      state('imageUp', style({
        opacity: 1
      })),
      state('imageDown', style({
        opacity: 0
      })),
      transition('imageUp => imageDown',[
        animate('1s')
      ]),
      transition('imageDown => imageUp',[
        animate('1s')
      ])
    ])
  ]
})
export class PhotoSlideshowComponent implements OnInit {

  imageUp: boolean
  maxImageCount: number
  currentImageIndex: number
  currentImage: string

  constructor() {
    // Set the total number of pictures we have and start using one randomly
    this.imageUp = false;
    this.maxImageCount = 208;
    this.selectRandomIndex();
    this.setImage();
  }

  ngOnInit() {
  }



  selectRandomIndex() {
    this.currentImageIndex = Math.floor(Math.random() * this.maxImageCount);
  }

  incrementImageIndex() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.maxImageCount;
  }

  setImage() {
    this.currentImage = "/assets/img/korey/" + this.currentImageIndex + ".jpg" as string
    console.log("Setting current image: " + this.currentImage);
  }

  handleTransitionDone() {
    if (this.imageUp) {
      setTimeout(() => {this.imageUp = false;}, 12 * 1000);
    } else {
      this.incrementImageIndex();
      this.setImage();
    }
  }

  handleImageLoaded() {
    this.imageUp = true;
  }

}
