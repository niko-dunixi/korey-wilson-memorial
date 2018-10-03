import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-photo-slideshow',
  templateUrl: './photo-slideshow.component.html',
  styleUrls: ['./photo-slideshow.component.css']
})
export class PhotoSlideshowComponent implements OnInit {

  currentImage: string

  constructor() {
    this.currentImage = "/assets/img/korey/0.jpg" as string
  }

  ngOnInit() {
    interval(1000).pipe(
      map((x) => {

      })
    );
  }

}
