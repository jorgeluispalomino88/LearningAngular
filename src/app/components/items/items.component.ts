import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.items =  [
      {
          id: 0,
          title: 'manzana',
          price: 10.5,
          quantity: 4,
          completed: true
      },
      {
        id: 0,
        title: 'platano',
        price: 5.0,
        quantity: 10,
        completed: false
    }
    ];
  }

}
