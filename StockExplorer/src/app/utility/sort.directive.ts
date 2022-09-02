import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Sort } from './sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any> | undefined;

  constructor(private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const sort = new Sort();

    const nativeElement = this.targetElement.nativeElement;

    const order = nativeElement.getAttribute("data-order");

    const type = nativeElement.getAttribute("data-type");

    const property = nativeElement.getAttribute("data-name");

    if (order === "desc") {
      this.appSort?.sort(sort.startSort(property, order, type));
      nativeElement.setAttribute("data-order", "asc");
    } else {
      this.appSort?.sort(sort.startSort(property, order, type));
      nativeElement.setAttribute("data-order", "desc");
    }
  }
}