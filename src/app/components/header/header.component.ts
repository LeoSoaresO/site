import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:any;
  skills:any;
  mouseX = 0;
  mouseY = 0;
  boo: any;

  @Output() boolean = new EventEmitter<boolean>();

  constructor(
    private service: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getInfo();
    this.getSkills();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  themeCtrl(event: any){
    this.boo = event;
    this.boolean.emit(this.boo)
  }

  downloadFile(){
    const url = 'https://leosoareso.github.io/apis/site/api/cv.pdf';
    this.http.get(url, { responseType: 'blob' }).subscribe((res: any) => {
        const blob = new Blob([res], { type: res.type });
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'Leonardo_cv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  goToContactSection(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  getInfo(){
    this.service.getInfo().subscribe((res:any) =>{
      this.data = res
      console.log(this.data);
    })
  }

  getSkills(){
    this.service.getSkills().subscribe((res:any) =>{
      this.skills = res
      console.log(this.skills);
    })
  }

  getStarsArray(count: number): number[] {
    return new Array(count);
  }

}
