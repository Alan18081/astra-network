import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friends-item',
  templateUrl: './friends-item.component.html',
  styleUrls: ['./friends-item.component.scss']
})
export class FriendsItemComponent implements OnInit {
  @Input() name: string;
  @Input() avatar: string;
  constructor() { }

  ngOnInit() {
  }

}
