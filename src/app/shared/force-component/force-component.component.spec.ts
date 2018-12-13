import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceComponentComponent } from './force-component.component';

describe('ForceComponentComponent', () => {
  let component: ForceComponentComponent;
  let fixture: ComponentFixture<ForceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
