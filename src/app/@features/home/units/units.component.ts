import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { headerData, tableBody } from './data';
import { AllUnitsService } from 'src/app/@core/@services/all-units.service';
import { Router } from '@angular/router';
import { AttachmentList, GlobalResponse, IUnit } from 'src/app/@shared/model/units/units.interface';



interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule , DropdownModule , TableModule ],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {

  constructor( private _api:AllUnitsService , private router:Router){ }

  unit!: IUnit[];
  attachment!: AttachmentList[]
  response!: any
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.getAllUnits()
      this.cities = [
          { name: 'Status', code: 'NY' }
      ];
      // console.log(this.attachment);

  }

  getAllUnits(){
    this._api.getAllUnits().subscribe((res)=>{
      this.response = res;
      this.attachment = res.attachmentsList
      this.unit = res.data
      console.log(res);

    })
  }
  get header(){
    return headerData ;
  }

  get bodyTable(){
    return tableBody ;
  }
  route(){
    this.router.navigate(['home/units/viewRequests']);
  }
}
