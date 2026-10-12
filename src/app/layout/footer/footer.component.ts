import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.getData().profile;
  readonly year = new Date().getFullYear();
}
