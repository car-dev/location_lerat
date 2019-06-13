import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { AccueilComponent } from './ui/accueil/accueil.component';
import { AccesComponent } from './ui/acces/acces.component';
import { TarifComponent } from './ui/tarif/tarif.component';
import { LogementComponent } from './ui/logement/logement.component';
import { ContactComponent } from './ui/contact/contact.component';
import { LienComponent } from './ui/lien/lien.component';
// import { PopupComponent } from './ui/popup/popup.component';
// import { PopupService } from './ui/popup/popup.service';
import { HeaderComponent } from './ui/inc/header/header.component';
import { PieceComponent } from './ui/logement/piece/piece.component';

const appRoutes: Routes = [
  { path: 'accueil',      component: AccueilComponent },
  { path: 'acces',      component: AccesComponent },
  { path: 'tarifs',      component: TarifComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'logement',      component: LogementComponent },
  { path: 'lien',      component: LienComponent },
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
    LienComponent,
    // PopupComponent,
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
  // providers: [PopupService],
  bootstrap: [AppComponent],
  // entryComponents: [PopupComponent],
})
export class AppModule { }
