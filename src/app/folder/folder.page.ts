import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ElementRef, ViewChild } from '@angular/core';
import { CartService, Produto } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Tuca Coach - Comunicação não violenta',
      preco: 49.9,
      imagem:
        'https://www.tucacoach.com.br/assets/img/Ebooks/Comunica%C3%A7%C3%A3o.jpg',
    },
    {
      id: 2,
      nome: 'Tuca Coach - 4 Passos para estabelecer equilíbrio nos seus ambientes',
      preco: 49.9,
      imagem: 'https://www.tucacoach.com.br/assets/img/Ebooks/4%20passoss.jpg',
    },
  ];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.loadCart();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  addToCart(produto: Produto) {
    this.cartService.addToCart(produto);
  }
  goToCart() {
    this.router.navigateByUrl('/cart');
  }
}
