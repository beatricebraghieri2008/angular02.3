import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeResponse, PokemonInType, PokemonDetails } from './models/pokemon.models';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Prende le categorie
  getTypes(): Observable<TypeResponse> {
    return this.http.get<TypeResponse>(`${this.baseUrl}/type`);
  }

  // Prende i pokemon di una categoria
  getPokemonByType(url: string): Observable<PokemonInType> {
    return this.http.get<PokemonInType>(url);
  }

  // Prende i dettagli di un singolo pokemon
  getDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}