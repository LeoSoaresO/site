import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnChanges {
  dataset: any;
  carouselOptions: any;
  @Input() data:any;
  @Input() title:string = '';

  constructor() {
    this.carouselOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 400,
      navText: ['', ''],
      center: true,
      startPosition: 0,
      items: 3,
    }
  }
  ngOnChanges(): void {

  }

}
