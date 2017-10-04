import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListItemComponent} from "../item/list-item/list-item.component";
import {FormComponent} from "../item/form/form.component";
import {HomeComponent} from "../home/home.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListItemComponent},
  {path: 'form', component: FormComponent},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
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
