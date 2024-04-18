import { Injectable } from '@angular/core';
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Produto[] = [];
  constructor() {}

  addToCart(produto: Produto) {
    this.cart.push(produto);
    this.saveCart();
  }
  saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
  }

  getCart(): Produto[] {
    return this.cart;
  }
  loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
  clearCart() {
    this.cart = [];
    this.saveCart();
  }
}
