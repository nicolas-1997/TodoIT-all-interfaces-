import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeEnvioComponent } from './estado-de-envio.component';

describe('EstadoDeEnvioComponent', () => {
  let component: EstadoDeEnvioComponent;
  let fixture: ComponentFixture<EstadoDeEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoDeEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
