import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}from '@angular/common/http';

import { AppComponent } from './app.component'; //here we import the Appcomponent form the value component
import { ValueComponent } from './value/value.component'; //as same as the AppComponent

@NgModule({
   declarations: [
      AppComponent, //These are imported form the value.component.ts
      ValueComponent 
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
