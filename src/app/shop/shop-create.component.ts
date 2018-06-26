import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';
import { IShop } from '../interfaces/shop';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.css']
})
export class ShopCreateComponent implements OnInit {

  constructor(private _service: ShopService, 
  private _router: Router) { }

  shop: IShop;
  shopName;

  create(){
    var shop: any = {
      name: this.shopName      // ingredientId: Math.ceil(Math.random() * 100000)
    };
    this._service.post(shop).subscribe();
    this._router.navigate(["shops"]);
  }

  ngOnInit() {
  }

}
