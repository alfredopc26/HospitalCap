import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTriageComponent } from './new-triage.component';

describe('NewTriageComponent', () => {
  let component: NewTriageComponent;
  let fixture: ComponentFixture<NewTriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
