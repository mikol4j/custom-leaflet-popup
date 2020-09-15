import { Component, OnInit,ComponentFactoryResolver,Injector, ComponentRef } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";
import { CustomPopupComponent } from './custom-popup/custom-popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customPopup: ComponentRef<CustomPopupComponent>;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public injector: Injector
     ) {
      }

  public map: any;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 12,
    center: L.latLng({ lat: 51.988287, lng: 21.931897 }),
  };

  ngOnInit() {}

  onMapReady(map: any): void {
    this.map = map;
    this.createCustomPopup();
    var marker = L.marker([51.988287, 21.931897]).addTo(this.map);
    marker.bindPopup(this.customPopup.location.nativeElement).openPopup();
  }

  createCustomPopup(){
    this.customPopup = this.componentFactoryResolver.resolveComponentFactory(CustomPopupComponent).create(this.injector);
    this.customPopup.changeDetectorRef.detectChanges();
    this.customPopup.instance.tabChanged.subscribe(x=>{if(x==true) this.customPopup.changeDetectorRef.detectChanges();})

  }

}
