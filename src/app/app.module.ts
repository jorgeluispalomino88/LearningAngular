import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent} from './components/mycomponent/mycomponent.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MoviesComponent,
    ShoppingComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
