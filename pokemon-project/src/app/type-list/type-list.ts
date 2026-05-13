import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon';
import { TypeResponse, PokemonInType, PokemonDetails } from '../models/pokemon.models';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-list.html',
  styleUrl: './type-list.css'
})
export class TypeListComponent implements OnInit {
  types: any[] = [];
  pokemonList: any[] = []; 
  selectedPokemon: any = null; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getTypes().subscribe((data: TypeResponse) => {
        this.types = data.results.slice(0, 6);
    });
  }

  selectType(url: string) {
    this.selectedPokemon = null; 
    this.pokemonService.getPokemonByType(url).subscribe((data: PokemonInType) => {
        this.pokemonList = data.pokemon;
    });
  }

  showDetails(url: string) {
    this.pokemonService.getDetails(url).subscribe((data: PokemonDetails) => {
        this.selectedPokemon = data;
    });
  }
}