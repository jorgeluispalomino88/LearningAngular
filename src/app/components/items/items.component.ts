import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  message: string = "Total por pagar";
  totalPayment: number = 0;

  constructor(private itemService: ItemService) { //Inyectando en el constructor el servicio ItemService

  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();


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
