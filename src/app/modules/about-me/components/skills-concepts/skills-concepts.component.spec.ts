import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsConceptsComponent } from './skills-concepts.component';

describe('SkillsConceptsComponent', () => {
  let component: SkillsConceptsComponent;
  let fixture: ComponentFixture<SkillsConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
