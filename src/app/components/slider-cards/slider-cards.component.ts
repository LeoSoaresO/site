import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnInit {
  carouselOptions: any;
  @Input() data:any;
  @Input() title:string = '';
  @Input() desc:string = '';

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
  ngOnInit(): void {

  }

  openLink(item:any){
    window.open(item.link, "_blank")
  }

}
