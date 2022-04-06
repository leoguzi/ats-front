import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { NewPosition } from './new-position';

@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['./new-position.component.css'],
})
export class NewPositionComponent implements OnInit {
  newPosition: NewPosition = { title: '', description: '' };

  fields: Array<PoDynamicFormField> = [
    {
      property: 'title',
      required: true,
      minLength: 4,
      maxLength: 80,
      gridColumns: 12,
      placeholder: 'Titulo da vaga',
      label: 'Título',
    },
    {
      property: 'description',
      required: true,
      minLength: 10,
      maxLength: 300,
      rows: 5,
      gridColumns: 12,
      placeholder: 'Descrição da vaga',
      label: 'Descrição',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
