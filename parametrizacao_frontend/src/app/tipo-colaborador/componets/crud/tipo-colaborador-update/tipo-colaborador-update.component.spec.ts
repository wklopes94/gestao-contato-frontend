import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoColaboradorUpdateComponent } from './tipo-colaborador-update.component';

describe('TipoColaboradorUpdateComponent', () => {
  let component: TipoColaboradorUpdateComponent;
  let fixture: ComponentFixture<TipoColaboradorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoColaboradorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoColaboradorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
