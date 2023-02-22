import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { FixtureSetupComponent } from './fixture-setup/fixture-setup.component';
import { JobPlacementComponent } from './job-placement/job-placement.component';
import { AirCleaningComponent } from './air-cleaning/air-cleaning.component';
import { LacqueringComponent } from './lacquering/lacquering.component';
import { SfgBinningComponent } from './sfg-binning/sfg-binning.component';

const routes: Routes = [{ path: '', component: HomepageComponent },{ path: 'cleaning', component: CleaningComponent}, {path:'fixture-setup', component: FixtureSetupComponent}, {path: 'job-placement', component: JobPlacementComponent}, {path: 'air-cleaning', component: AirCleaningComponent}, {path: 'lacquering', component: LacqueringComponent}, {path:'sfg-binning', component: SfgBinningComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
