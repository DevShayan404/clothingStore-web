import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  countryList: any;
  paramName: string | undefined;
  selectedCountry: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private service: CheckoutService
  ) {
    this.selectedCountry = 'Pakistan';
    this.activatedRoute.params.subscribe((params) => {
      this.paramName = params['name']!;
    });
    this.service.getCountries().subscribe(
      (data) => {
        this.countryList = data;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

  ngOnInit(): void {}

  validateForm: FormGroup<{
    email: FormControl<string>;
    saveEmail: FormControl<boolean>;
    country: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    address: FormControl<string>;
    appartment: FormControl<string>;
    city: FormControl<string>;
    postalCode: FormControl<string>;
    phone: FormControl<string>;
    saveLocation: FormControl<boolean>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    saveEmail: [true],
    country: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    appartment: [''],
    city: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    saveLocation: [false],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
