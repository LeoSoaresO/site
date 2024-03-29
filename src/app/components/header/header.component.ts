import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:any;
  skills:any;
// "Desenvolvedor Front-end Sênior com mais de 4 anos de experiência. Tecnólogo em Sistemas para Internet. Participação em diversos projetos em áreas como educação, financeiro, social media, aluguel de veículos e marketplaces. Experiência em criação e desenvolvimento de dashboards, marketplaces, sites institucionais, aplicações de controle e aplicações de uso interno. Especializado em criar aplicativos web, escaláveis e altamente responsivos. Experiente em trabalhar com Node.js e Git para suportar projetos. Habilidoso em UX e UI, Sempre buscando aprender.",


  constructor(
    private service: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getInfo();
    this.getSkills();

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
