import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerData } from './data';
import { BannerPopupComponent } from './banner-popup/banner-popup.component';
import { DialogService, DynamicDialogRef , DynamicDialogModule } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-advertising',
  standalone: true,
  imports: [CommonModule , DynamicDialogModule , ],
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent {
  ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService){}
  get data(){
    return headerData ;
  }

  show(){
    this.ref = this.dialogService.open(BannerPopupComponent, {
      width: '58vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
}
