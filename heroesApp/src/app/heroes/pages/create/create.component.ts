import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class CreateComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroId(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }

  save() {
    if (this.heroe.superhero.trim().length === 0) return;
    if (this.heroe.id) {
      /* Editar */
      this.heroesService.edit(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes']);
      });
    } else {
      /* Crear */
      this.heroesService.save(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/edit', heroe.id]);
      });
    }
  }

  delete() {
    this.heroesService.delete(this.heroe.id!).subscribe((resp) => {
      this.router.navigate(['/heroes']);
    });
  }
}
