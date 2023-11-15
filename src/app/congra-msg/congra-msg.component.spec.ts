import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongraMsgComponent } from './congra-msg.component';

describe('CongraMsgComponent', () => {
  let component: CongraMsgComponent;
  let fixture: ComponentFixture<CongraMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongraMsgComponent]
    });
    fixture = TestBed.createComponent(CongraMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
