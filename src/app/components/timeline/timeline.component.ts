import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  carrer: any;

  constructor(
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.getCarrer();
  }

  getCarrer(){
    this.service.getCarrer().subscribe((res:any) =>{
      this.carrer = res.exp
      console.log(this.carrer);
      if (res.exp) {
      }
    })
  }


}
