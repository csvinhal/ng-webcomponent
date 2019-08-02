import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { NgCardElementComponent } from "./ng-card-element/ng-card-element.component";

@NgModule({
  declarations: [NgCardElementComponent],
  imports: [BrowserModule],
  entryComponents: [NgCardElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });

    customElements.define("facebook-card", el);
  }
}
