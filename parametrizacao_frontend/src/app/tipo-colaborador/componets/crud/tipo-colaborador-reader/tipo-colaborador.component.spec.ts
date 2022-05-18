import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoColaboradorComponent } from './tipo-colaborador.component';

describe('TipoColaboradorComponent', () => {
  let component: TipoColaboradorComponent;
  let fixture: ComponentFixture<TipoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
