import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './public/menu/menu.component';
import { FooterComponent } from './public/footer/footer.component';
import { DocsComponent } from './docs/docs.component';
import { HeaderMenuComponent } from './public/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    FooterComponent,
    DocsComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
