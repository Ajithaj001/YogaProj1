import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfomanceDetailsComponent } from './perfomance-details.component';

describe('PerfomanceDetailsComponent', () => {
  let component: PerfomanceDetailsComponent;
  let fixture: ComponentFixture<PerfomanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfomanceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfomanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
