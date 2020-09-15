import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngx-custom-popup',
  templateUrl: './custom-popup.component.html',
})
export class CustomPopupComponent implements OnInit {
  tabsWithIcons =
    [
      {
        "tabName":"Tab1",
        "icon":"icon1"
      },
      {
        "tabName":"Tab2",
        "icon":"icon2"
      },
      {
        "tabName":"Tab3",
        "icon":"icon3"
      },
      {
        "tabName":"Tab4",
        "icon":"icon4"
      }           
    ]
  
  selectedTab: string = this.tabsWithIcons[0]["tabName"];
  @Output() tabChanged = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit(): void {

  }
  selectTab(tab: any) {
    this.selectedTab = tab["tabName"];
    this.tabChanged.emit(true);
  }
}
