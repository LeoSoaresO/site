import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  others:any;
  dataset:any;

  constructor(private service: ApiService) { }


  ngOnInit() {
    this.getPortfolio();
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
