import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyComponent} from './components/mycomponent/mycomponent.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { AdditemComponent } from './components/additem/additem.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MoviesComponent,
    ShoppingComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    AdditemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',
      component: ShoppingComponent
      },
      {
        path: 'add',
       component: AdditemComponent
      },
      {
        path: '',
        redirectTo: '', pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
