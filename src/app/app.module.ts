import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import localRU from '@angular/common/locales/ru'
import localUK from '@angular/common/locales/uk'

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IncrementPipe } from './pipes';
import { BoldAndColorDirective } from './directives';
import { StringifyPipe } from './pipes';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";

registerLocaleData(localRU,'ru')
registerLocaleData(localUK,'uk')


@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldAndColorDirective,
    StringifyPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'ru'},
    {provide:LOCALE_ID,useValue:'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
