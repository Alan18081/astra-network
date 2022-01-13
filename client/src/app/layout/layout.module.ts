import {NgModule} from '@angular/core';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './containers/header/header.component';
import {CoreModule} from '../core/core.module';
import {CommonModule} from '@angular/common';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {SharedModule} from '../shared/shared.module';
import { AcceptedFriendshipComponent } from './components/accepted-friendship/accepted-friendship.component';
import { AcceptNewFriendComponent } from './components/accept-new-friend/accept-new-friend.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    UserBlockComponent,
    NotificationsComponent,
    SidenavComponent,
    AcceptedFriendshipComponent,
    AcceptNewFriendComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
