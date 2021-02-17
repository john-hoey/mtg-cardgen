import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgenComponent } from './cardgen.component';

describe('CardgenComponent', () => {
  let component: CardgenComponent;
  let fixture: ComponentFixture<CardgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
