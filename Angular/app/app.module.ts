import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HwlloWorldComponent } from './hwllo-world/hwllo-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserModelComponent } from './user-model/user-model.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { EventEgComponent } from './event-eg/event-eg.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { FormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PopleListComponent } from './pople-list/pople-list.component';
import { PeopleModuleComponent } from './people-module/people-module.component';

@NgModule({
  declarations: [
    AppComponent,
    HwlloWorldComponent,
    UserItemComponent,
    UserListComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserModelComponent,
    PropBindComponent,
    EventEgComponent,
    UserManagerComponent,
    OrderDetailsComponent,
    PopleListComponent,
    PeopleModuleComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
