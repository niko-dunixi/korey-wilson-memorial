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
  looper: Observable<number>
  currentImage: string

  constructor() {
    // Set the total number of pictures we have and start using one randomly
    this.imageUp = false;
    this.maxImageCount = 172;
    this.selectRandomIndex();
    this.setImage();
    this.looper = timer(1000, 12000);
  }

  ngOnInit() {
    // Loop through all images
    // FIXME: This is mixing an observable with old-school javascript timeouts. This is nasty.
    this.looper.subscribe(() => {
      setTimeout(() => {
        this.toggleVisible();
        this.incrementImageIndex();
        this.setImage();
        setTimeout(() => {
          this.toggleVisible();
        }, 10500);
      },1500);
    });
  }

  toggleVisible() {
    this.imageUp = !this.imageUp;
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

}
