import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoReadAllComponent } from './departamento-read-all.component';

describe('DepartamentoReadAllComponent', () => {
  let component: DepartamentoReadAllComponent;
  let fixture: ComponentFixture<DepartamentoReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
