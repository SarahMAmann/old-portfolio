import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './views/portfolio-component/portfolio.component';
import { PortfolioRoutingModule } from './routing/portfolio.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PortfolioRoutingModule,
    CarouselModule
  ],
  exports: [

  ]
})
export class PortfolioModule {}
