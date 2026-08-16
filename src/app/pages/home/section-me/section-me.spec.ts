import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMe } from './section-me';

describe('SectionMe', () => {
  let component: SectionMe;
  let fixture: ComponentFixture<SectionMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMe],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
