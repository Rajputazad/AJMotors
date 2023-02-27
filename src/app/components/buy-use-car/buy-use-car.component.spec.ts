import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyUseCarComponent } from './buy-use-car.component';

describe('BuyUseCarComponent', () => {
  let component: BuyUseCarComponent;
  let fixture: ComponentFixture<BuyUseCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyUseCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyUseCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
