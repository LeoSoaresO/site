import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent implements OnInit {
  dataset: any;
  carouselOptions: any;

  constructor(private service: ApiService) {
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
      items: 4,
    }
  }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio(): void {
    this.service.getPortfolio().subscribe((res: any) => {
      console.log(res);

      this.dataset = res.port.map((game: any) => ({
        ...game,
        active: false
      }));
      console.log(this.dataset);

    });
  }

  toggleActive(game: any): void {
    this.dataset.forEach((g: any) => {
      if (g !== game) {
        g.active = false;
      }
    });
    game.active = !game.active;
  }
}
