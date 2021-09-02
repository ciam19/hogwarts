import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ICharacter } from 'src/app/core/models/character-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }


  Getcharacters(id__house: string): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(`${environment.api.url}characters/house/${id__house}`);
  }

}
