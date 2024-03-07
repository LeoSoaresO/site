import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:any

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.service.getInfo().subscribe((res:any) =>{
      this.data = res
      console.log(this.data);

    })
  }

}
