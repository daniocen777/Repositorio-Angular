import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  food!: Food;

  constructor(private _activatedRoute: ActivatedRoute, private _foodService: FoodService,
    private router: Router) {
    _activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = this._foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart() {
    console.log("Add")
  }

}
