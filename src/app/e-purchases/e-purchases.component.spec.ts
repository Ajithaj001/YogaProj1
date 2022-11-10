import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPurchasesComponent } from './e-purchases.component';

describe('EPurchasesComponent', () => {
  let component: EPurchasesComponent;
  let fixture: ComponentFixture<EPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
