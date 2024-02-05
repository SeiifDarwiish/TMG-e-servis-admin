import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerData } from './data';
import { HeaderPopupComponent } from './header-popup/header-popup.component';
import { DialogService, DynamicDialogRef , DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule , DynamicDialogModule],
})
export class HeaderComponent {
  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService) {}
  get data() {
    return headerData;
  }
  show() {
    this.ref = this.dialogService.open(HeaderPopupComponent, {
      width: '58vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
}
