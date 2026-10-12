import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly data = this.portfolioService.getData();
}
