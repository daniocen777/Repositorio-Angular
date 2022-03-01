import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.css']
})
export class FixedComponent implements OnInit {
  public sidebarColor: string = "white";
  public sidebarActiveColor: string = "danger";

  public state: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  changeSidebarColor(color: string) {
    var sidebar = <HTMLElement>document.querySelector('.sidebar');

    this.sidebarColor = color;
    if (sidebar != undefined) {
      sidebar.setAttribute('data-color', color);
    }
  }
  changeSidebarActiveColor(color: string) {
    var sidebar = <HTMLElement>document.querySelector('.sidebar');
    this.sidebarActiveColor = color;
    if (sidebar != undefined) {
      sidebar.setAttribute('data-active-color', color);
    }
  }
}
