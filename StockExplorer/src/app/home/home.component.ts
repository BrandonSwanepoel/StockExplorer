import { Component } from '@angular/core';
import { stockParent } from '../models/stockParent';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'

})
export class HomeComponent {
  private showValues: boolean = false;
  private stockParent: stockParent | undefined;

  get stockParentValue() { return this.stockParent; }
  get showStockValues() { return this.showValues; }

  public setStockParent(event: any) {
    if (this.stockParent === event) {
      this.showValues = false;
      this.stockParent = undefined;
      return;
    }
    this.stockParent = event;
    this.showValues = true;
  }
}
