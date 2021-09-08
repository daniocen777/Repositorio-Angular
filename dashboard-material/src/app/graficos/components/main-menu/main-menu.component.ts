import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Barras', url: '/graficos/barras' },
    { name: 'Barras Dobles', url: '/graficos/barras-dobles' },
    { name: 'Dona', url: '/graficos/dona' },
    { name: 'Dona Http', url: '/graficos/dona-http' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
