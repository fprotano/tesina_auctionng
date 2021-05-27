import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeInsertComponent } from './fake-insert.component';

describe('FakeInsertComponent', () => {
  let component: FakeInsertComponent;
  let fixture: ComponentFixture<FakeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
