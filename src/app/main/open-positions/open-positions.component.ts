import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import Position from './position';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.css'],
})
export class OpenPositionsComponent implements OnInit {
  recruiter = true;
  public readonly positionsTableColumns: Array<PoTableColumn> = [
    {
      property: 'title',
      label: 'Titulo',
    },
    {
      property: 'description',
      label: 'Descrição',
      type: 'string',
    },
    {
      property: 'numberOfCandidates',
      label: 'Numero de inscritos',
      type: 'number',
    },
    {
      property: 'actions',

      label: 'Ações',
      type: 'icon',
      icons: [
        {
          action: this.delete.bind(this),
          icon: 'po-icon-delete',
          tooltip: 'Deletar',
          color: 'color-07',
          value: 'delete',
        },
        {
          action: this.apply.bind(this),
          icon: 'po-icon-plus-circle',
          tooltip: 'Candidatar-se',
          color: this.isApplyed.bind(this),
          value: 'apply',
        },
      ],
    },
  ];

  positions: Array<Position> = [
    {
      title: 'Analista de sistemas',
      description: 'Cara que desenvolve sistemas',
      numberOfCandidates: 2,
      applyed: true,
      actions: this.recruiter ? ['delete'] : ['apply'],
    },
    {
      title: 'Cara do TI',
      description: 'Pergunta se já abriu o chamado e conserta impressoras',
      numberOfCandidates: 3,
      applyed: false,
      actions: this.recruiter ? ['delete'] : ['apply'],
    },
    {
      title: 'Scrum Master',
      description: 'Guardião da agilidade do time.',
      applyed: true,
      numberOfCandidates: 0,
      actions: this.recruiter ? ['delete'] : ['apply'],
    },
    {
      title: 'Estagiário',
      description: 'Faz café',
      numberOfCandidates: 5,
      applyed: false,
      actions: this.recruiter ? ['delete'] : ['apply'],
    },
    {
      title: 'Auxiliar administrativo',
      description: 'Faz absolutamente tudo o que for necessario',
      applyed: false,
      numberOfCandidates: 10,
      actions: this.recruiter ? ['delete'] : ['apply'],
    },
  ];

  constructor() {}
  private delete(row: Position) {
    this.positions.splice(this.positions.indexOf(row), 1);
  }
  private apply(row: Position) {
    if (!row.applyed) {
      row.applyed = true;
      console.log('Inscrito!');
    }
  }
  private isApplyed(row: Position) {
    return row.applyed ? 'color-07' : 'color-10';
  }
  ngOnInit(): void {}
}
