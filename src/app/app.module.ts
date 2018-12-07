import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FormAssignmentComponent]
})
export class AppModule { }
