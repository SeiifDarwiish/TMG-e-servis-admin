import { DialogService } from 'primeng/dynamicdialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './@block/@root/app.component';
import { FooterComponent } from './@block/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationPipe } from './@shared/error/_pipes/validation.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import icons from 'src/assets/icons';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [AppComponent, FooterComponent, ValidationPipe,],
  providers: [DialogService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RadioButtonModule,
  ],
})
export class AppModule {
  constructor(iconRegister: SvgIconRegistryService) {
    icons.forEach((icon) => {
      iconRegister.loadSvg(icon.url, icon.name);
    });
  }
}
