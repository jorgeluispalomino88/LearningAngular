import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MyComponent {
  public title: string = 'MyPrimerComponente';
  public year: number;

  constructor(){

      console.log("Loaded component MyComponent !!!!");
      this.year = 2021;
      console.log("Component MyComponent was created in the year " + this.year);

  }
}
