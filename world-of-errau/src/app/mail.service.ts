import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PC } from './pc';
import { CHARACTERS } from './mock-char';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  private characterURL = 'api/characters'; //URL to web API
  private log(message: string) {
    this.messageService.add(`MailService: ${message}`);
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json' })
  };
  
  getCharacters(): Observable<PC[]> {
    return this.http.get<PC[]>(this.characterURL)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<PC[]>('getCharacters',[]))
      );
  }
  
  // Get character by ID. Returns ERR:404 if ID not found
  getCharacter(id: number): Observable<PC> {
    const url = `${this.characterURL}/${id}`;
    return this.http.get<PC>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<PC>(`getCharacter id=${id}`))
    );
  }
  
  //Put: Update the Character on the server
  updateCharacter(character: PC):Observable<any> {
    return this.http.put(this.characterURL,character,this.httpOptions).pipe(
      tap(_ => this.log(`updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }
  
  //Post: add a new character to the server
  addCharacter(character:PC):Observable<PC> {
    return this.http.post<PC>(this.characterURL, character, this.httpOptions).pipe(
      tap((newCharacter:PC) => this.log(`added character with id=${newCharacter.id}`)),
      catchError(this.handleError<PC>(`addCharacter`))
    );
  }
  
  //Delete: delete the character from the server
  deleteCharacter(id:number):Observable<PC> {
    const url = `${this.characterURL}/${id}`;
    
    return this.http.delete<PC>(url,this.httpOptions).pipe(
      tap(_=>this.log(`deleted character id=${id}`)),
      catchError(this.handleError<PC>('deleteHero'))
    );
  }
  
  //Get: characters whose name matchs the search term
  searchCharacters(term:string):Observable<PC[]> {
    if(!term.trim()) {
      //if ain't search term, return empty array
      retun of([]);
    }
    return this.http.get<PC[]>(`${this.characterURL}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found characters matching "${term}"`) :
         this.log(`no characters found matching "${term}"`)),
      catchError(this.handleError<PC[]>('searchCharacters',[]))
    );
  }
  
  /**
    Handle HTTP operation that failed. 
    Let the app continue. 
    @param operation - name of the operation that failed
    @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to a remote logging infrastructure
      console.error(error); //logging to console in the meantime
      
      //TODO: better job of trasnsforming error for user consumption
      this.log(`${operation} failed: ${error.message}`); //sending base error message in the meantime
      
      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
  
    }
  }
}
