import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrrderComponent } from './detail-orrder.component';

describe('DetailOrrderComponent', () => {
  let component: DetailOrrderComponent;
  let fixture: ComponentFixture<DetailOrrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
