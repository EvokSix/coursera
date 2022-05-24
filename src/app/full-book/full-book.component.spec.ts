import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBookComponent } from './full-book.component';

describe('FullBookComponent', () => {
  let component: FullBookComponent;
  let fixture: ComponentFixture<FullBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
