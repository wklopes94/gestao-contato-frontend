import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensaoReaderComponent } from './extensao-reader.component';

describe('ExtensaoReaderComponent', () => {
  let component: ExtensaoReaderComponent;
  let fixture: ComponentFixture<ExtensaoReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensaoReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensaoReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
