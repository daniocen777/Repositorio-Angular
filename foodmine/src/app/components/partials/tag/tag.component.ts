import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tags?: Tag[];

  constructor(private _foodService: FoodService) {
    this.tags = this._foodService.getAllTags();
  }

  ngOnInit(): void {
  }

}
