import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PlayerCharactersComponent } from './player-characters/player-characters.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EncounterGeneratorComponent } from './encounter-generator/encounter-generator.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCharactersComponent,
    BackstoryComponent,
    MessagesComponent,
    DashboardComponent,
    CharacterSearchComponent,
    NavigationBarComponent,
    HomepageComponent,
    EncounterGeneratorComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Last left off at 
/* 
 * Completed Tutorial 
https://angular.io/guide/architecture
*/