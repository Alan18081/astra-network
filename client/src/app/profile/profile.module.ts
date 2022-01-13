import {NgModule} from '@angular/core';
import { ProfileComponent } from './containers/profile/profile.component';
import {LayoutModule} from '../layout/layout.module';
import {ProfileRoutesModule} from './profile-routes.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsItemComponent } from './components/friends-item/friends-item.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileInfoEditComponent } from './containers/profile-info-edit/profile-info-edit.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NotesModule } from '../notes/notes.module';

@NgModule({
  imports: [
    CoreModule,
    LayoutModule,
    ProfileRoutesModule,
    SharedModule,
    ReactiveFormsModule,
    NotesModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileAboutComponent,
    InfoItemComponent,
    InfoListComponent,
    InfoTextComponent,
    FriendsListComponent,
    FriendsItemComponent,
    ProfileEditComponent,
    ProfileInfoEditComponent,
    ChangePasswordComponent
  ],
  providers: []
})
export class ProfileModule {}
