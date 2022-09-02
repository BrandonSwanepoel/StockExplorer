import { Component, EventEmitter, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { stockParent } from '../models/stockParent';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-stocks',
  templateUrl: 'stocks.component.html',
  styleUrls: ['../shared/shared.component.css', 'stocks.component.css']
})
export class StocksComponent {
  @Output() stockParent = new EventEmitter<stockParent>();

  private searchedText!: string;
  private stockParents!: stockParent[];
  private title: string = "Stocks";

  constructor(private sharedService: SharedService, private homeComponent: HomeComponent) { this.getStocksFromService() }

  set setSearchedText(searchText: string) { this.searchedText = searchText }

  get getStockParents(): stockParent[] { return this.stockParents }
  get getSearchedText(): string { return this.searchedText }
  get getTitle(): string { return this.title }

  private getStocksFromService(): void {
    this.sharedService.getStocks().subscribe(
      data => {
        this.stockParents = data as stockParent[];
      }
    );
  }

  public setStockValues(stockParent: stockParent): void {
    this.stockParent.emit(stockParent);
  }

  public isSelected(stockParent: stockParent): boolean {
    return this.homeComponent.stockParentValue === stockParent
  }
}
