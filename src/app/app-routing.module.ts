import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { CounterComponent } from './counter/counter.component';
import { ParamExampleComponent } from './param-example/param-example.component';
const routes: Routes = [
  {path:'counter-page',component:CounterPageComponent},
  {path:'example',component:ExampleComponent},
  {path:'people-list',component:PeopleListComponent},
  {path:'',redirectTo:'example',pathMatch:'full'},
  {path:'param-example/:urlParam',component:ParamExampleComponent},
  {path:'param-example/:urlParam/:anotherParam',component:ParamExampleComponent},

  // {path:'counter',component:CounterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
