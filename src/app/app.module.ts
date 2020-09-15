import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { CustomPopupComponent } from './custom-popup/custom-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPopupComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
