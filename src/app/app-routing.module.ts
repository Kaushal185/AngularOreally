import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
const routes: Routes = [
  {path:'counter-page',component:CounterPageComponent},
  {path:'example',component:ExampleComponent},
  {path:'people-list',component:PeopleListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
