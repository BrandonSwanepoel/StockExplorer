import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockValuesComponent } from './stock-values/stock-values.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './utility/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './utility/sort.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StockValuesComponent,
    StocksComponent,
    SearchFilterPipe,
    SortDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
