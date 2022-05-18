import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoColaboradorCreateComponent } from './tipo-colaborador-create.component';

describe('TipoColaboradorCreateComponent', () => {
  let component: TipoColaboradorCreateComponent;
  let fixture: ComponentFixture<TipoColaboradorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoColaboradorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoColaboradorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
