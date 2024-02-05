import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { unitData } from './unit-data';
import { AllUnitsService } from 'src/app/@core/@services/all-units.service';
import { Router } from '@angular/router';
import { AttachmentList, GlobalResponse, IUnit } from 'src/app/@shared/model/units/units.interface';

@Component({
  selector: 'app-view-requests',
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.scss'],
})
export class ViewRequestsComponent implements OnInit {
  unit!: IUnit;
  attachment!: AttachmentList[]
  response!: GlobalResponse<IUnit>
  radioForm!: FormGroup;

  constructor(private _api: AllUnitsService, private router: Router) {
    this.initFormGroup();
    // console.log(this.radioForm.value);
    // console.log(this.unitById());
  }

  ngOnInit(): void {
    this.unitById()
  }

  initFormGroup() {
    this.radioForm = new FormGroup({
      accept: new FormControl(),
      decline: new FormControl(),
    });
  }

  unitById() {
    this._api.getUnitById('1000000244').subscribe((res) => {
      this.unit = res.data;
      this.attachment = res.attachmentsList
      this.response = res
      console.log(res);

    });
  }
  route() {
    this.router.navigate(['home/units']);
  }

  get card() {
    return unitData;
  }
}
