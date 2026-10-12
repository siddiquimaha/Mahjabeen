import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.getData().profile;
}
