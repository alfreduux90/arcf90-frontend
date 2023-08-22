import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from "./material.module";

import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
import { OrganismsModule } from './shared/components/organisms/organisms.module';

import { NotificationModule } from './core/services';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from '../../src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore} from '@angular/fire/firestore';
import { getAuth, provideAuth} from '@angular/fire/auth';
import { getStorage, provideStorage} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(()=> getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),

    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireStorageModule,

    MaterialModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    NotificationModule.forRoot()
  ],
  providers: [
    MoleculesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
