import { Component, Input, OnChanges } from '@angular/core';
import { stockChild } from '../models/stockChild';
import { stockParent } from '../models/stockParent';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-stock-values',
  templateUrl: "stock-values.component.html",
  styleUrls: ['../shared/shared.component.css', 'stock-values.component.css']
})

export class StockValuesComponent implements OnChanges {
  @Input() stockParent: stockParent | undefined;

  private searchedText!: string;
  private stockValues!: stockChild[];

  constructor(private sharedService: SharedService) { }

  set setSearchedText(searchText: string) { this.searchedText = searchText }

  get stockChildren(): stockChild[] { return this.stockValues }
  get getTitle(): string | undefined { return this.stockParent?.stock }
  get getSearchedText(): string { return this.searchedText }

  ngOnChanges() {
    this.getStockValues(this.stockParent?.id);
  }

  private getStockValues(id: number | undefined): void {
    if (id === undefined) return;

    this.sharedService.getStockValue(id).subscribe(
      data => {
        this.stockValues = data as stockChild[];
      }
    );
  }

  public exportToJson(): void {
    var anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(JSON.stringify(this.stockChildren)));
    anchorElement.setAttribute('download', `${this.stockParent?.stock} Values.json`);
    anchorElement.click();
    alert("Exported to Json file");
  }
}
