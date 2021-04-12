import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PC } from '../pc';

import { MailService } from '../mail.service';

@Component({
  selector: 'app-player-characters',
  templateUrl: './player-characters.component.html',
  styleUrls: ['./player-characters.component.css']
})
export class PlayerCharactersComponent implements OnInit {
  characters: PC[];
  shield: PC = {
      id: 10,
      name: "Elsin Gaebora"
  }
    
  constructor(private mailservice: MailService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  
  getCharacters(): void {
    //this.characters = this.mailservice.getCharacters();
    this.mailservice.getCharacters().subscribe(characters => this.characters = characters);
  }
  
  add(name:string):void {
    name = name.trim();
    if(!name) {return;}
    this.mailservice.addCharacter({name} as PC)
      .subscribe(character => {
        this.characters.push(character);
    });
  }
  
  delete(character:PC):void {
    this.characters = this.characters.filter(c => c !== character);
    this.mailservice.deleteCharacter(character.id).subscribe();
  }
}
