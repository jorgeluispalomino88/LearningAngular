import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  message: string = "Total por pagar";
  totalPayment: number = 0;

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

    this.getTotalPayment();
  }

  //Metodo que captura el evento deleteItem del componente Item y elimina el componente de la lista de Items
  deleteItem(item: Item){
    console.log("Deleting item " + item.id);
    this.items = this.items.filter(x => x.id != item.id);

    this.getTotalPayment();
  }

  getTotalPayment(){
    this.totalPayment =  this.items.filter(x => x.completed)
                        .map(x=> x.price * x.quantity)
                        .reduce((acc,x) => acc += x, 0);

    console.log("Total payment: " + this.totalPayment);
  }

}
