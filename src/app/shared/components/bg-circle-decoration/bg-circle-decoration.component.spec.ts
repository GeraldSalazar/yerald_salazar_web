import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCircleDecorationComponent } from './bg-circle-decoration.component';

describe('BgCircleDecorationComponent', () => {
  let component: BgCircleDecorationComponent;
  let fixture: ComponentFixture<BgCircleDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgCircleDecorationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCircleDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
