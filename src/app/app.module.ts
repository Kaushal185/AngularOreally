import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CounterComponent } from './counter/counter.component';
import { CongraMsgComponent } from './congra-msg/congra-msg.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PeopleListComponent,
    CounterComponent,
    CongraMsgComponent,
    CounterPageComponent,
    ParamExampleComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
