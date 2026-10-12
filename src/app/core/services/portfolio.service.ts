import { Injectable } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { PortfolioData } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  getData(): PortfolioData {
    return PORTFOLIO_DATA;
  }
}
