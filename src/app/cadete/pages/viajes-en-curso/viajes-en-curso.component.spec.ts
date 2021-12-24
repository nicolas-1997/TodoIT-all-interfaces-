import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesEnCursoComponent } from './viajes-en-curso.component';

describe('ViajesEnCursoComponent', () => {
  let component: ViajesEnCursoComponent;
  let fixture: ComponentFixture<ViajesEnCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesEnCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesEnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
