import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionnageComponent } from './visionnage.component';

describe('VisionnageComponent', () => {
  let component: VisionnageComponent;
  let fixture: ComponentFixture<VisionnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
