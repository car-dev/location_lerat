import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AccueilComponent } from './ui/accueil/accueil.component';
import { AccesComponent } from './ui/acces/acces.component';
import { TarifComponent } from './ui/tarif/tarif.component';
import { LogementComponent } from './ui/logement/logement.component';
import { ContactComponent } from './ui/contact/contact.component';
import { ActiviteComponent } from './ui/activite/activite.component';
import { HeaderComponent } from './ui/inc/header/header.component';
import { PieceComponent } from './ui/logement/piece/piece.component';

const appRoutes: Routes = [
  { path: 'accueil',      component: AccueilComponent },
  { path: 'acces',      component: AccesComponent },
  { path: 'tarifs',      component: TarifComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'logement',      component: LogementComponent },
  { path: 'activites',      component: ActiviteComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AccesComponent,
    TarifComponent,
    LogementComponent,
    ContactComponent,
    ActiviteComponent,
    HeaderComponent,
    PieceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
