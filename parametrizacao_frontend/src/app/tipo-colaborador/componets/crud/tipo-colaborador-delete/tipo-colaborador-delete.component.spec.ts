import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoColaboradorDeleteComponent } from './tipo-colaborador-delete.component';

describe('TipoColaboradorDeleteComponent', () => {
  let component: TipoColaboradorDeleteComponent;
  let fixture: ComponentFixture<TipoColaboradorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoColaboradorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoColaboradorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
