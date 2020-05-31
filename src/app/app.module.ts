import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { YoutubeItemComponent } from './youtube-item/youtube-item.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeItemComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
