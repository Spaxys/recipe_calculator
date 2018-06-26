import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';
import { IShop } from '../interfaces/shop';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  constructor(private _service: ShopService, private _router: Router) { }


  shops: IShop[];
  errorMessage: any;

  ngOnInit() {
    this._service.getAll()
    .subscribe(shops => this.shops = shops,
    error => this.errorMessage = <any>error);
  }

}
