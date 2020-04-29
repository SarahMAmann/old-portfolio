import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './views/portfolio-component/portfolio.component';
import { PortfolioRoutingModule } from './routing/portfolio.routing';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PortfolioRoutingModule
  ],
  exports: [

  ]
})
export class PortfolioModule {}
