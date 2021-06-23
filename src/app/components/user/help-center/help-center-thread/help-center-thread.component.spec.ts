import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterThreadComponent } from './help-center-thread.component';

describe('HelpCenterThreadComponent', () => {
  let component: HelpCenterThreadComponent;
  let fixture: ComponentFixture<HelpCenterThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
