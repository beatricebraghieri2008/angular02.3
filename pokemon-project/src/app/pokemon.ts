import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeResponse, PokemonInType, PokemonDetails } from './models/pokemon.models';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<TypeResponse> {
    return this.http.get<TypeResponse>(`${this.baseUrl}/type`);
  }

  getPokemonByType(url: string): Observable<PokemonInType> {
    return this.http.get<PokemonInType>(url);
  }

  getDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}