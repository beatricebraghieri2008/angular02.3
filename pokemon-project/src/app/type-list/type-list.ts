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
  selectedType = '';
  selectedTypeUrl = '';
  showTypeList = false;
  showPageButton = false;
  private readonly allowedTypes = ['normal', 'ground', 'flying'];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getTypes().subscribe((data: TypeResponse) => {
      this.types = data.results.filter((type) => this.allowedTypes.includes(type.name));
    });
  }

  toggleTypeList(): void {
    this.showTypeList = !this.showTypeList;
    this.showPageButton = false;
    this.selectedType = '';
    this.pokemonList = [];
    this.selectedPokemon = null;
  }

  selectType(type: { name: string; url: string }) {
    this.selectedType = type.name;
    this.selectedTypeUrl = type.url;
    this.showPageButton = true;
    this.selectedPokemon = null;
    this.pokemonList = [];
  }

  showPokemonPage(): void {
    if (!this.selectedTypeUrl) {
      return;
    }
    this.pokemonService.getPokemonByType(this.selectedTypeUrl).subscribe((data: PokemonInType) => {
      this.pokemonList = data.pokemon;
    });
  }

  showDetails(url: string) {
    this.pokemonService.getDetails(url).subscribe((data: PokemonDetails) => {
      this.selectedPokemon = data;
    });
  }
}