import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPresentationImgComponent } from './header-presentation-img.component';

describe('HeaderPresentationImgComponent', () => {
  let component: HeaderPresentationImgComponent;
  let fixture: ComponentFixture<HeaderPresentationImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPresentationImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderPresentationImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
