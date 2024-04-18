import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: any;
  mouseX = 0;
  mouseY = 0;

  constructor(
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  getInfo(){
    this.service.getInfo().subscribe((res:any) =>{
      this.data = res
      console.log(this.data);
    })
  }
}
