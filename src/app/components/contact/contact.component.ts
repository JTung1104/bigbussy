import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submissionSuccess = false;
  submissionError = false;
  errorMessage = '';

  socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com/2_dolla_heaux', icon: 'instagram' },
    { platform: 'YouTube', url: 'https://youtube.com/@2_dolla_heaux', icon: 'youtube' },
    { platform: 'Twitter', url: 'https://twitter.com/bigbussy', icon: 'twitter' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submissionError = false;
      this.errorMessage = '';

      const emailData: EmailData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        subject: this.contactForm.get('subject')?.value,
        message: this.contactForm.get('message')?.value
      };

      // TODO: Replace with your actual backend endpoint
      this.http.post('YOUR_BACKEND_ENDPOINT', emailData).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submissionSuccess = true;
          this.contactForm.reset();
          
          setTimeout(() => {
            this.submissionSuccess = false;
          }, 3000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submissionError = true;
          this.errorMessage = 'Failed to send message. Please try again later.';
          console.error('Error sending email:', error);
        }
      });
    }
  }
}
