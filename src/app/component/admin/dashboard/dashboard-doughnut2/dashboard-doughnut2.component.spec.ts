import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDoughnut2Component } from './dashboard-doughnut2.component';

describe('DashboardDoughnut2Component', () => {
  let component: DashboardDoughnut2Component;
  let fixture: ComponentFixture<DashboardDoughnut2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDoughnut2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDoughnut2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
