import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovcalendarComponent } from './novcalendar.component';

describe('NovcalendarComponent', () => {
  let component: NovcalendarComponent;
  let fixture: ComponentFixture<NovcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
