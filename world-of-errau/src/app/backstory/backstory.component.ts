import { Component, OnInit, Input } from '@angular/core';
import { PC } from '../pc';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MailService } from '../mail.service';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrls: ['./backstory.component.css']
})
export class BackstoryComponent implements OnInit {
  character: PC;
  
  constructor(
    private route: ActivatedRoute,
    private mailService: MailService,
    private location: Location 
  ) { }
  
  ngOnInit(): void {
    this.getCharacter();
  }
  
  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mailService.getCharacter(id).subscribe(character => this.character = character);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.mailService.updateCharacter(this.character).subscribe(()=>this.goBack());
  }

}
