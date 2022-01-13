import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-block',
  template: `
    <div fxLayoutAlign="flex-start center">
      <app-avatar [url]="image" [size]="20"></app-avatar>
      <p>{{ firstName }} {{ lastName }}</p>
    </div>
  `,
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {
  @Input() image: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() reversed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
