import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  title: string = "";
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log("Submitting item: "  + this.title + " with price: " + this.price + " and quantity: " + this.quantity);

    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;

    this.itemService.addItem(item);
    console.log("Added the item: " + item.id);

  }

}
