import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo() {
    return this.http.get(`${API.URL}/info.json`)
  }
  getSkills() {
    return this.http.get(`${API.URL}/icons/icons.json`)
  }
  getCarrer() {
    return this.http.get(`${API.URL}/carrer/company.json`)
  }

}
