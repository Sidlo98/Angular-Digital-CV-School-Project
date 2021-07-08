import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  get name() {
    return this.contactForm.get('name') as FormControl;
  }
  get email() {
    return this.contactForm.get('email') as FormControl;
  }
  get company() {
    return this.contactForm.get('company') as FormControl;
  }
  get subject() {
    return this.contactForm.get('subject') as FormControl;
  }
  get message() {
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit(): void {
    if (this.contactForm.valid) console.log(this.contactForm.value);
  }
}
