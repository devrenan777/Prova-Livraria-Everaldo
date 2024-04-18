import { Component, OnInit } from '@angular/core';
import { CartService, Produto } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: Produto[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }
  loadCart() {
    this.cart = this.cartService.getCart();
  }
  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }
}
