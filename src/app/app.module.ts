import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/nav/nav.component';
import { MainComponent } from './views/main/main.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { SkillsComponent } from './views/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    WelcomeComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
