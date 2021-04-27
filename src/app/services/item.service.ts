import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

//**Servicio necesario para que el modelo de datos y los métodos
//*asociados puedan ser accedidos desde cualquier parte del código*/
export class ItemService {

  items: Item[] = [
    {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: true
    },
    {
      id: 1,
      title: 'platano',
      price: 5.0,
      quantity: 10,
      completed: false
  },
  {
    id: 2,
    title: 'pan',
    price: 1.0,
    quantity: 4,
    completed: false
}
  ];

  constructor(private router: Router) { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
    this.router.navigate(['/']);

  }
}
