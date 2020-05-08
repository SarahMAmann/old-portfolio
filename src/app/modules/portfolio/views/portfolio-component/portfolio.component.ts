import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
    animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})

export class PortfolioComponent implements OnInit {
  ngOnInit() {

  }
}
