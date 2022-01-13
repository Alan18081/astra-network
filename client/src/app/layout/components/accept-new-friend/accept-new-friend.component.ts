import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-accept-new-friend',
  templateUrl: './accept-new-friend.component.html',
  styleUrls: ['./accept-new-friend.component.scss']
})
export class AcceptNewFriendComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() avatar: string;
  @Output() choosedFriend = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  acceptFriend() {
    this.choosedFriend.emit(true);
  }
  rejectFriend() {
    this.choosedFriend.emit(false);
  }

}
