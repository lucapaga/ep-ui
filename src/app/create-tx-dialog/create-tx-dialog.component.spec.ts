import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTxDialogComponent } from './create-tx-dialog.component';

describe('CreateTxDialogComponent', () => {
  let component: CreateTxDialogComponent;
  let fixture: ComponentFixture<CreateTxDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTxDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
