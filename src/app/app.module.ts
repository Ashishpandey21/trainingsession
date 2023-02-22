import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FixtureSetupComponent } from './fixture-setup/fixture-setup.component';
import { JobPlacementComponent } from './job-placement/job-placement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartCyclePopupComponent } from './start-cycle-popup/start-cycle-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoaderComponent } from './loader/loader.component';
import { AirCleaningComponent } from './air-cleaning/air-cleaning.component';
import { LacqueringComponent } from './lacquering/lacquering.component';
import { SfgBinningComponent } from './sfg-binning/sfg-binning.component';

@NgModule({
  declarations: [
    AppComponent,
    CleaningComponent,
    HomepageComponent,
    FixtureSetupComponent,
    JobPlacementComponent,
    StartCyclePopupComponent,
    LoaderComponent,
    AirCleaningComponent,
    LacqueringComponent,
    SfgBinningComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
