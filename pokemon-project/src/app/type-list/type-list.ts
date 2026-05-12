import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon'; 
import { TypeResponse } from '../models/pokemon.models';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.css'
})
export class TypeListComponent implements OnInit {
  types: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getTypes().subscribe((data: TypeResponse) => {
      // Prendiamo solo i primi 6 tipi per non fare una lista infinita
      this.types = data.results.slice(0, 6);
    });
  }
}