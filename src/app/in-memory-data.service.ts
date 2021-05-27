import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PC } from './pc';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { id: 101, name: 'Professor Mallein' },
      { id: 102, name: 'Gniv-Eth' },
      { id: 103, name: 'Kosuke Drajic' },
      { id: 104, name: 'Eagrette' },
      { id: 105, name: 'Dorraine' },
      { id: 106, name: 'Kef Jo Henrana' },
      { id: 107, name: 'Brigundy Branutoo' },
      { id: 108, name: 'Inbeg' },
      { id: 109, name: 'Ketzeni Lumesne' },
      { id: 110, name: 'Taneka Lipitl' },
      { id: 111, name: 'Lt. Ryleigh' },
      { id: 112, name: 'Lt. Paris' },
      { id: 113, name: 'Keffon Harc' },
      { id: 114, name: 'Geon Geitz' }
    ];
    return {characters};
  }
  
  // Override genId method to ensure that a hero always has an id
  // if the character array is empty then the overridden method returns the initial number (101)
  // if the characters array is NOT empty then the overridden method returns the highest ID + 1
  genId(characters:PC[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 101;
  }
}
