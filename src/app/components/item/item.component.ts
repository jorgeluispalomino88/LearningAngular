import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Parametro de entrada. Para pasarle datos al componente desde su componente padre
  @Input() item: Item = new Item();

  //Parametro de salida. Para enviar eventos hacia el componente padre
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 //Al hacer click al boton de eliminar se ejecuta el metodo onDelete
 //que dispara el evento deleteItem con el Item seleccionado
  onDelete(item: Item){
    console.log("Executed  method onDelete");
    this.deleteItem.emit(item);
  }

  onToggle(item: Item){
    item.completed = !item.completed;
  }

}
