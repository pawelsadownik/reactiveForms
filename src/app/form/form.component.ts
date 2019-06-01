import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { asTextData } from '@angular/core/src/view';
import { RegisteredUser } from '../registered-user';
import { ConstantPool } from '@angular/compiler';
import { ConfirmPasswordValidator } from './ConfirmPasswordValidator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: FormGroup;

constructor(private formBuilder: FormBuilder) {}


  pets: Array<String> = ['Dog', 'Cat', 'Other'];

  ngOnInit() {

  this.user = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9\-\+\ \)\(].{8,}$')
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[@#$%^&]).{8,}$')
      ])],
      confirmpassword: [null, Validators.compose([
        Validators.required,
      ])],
      pet: [null, Validators.required],
    address: this.formBuilder.group({
      city: [null, Validators.required],
      street: [null, Validators.required],
      building: [null, Validators.required],
      flatNo: [null]
    }),
    consents: this.formBuilder.group({
        newsletter: [false, Validators.requiredTrue],
        sms: [false]
    })
  }
  ,{
    validator: ConfirmPasswordValidator.MatchPassword
 });

}
 onSubmit({ value, valid }: { value: RegisteredUser, valid: boolean }) {
   console.log(value);
 }


}



