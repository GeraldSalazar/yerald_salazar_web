import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoSummaryComponent } from './contact-info-summary.component';

describe('ContactInfoSummaryComponent', () => {
  let component: ContactInfoSummaryComponent;
  let fixture: ComponentFixture<ContactInfoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
