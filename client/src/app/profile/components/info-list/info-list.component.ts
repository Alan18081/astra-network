import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {
  @Input() title: string;
  @Input() list: string[];
  constructor() { }

  ngOnInit() {
  }

}
