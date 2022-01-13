import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedFriendshipComponent } from './accepted-friendship.component';

describe('AcceptedFriendshipComponent', () => {
  let component: AcceptedFriendshipComponent;
  let fixture: ComponentFixture<AcceptedFriendshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedFriendshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedFriendshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
