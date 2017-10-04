import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ItemModule} from "./item/item.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModalComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ItemModule,
    AppRoutingModule,

  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
