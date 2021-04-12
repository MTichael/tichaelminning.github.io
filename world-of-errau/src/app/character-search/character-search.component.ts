import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, swtichMap } from 'rxjs/operators';
import { PC } from '../pc';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {
  characters$:Observable<PC[]>;
  private searchTerms = new Subject<string>();

  constructor(private mailService: MailService) { }
  
  // Push a search term into the observable stream
  search(term:string):void {
    this.searchTermss.next(term);
  }

  ngOnInit(): void {
    this.characters$ = this.searchTerms.pipe(
      debounceTime(300), //Waiting 300ms after each keystroke to consider the total term
      distinctUntilChanged(), //Ignore new term if same as previous term
      switchMap((term:string) => this.mailService.searchCharacters(term)),
    );
  }
}
