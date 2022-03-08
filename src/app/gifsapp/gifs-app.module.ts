import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GifsAppComponent } from './gifs-app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    GifsAppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    HttpClientModule
  ], exports: [
    GifsAppComponent
  ]
})
export class GifsAppModule { }
