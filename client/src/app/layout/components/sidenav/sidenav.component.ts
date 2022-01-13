import { Component, OnInit } from '@angular/core';

export interface INavItem {
  path: string;
  caption: string;
  icon: string;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  nav: INavItem[] = [
    {
      path: '/friends',
      caption: 'Friends',
      icon: 'users'
    },
    {
      path: '/chats',
      caption: 'Chats',
      icon: 'chats'
    },
    {
      path: '/news',
      caption: 'News',
      icon: 'news'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
