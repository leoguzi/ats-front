import { PositionsService } from './positions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { Position, Positions } from './position';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.css'],
})
export class OpenPositionsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  positions: Positions = [];
  isTableLoading = true;
  recruiter = true;
  modalData = { title: '', description: '' };

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
      label: 'Inscritos',
      type: 'string',
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
          action: this.openModal.bind(this),
          icon: 'po-icon-edit',
          tooltip: 'Editar',

          value: 'edit',
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

  constructor(private positionsService: PositionsService) {}

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

  private openModal(row: Position) {
    this.modalData = {
      title: row.title,
      description: row.description,
    };
    this.poModal.open();
  }
  ngOnInit(): void {
    this.positionsService.getPositions().subscribe((positions: Positions) => {
      this.positions = positions.map((position) => {
        return {
          ...position,
          actions: this.recruiter ? ['delete', 'edit'] : ['apply'],
        };
      });
      this.isTableLoading = false;
    });
  }
}
