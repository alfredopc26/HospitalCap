import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDoctoresComponent } from './gestion-doctores.component';

describe('GestionDoctoresComponent', () => {
  let component: GestionDoctoresComponent;
  let fixture: ComponentFixture<GestionDoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
