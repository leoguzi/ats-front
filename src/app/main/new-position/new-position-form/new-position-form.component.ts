import { PoDynamicFormField } from '@po-ui/ng-components';
import { Component, Input, OnInit } from '@angular/core';
import { NewPosition } from '../new-position';

@Component({
  selector: 'app-new-position-form',
  templateUrl: './new-position-form.component.html',
  styleUrls: ['./new-position-form.component.css'],
})
export class NewPositionFormComponent implements OnInit {
  @Input() newPosition: NewPosition = { title: '', description: '' };

  fields: Array<PoDynamicFormField> = [
    {
      property: 'title',
      required: true,
      minLength: 4,
      maxLength: 80,
      gridColumns: 12,
      placeholder: 'Titulo da vaga',
      label: 'Título da vaga',
    },
    {
      property: 'description',
      required: true,
      minLength: 10,
      maxLength: 300,
      rows: 5,
      gridColumns: 12,
      placeholder: 'Descrição da vaga',
      label: 'Descrição da vaga',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
