import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {FieldsetModule} from 'primeng/fieldset';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    FieldsetModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
