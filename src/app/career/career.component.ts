import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  isUxui = true;
  isTesting = false;
  isChain = false;
  isWeb = false;
  isMobile = false;
  isIot = false;

  toggleCard(selection: string) {
    if (selection === 'UIUX') {
      this.isUxui = true;
      (this.isTesting = false),
        (this.isChain = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'testing') {
      this.isTesting = true;
      (this.isUxui = false),
        (this.isChain = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'blockchain') {
      this.isChain = true;
      this.isUxui = false;
      (this.isTesting = false),
        (this.isWeb = false),
        (this.isMobile = false),
        (this.isIot = false);
    } else if (selection === 'mobile') {
      this.isMobile = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isWeb = false),
        (this.isChain = false),
        (this.isIot = false);
    } else if (selection === 'web') {
      this.isWeb = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isMobile = false),
        (this.isChain = false),
        (this.isIot = false);
    } else if (selection === 'IoT') {
      this.isIot = true;
      (this.isUxui = false),
        (this.isTesting = false),
        (this.isMobile = false),
        (this.isChain = false),
        (this.isWeb = false);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
