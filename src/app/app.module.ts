import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CounterComponent } from './counter/counter.component';
import { CongraMsgComponent } from './congra-msg/congra-msg.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { ButtonComponent } from './button/button.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { SuccessButtonComponent } from './success-button/success-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PeopleListComponent,
    CounterComponent,
    CongraMsgComponent,
    CounterPageComponent,
    ParamExampleComponent,
    NotFoundPageComponent,
    UserInfoFormComponent,
    NavBarComponent,
    UserInfoDisplayComponent,
    ButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
