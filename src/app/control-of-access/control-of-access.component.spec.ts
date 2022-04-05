import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOfAccessComponent } from './control-of-access.component';

describe('ControlOfAccessComponent', () => {
  let component: ControlOfAccessComponent;
  let fixture: ComponentFixture<ControlOfAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlOfAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlOfAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
