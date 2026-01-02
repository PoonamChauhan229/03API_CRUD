import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addform } from './addform';

describe('Addform', () => {
  let component: Addform;
  let fixture: ComponentFixture<Addform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
