import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label:'inicio', link: ''},
    {label:'Clientes', link: '/Clientes'},
    {label:'Sobre', link: '/Sobre'},
  

  ]

}
