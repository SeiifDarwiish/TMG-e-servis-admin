import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { sidebarData } from './data/data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[NgFor, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  get sideData() {
    return sidebarData;
  }
}
