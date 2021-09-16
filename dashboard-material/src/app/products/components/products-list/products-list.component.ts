import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
