import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlingComponent } from './event-handling.component';

describe('EventHandlingComponent', () => {
  let component: EventHandlingComponent;
  let fixture: ComponentFixture<EventHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventHandlingComponent]
    });
    fixture = TestBed.createComponent(EventHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
