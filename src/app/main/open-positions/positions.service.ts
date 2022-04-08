import { Positions } from './position';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  mockData: Positions = [
    {
      title: 'Adicionei mais um',
      description: 'testando se o serviço funciona.',
      numberOfCandidates: 3,
      applyed: true,
    },
    {
      title: 'Analista de sistemas',
      description: 'Cara que desenvolve sistemas',
      numberOfCandidates: 2,
      applyed: true,
    },
    {
      title: 'Cara do TI',
      description: 'Pergunta se já abriu o chamado e conserta impressoras',
      numberOfCandidates: 3,
      applyed: false,
    },
    {
      title: 'Scrum Master',
      description: 'Guardião da agilidade do time.',
      applyed: true,
      numberOfCandidates: 0,
    },
    {
      title: 'Estagiário',
      description: 'Faz café',
      numberOfCandidates: 5,
      applyed: false,
    },
    {
      title: 'Auxiliar administrativo',
      description: 'Faz absolutamente tudo o que for necessario',
      applyed: false,
      numberOfCandidates: 10,
    },
  ];
  constructor() {}
  getPositions(): Observable<Positions> {
    return of(this.mockData).pipe(delay(1000));
  }
}
