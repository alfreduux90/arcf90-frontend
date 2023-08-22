import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from "./material.module";
import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
import { NotificationModule } from './core/services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AtomsModule,
    MoleculesModule,
    NotificationModule.forRoot()
  ],
  providers: [
    MoleculesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
