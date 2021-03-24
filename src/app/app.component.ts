import { Component, ViewEncapsulation } from '@angular/core';
import { ItemModel } from "@syncfusion/ej2-angular-splitbuttons";

import { ChildComponent } from "./text.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'my-ej2-angular-app';
  constructor() { }
  public data: string[] = ["Snooker", "Tennis", "Cricket", "Football", "Rugby"];
  public items: ItemModel[] = [
    { text: "Dashboard", iconCss: "e-ddb-icons e-dashboard" },
    { text: "Notifications", iconCss: "e-ddb-icons e-notifications" },
    { text: "User Settings", iconCss: "e-ddb-icons e-settings" },
    { text: "Log Out", iconCss: "e-ddb-icons e-logout" }
  ];
}
