import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

}
