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

constructor(private formBuilder: FormBuilder) {

  const el = document.getElementById('name');
  console.log(el);
}


  errors = {
  name: 'Field Required',
  surname: 'Field Required',
  email: 'Field Required',
  phone: 'Minimum 9 charactes, alowed only digits and special characters: +-()',
  password: 'Minimum 8 charactes, 1 capital letter and at least one special character: @,#,$,%,^,&',
  city: 'Field Required',
  street: 'Field Required',
  building: 'Field Required'
}

  ngOnInit() {

  this.user = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: [null,Validators.pattern('^[0-9\-\+\ \)\(].{8,}$')],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[@#$%^&]).{8,}$')
      ])],
      confirmpassword: [null, Validators.compose([
        Validators.required,
      ])],
      pet: ['dog', Validators.required],
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

  this.formBuilder= JSON.parse(JSON.stringify(this.user.value).replace(/"\s+|\s+"/g,'"'));
  console.log(this.formBuilder);

 }


}



