import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensaoCreateComponent } from './extensao-create.component';

describe('ExtensaoCreateComponent', () => {
  let component: ExtensaoCreateComponent;
  let fixture: ComponentFixture<ExtensaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
