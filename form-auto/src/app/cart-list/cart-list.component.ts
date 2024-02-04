import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input() colore: HTMLInputElement;
  @Input() porte: HTMLInputElement;
  @Input() cambio: HTMLInputElement;
  constructor() {
   
  }
  ngOnInit(): void {
    
  }
}
