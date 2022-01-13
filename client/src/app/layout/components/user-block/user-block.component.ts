import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
