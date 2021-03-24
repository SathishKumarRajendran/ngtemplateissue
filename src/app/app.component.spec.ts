import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionAllModule, ToolbarAllModule } from "@syncfusion/ej2-angular-navigations";
import { TextBoxAllModule } from "@syncfusion/ej2-angular-inputs";
import { DropDownListAllModule } from "@syncfusion/ej2-angular-dropdowns";
import { DropDownButtonAllModule } from "@syncfusion/ej2-angular-splitbuttons";
import { SplitterAllModule } from '@syncfusion/ej2-angular-layouts';

import { AppComponent } from './app.component';
import { ChildComponent } from "./text.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, ChildComponent
      ],
      imports: [BrowserModule, DropDownButtonAllModule, AccordionAllModule, ToolbarAllModule,
        TextBoxAllModule, DropDownListAllModule, SplitterAllModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should render accordion with text box', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-ej2-angular-app app is running!');
  });
});
