import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  ngOnInit(): void {

  }
  bannerSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items:3
      }
    },
    nav: true,
    navText: ['<i class="fa fa-caret-left"</i>', '<i class="fa fa-caret-right"</i>'],

  }
projectcount:number = 0;

projectcountStop:any = setInterval(()=>{
  this.projectcount++;
  if(this .projectcount ==287)
  {
    clearInterval(this.projectcountStop)
  }
},10)

pound:number = 0;
poundStop:any = setInterval(()=>{
  this.pound++;
  if(this .pound ==287)
  {
    clearInterval(this.poundStop)
  }
},10)

projectcounts:number = 0;
projectcountsStop:any = setInterval(()=>{
  this.projectcounts++;
  if(this .projectcounts ==287)
  {
    clearInterval(this.projectcountsStop)
  }
},10)
}

