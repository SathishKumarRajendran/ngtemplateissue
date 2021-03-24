import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionAllModule, ToolbarAllModule } from "@syncfusion/ej2-angular-navigations";
import { TextBoxAllModule } from "@syncfusion/ej2-angular-inputs";
import { DropDownListAllModule } from "@syncfusion/ej2-angular-dropdowns";
import { DropDownButtonAllModule } from "@syncfusion/ej2-angular-splitbuttons";
import { SplitterAllModule } from '@syncfusion/ej2-angular-layouts';

import { AppComponent } from './app.component';
import { ChildComponent } from './text.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent
  ],
  imports: [
    BrowserModule, DropDownButtonAllModule, AccordionAllModule, ToolbarAllModule, TextBoxAllModule, DropDownListAllModule, SplitterAllModule
  ],
  providers: [],
  bootstrap: [AppComponent, ChildComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
