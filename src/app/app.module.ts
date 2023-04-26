import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { locationReducer } from './ngrx/sharedStates/sharedStates.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule,
    StoreModule.forRoot({locationReducer: locationReducer}),
  ]
})
export class AppModule { }
