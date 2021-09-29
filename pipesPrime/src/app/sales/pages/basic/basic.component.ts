import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {
  nameLower: string = 'danicode';
  nameUpper: string = 'DANICODE';
  name: string = 'danIcoDe';

  constructor() { }

  ngOnInit(): void {
  }

}
