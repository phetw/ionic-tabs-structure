import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage: 'TH' | 'ENG'

  constructor() { }

  ngOnInit() {
    this.setDefaultLanguage()
  }

  setDefaultLanguage() {
    this.currentLanguage = 'TH'
  }

  switchLanguage() {
    console.log('swicthing language...');
  }
}
