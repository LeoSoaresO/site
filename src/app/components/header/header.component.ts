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
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.getInfo();
    this.getSkills();

  }

  downloadFile(){
    window.open("https://leosoareso.github.io/apis/site/api/profile_pic.jpeg")
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
