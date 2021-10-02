import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  exports: [SidebarModule, ButtonModule, MenubarModule, CardModule, PanelMenuModule, AvatarModule, AvatarGroupModule]
})
export class PrimeModule { }
