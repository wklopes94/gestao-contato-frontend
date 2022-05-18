import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensaoDeleteComponent } from './extensao-delete.component';

describe('ExtensaoDeleteComponent', () => {
  let component: ExtensaoDeleteComponent;
  let fixture: ComponentFixture<ExtensaoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensaoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
