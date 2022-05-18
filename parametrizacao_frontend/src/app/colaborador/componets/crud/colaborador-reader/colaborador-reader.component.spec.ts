import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorReaderComponent } from './colaborador-reader.component';

describe('ColaboradorReaderComponent', () => {
  let component: ColaboradorReaderComponent;
  let fixture: ComponentFixture<ColaboradorReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
