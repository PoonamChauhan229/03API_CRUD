import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipelist } from './recipelist';

describe('Recipelist', () => {
  let component: Recipelist;
  let fixture: ComponentFixture<Recipelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recipelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recipelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
