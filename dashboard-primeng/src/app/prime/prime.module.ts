import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  exports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    PanelMenuModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputNumberModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ListboxModule
  ]
})
export class PrimeModule { }
