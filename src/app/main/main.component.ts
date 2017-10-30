import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './../header/header.component';
import { MainSliderContentComponent } from './main-slider-content/main-slider-content.component';

import { FooterComponent } from './../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
