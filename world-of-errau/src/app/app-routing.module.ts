import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerCharactersComponent } from './player-characters/player-characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackstoryComponent } from './backstory/backstory.component';

const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'player-characters', component: PlayerCharactersComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'backstory/:id', component: BackstoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
