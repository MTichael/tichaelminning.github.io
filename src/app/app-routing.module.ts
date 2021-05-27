import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PlayerCharactersComponent } from './player-characters/player-characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { EncounterGeneratorComponent } from './encounter-generator/encounter-generator.component';

const routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'player-characters', component: PlayerCharactersComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'backstory/:id', component: BackstoryComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'encounter-generator', component: EncounterGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
