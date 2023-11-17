import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { CounterComponent } from './counter/counter.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
const routes: Routes = [
  {path:'counter-page',component:CounterPageComponent},
  {path:'example',component:ExampleComponent},
  {path:'people-list',component:PeopleListComponent},
  {path:'',redirectTo:'example',pathMatch:'full'},
  {path:'param-example/:urlParam',component:ParamExampleComponent},
  {path:'param-example/:urlParam/:anotherParam',component:ParamExampleComponent},
  {path:'user-info-from',component:UserInfoFormComponent},
  {path:'**',component:NotFoundPageComponent}
  // {path:'counter',component:CounterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
