import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accepted-friendship',
  templateUrl: './accepted-friendship.component.html',
  styleUrls: ['./accepted-friendship.component.scss']
})
export class AcceptedFriendshipComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() avatar: string;

  constructor() { }

  ngOnInit() {
  }

}
