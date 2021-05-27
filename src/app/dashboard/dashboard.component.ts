import { Component, OnInit } from '@angular/core';
import { PC } from '../pc';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: PC[] = [];

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.mailService.getCharacters()
      .subscribe(characters => this.characters = characters.slice(1,5));
  }
}
