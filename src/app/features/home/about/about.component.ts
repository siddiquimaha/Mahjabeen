import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.getData().profile;
}
