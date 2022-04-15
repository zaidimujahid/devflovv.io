import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  isUxui = false;
  toggleUxui(){
    this.isUxui = !this.isUxui;
  }

  isTesting = false;
  toggleTesting(){
    this.isTesting = !this.isTesting;
  }

  isChain = false;
  toggleChain(){
    this.isChain = !this.isChain;
  }
  isMobile = false;
  toggleMobile(){
    this.isMobile = !this.isMobile;
  }
  isWeb = false;
  toggleWeb(){
    this.isWeb = !this.isWeb;
  }
  isLot = false;
  toggleLot(){
    this.isLot = !this.isLot;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
