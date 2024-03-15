import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  slider: HTMLElement | null = null;
  dataset: any;

  constructor(private service: ApiService) { }

  ngAfterViewInit(): void {
    this.getPortfolio();
    setTimeout(() => {
      this.initializeSlider();
    }, 100);
  }

  getPortfolio(): void {
    this.service.getPortfolio().subscribe((res: any) => {
      this.dataset = res.port;
      console.log(this.dataset);
      this.initializeSlider();
    });
  }

  initializeSlider(): void {
    this.slider = document.querySelector('.slider');
    if (this.slider) {
      this.sliderFunction();
    } else {
      console.error("Slider element not found");
    }
  }

  sliderFunction(): void {
    const activate = (e: MouseEvent) => {
      if (!this.slider) return; // Check if slider exists

      const items: NodeListOf<HTMLElement> = document.querySelectorAll('.item');

      if (e.target instanceof HTMLElement) {
        if (e.target.matches('.next')) {
          this.slider.append(items[0]);
        } else if (e.target.matches('.prev')) {
          this.slider.prepend(items[items.length - 1]);
        }
      }
    }

    document.addEventListener('click', activate, false);
  }
}
