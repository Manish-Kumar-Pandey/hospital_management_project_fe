import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDash } from './doc-dash';

describe('DocDash', () => {
  let component: DocDash;
  let fixture: ComponentFixture<DocDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
