import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroEquipoComponent } from './retiro-equipo.component';

describe('RetiroEquipoComponent', () => {
  let component: RetiroEquipoComponent;
  let fixture: ComponentFixture<RetiroEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
