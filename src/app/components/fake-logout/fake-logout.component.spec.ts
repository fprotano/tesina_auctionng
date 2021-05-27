import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoutComponent } from './fake-logout.component';

describe('FakeLogoutComponent', () => {
  let component: FakeLogoutComponent;
  let fixture: ComponentFixture<FakeLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
