import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLisComponent } from './admin-lis.component';

describe('AdminLisComponent', () => {
  let component: AdminLisComponent;
  let fixture: ComponentFixture<AdminLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
