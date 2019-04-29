import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { SongtableComponent } from './songtable/songtable.component';

@NgModule({
  declarations: [
    AppComponent,
    SongtableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
