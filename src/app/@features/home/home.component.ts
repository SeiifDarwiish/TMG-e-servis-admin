import { Component } from '@angular/core';
import { SidebarComponent } from "../../@block/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [SidebarComponent,RouterOutlet]
})
export class HomeComponent {

}
