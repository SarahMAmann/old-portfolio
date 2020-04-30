import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  // animations: [
  //   trigger('fade', [
  //     transition('void => *', [
  //       style({ opacity: 0 }),
  //       animate(2000, style({opacity: 1}))
  //     ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {

  }

  goToWork() {
    console.log('clicked');
    this.router.navigate(['/work'])
  }

}

