import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly profile = this.portfolioService.getData().profile;

  phoneHref(): string {
    return `tel:${this.profile.phone.replace(/\s/g, '')}`;
  }
}
