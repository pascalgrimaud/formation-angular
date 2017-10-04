import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListItemComponent} from "../list-item/list-item.component";
import {FormComponent} from "../form/form.component";

const appRoutes: Routes = [
  {path: 'list', component: ListItemComponent},
  {path: 'form', component: FormComponent},
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}
