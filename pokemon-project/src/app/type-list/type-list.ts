import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon';
import { TypeResponse, PokemonInType } from '../models/pokemon.models';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-list.html',
  styleUrl: './type-list.css'
})
export class TypeListComponent implements OnInit {
  types: any[] = [];
  pokemonList: any[] = []; // Array per la lista dei pokemon
  selectedPokemon: any = null; // Per memorizzare il pokemon cliccato

showDetails(url: string) {
  this.pokemonService.getDetails(url).subscribe(data => {
    this.selectedPokemon = data;
  });
}

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    console.log("Richiedo le categorie...");
    this.pokemonService.getTypes().subscribe({
      next: (data: TypeResponse) => {
        console.log("Categorie ricevute:", data);
        this.types = data.results.slice(0, 6); // Prende i primi 6
      },
      error: (err) => console.error("Errore categorie:", err)
    });
  }

  // Metodo per caricare i pokemon di una categoria
  selectType(url: string) {
    console.log("Carico pokemon dal tipo:", url);
    this.pokemonService.getPokemonByType(url).subscribe({
      next: (data: PokemonInType) => {
        console.log("Pokemon ricevuti:", data);
        this.pokemonList = data.pokemon;
      },
      error: (err) => console.error("Errore pokemon:", err)
    });
  }
}