import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';

  presonalData: RegisteredUser
  requestType: any = ''
  text: string=''
}

interface RegisteredUser {
name: string; // Imię
surname: string; // Nazwisko
email: string;  // E-mail
phone: string | null; // Numer telefonu
password: string; // Hasło
pet: 'dog' | 'cat' | 'other'; // Zwierzę
address: {
  city: string; // Miasto
  street: string; // Ulica
  building: string; // Numer domu
  flatNo: string | null; // Numer mieszkania
};
consents: {
  newsletter: boolean; // Zgoda na otrzymywanie wiadomości e-mail.
  ms: boolean; // Zgoda na otrzymywanie wiadomości SMS.
 }
}
