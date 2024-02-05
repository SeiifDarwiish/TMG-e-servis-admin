import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AllUnitsService } from 'src/app/@core/@services/all-units.service';


@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private router: Router , public api:AllUnitsService, private http: HttpClient) {
    this.initFormgroup();
  }
  initFormgroup() {
    this.loginForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else{
      this.api.postMail(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['home']);

        }
      })
    }

  }

}
