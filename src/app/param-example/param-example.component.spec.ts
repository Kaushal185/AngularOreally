import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamExampleComponent } from './param-example.component';

describe('ParamExampleComponent', () => {
  let component: ParamExampleComponent;
  let fixture: ComponentFixture<ParamExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamExampleComponent]
    });
    fixture = TestBed.createComponent(ParamExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
