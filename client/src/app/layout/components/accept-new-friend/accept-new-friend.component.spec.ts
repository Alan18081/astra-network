import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptNewFriendComponent } from './accept-new-friend.component';

describe('AcceptNewFriendComponent', () => {
  let component: AcceptNewFriendComponent;
  let fixture: ComponentFixture<AcceptNewFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptNewFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptNewFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
