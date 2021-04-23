import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from '../additem/additem.component';
import { ItemComponent } from '../item/item.component';

const routes: Routes = [
{
  path: '',
  component: ItemComponent
},
{
  path: 'add',
  component: AdditemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ShoppingRoutingModule {}
