import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleImgHeaderComponent } from './title-img-header.component';

describe('TitleImgHeaderComponent', () => {
  let component: TitleImgHeaderComponent;
  let fixture: ComponentFixture<TitleImgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleImgHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleImgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
