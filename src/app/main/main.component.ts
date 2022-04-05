import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  logo = '../../assets/totvs-logo.jpg';

  constructor(private router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Vagas disponíveis',
      action: () => this.router.navigate(['main/positions']),
    },
    {
      label: 'Cadastro de vaga',
      action: () => this.router.navigate(['main/newposition']),
    },
    { label: 'Logout', action: () => this.router.navigate(['home']) },
  ];

  ngOnInit(): void {}

  private onClick() {
    alert('Clicked in menu item');
  }
}
