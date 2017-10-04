import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { StateDirective } from './state.directive';
import { CollectionService } from "./collection.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {environment} from "../../environments/environment.prod";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {ListItemComponent} from "./list-item/list-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    ListItemComponent,
    FormComponent,
    FilterPipe,
    StateDirective,
  ],
  providers: [
    CollectionService
  ]
})
export class ItemModule { }
