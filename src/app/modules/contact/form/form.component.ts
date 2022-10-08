import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailContactFormService } from '../services/email-contact-form.service';
import { FormEmailData } from './form-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  loadingFlag: boolean = false;
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(private emailContactForm: EmailContactFormService) {}
  submitEmail(formData: FormEmailData) {
    this.loadingFlag = true;
    this.contactForm.reset();
    this.emailContactForm.postEmailToAPI(formData).subscribe({
      next: res => {
        this.loadingFlag = false;
        if (res) {
          location.href = 'https://mailthis.to/confirm';
        }
      },
      error: e => {
        this.loadingFlag = false;
        console.log(e);
      },
    });
  }
}
