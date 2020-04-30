import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style = 'none';
 }
}
