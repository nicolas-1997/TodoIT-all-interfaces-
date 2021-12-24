import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeViajesComponent } from './historial-de-viajes.component';

describe('HistorialDeViajesComponent', () => {
  let component: HistorialDeViajesComponent;
  let fixture: ComponentFixture<HistorialDeViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialDeViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDeViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
