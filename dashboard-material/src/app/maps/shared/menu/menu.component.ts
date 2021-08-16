import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Pantalla Completa', url: '/maps/fullscreen' },
    { name: 'Aumentar Vista', url: '/maps/zoon-range' },
    { name: 'Marcadores', url: '/maps/markers' },
    { name: 'Propiedades', url: '/maps/properties' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
