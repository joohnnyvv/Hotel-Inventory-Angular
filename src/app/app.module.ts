import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
