import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensaoUpdateComponent } from './extensao-update.component';

describe('ExtensaoUpdateComponent', () => {
  let component: ExtensaoUpdateComponent;
  let fixture: ComponentFixture<ExtensaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensaoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
