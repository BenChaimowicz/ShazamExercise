import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { FavoritesService } from './services/favorites.service';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SongtableComponent } from './songtable/songtable.component';
import { SearchlineComponent } from './searchline/searchline.component';

@NgModule({
  declarations: [
    AppComponent,
    SongtableComponent,
    SearchlineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [DataService,
    FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
