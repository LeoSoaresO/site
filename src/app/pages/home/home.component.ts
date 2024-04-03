import { Component, OnInit, HostListener  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showButton = false;
  others:any;
  dataset:any;

  constructor(private service: ApiService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY  > 30) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  ngOnInit() {
    this.getPortfolio();
  }

  topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  getPortfolio(): void {
    this.service.getPortfolio().subscribe((res: any) => {
      console.log(res);

      this.dataset = res.profissional.map((data: any) => ({
        ...data,
        active: false
      }));

      this.others = res.others.map((d: any) => ({
        ...d,
        active: false
      }));
      console.log(this.others);

    });
  }

}
