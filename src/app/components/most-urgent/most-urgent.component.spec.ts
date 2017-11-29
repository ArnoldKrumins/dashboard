import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUrgentComponent } from './most-urgent.component';

describe('MostUrgentComponent', () => {
  let component: MostUrgentComponent;
  let fixture: ComponentFixture<MostUrgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostUrgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
