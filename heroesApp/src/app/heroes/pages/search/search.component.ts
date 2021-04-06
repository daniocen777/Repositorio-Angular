import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  heroes: Heroe[] = [];
  heroSelected: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searching() {
    this.heroesService
      .getSuggestions(this.searchTerm.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.searchTerm = heroe.superhero;
    this.heroesService
      .getHeroId(heroe.id!)
      .subscribe((heroe) => (this.heroSelected = heroe));
  }
}
