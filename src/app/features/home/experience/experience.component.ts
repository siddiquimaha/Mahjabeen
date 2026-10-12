import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.getData().experiences;
}
