import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-control',
  templateUrl: './theme-control.component.html',
  styleUrls: ['./theme-control.component.scss']
})
export class ThemeControlComponent implements OnInit {

  darkMode = false;
  @Output() boolean = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.boolean.emit(this.darkMode)
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    this.boolean.emit(this.darkMode)
  }

}
