import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent} from './components/mycomponent/mycomponent.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }