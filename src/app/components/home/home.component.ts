import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newsletterForm: FormGroup;
  isSubmitting = false;
  subscriptionSuccess = false;

  featuredVideos: Video[] = [
    {
      title: 'Exclusive Performance',
      description: 'Check out our latest exclusive performance video.',
      thumbnail: 'assets/images/video1.jpg',
      duration: '3:45',
      views: '1.2M',
      date: '2 days ago'
    },
    {
      title: 'Behind the Scenes',
      description: 'Get a glimpse of what happens behind the scenes.',
      thumbnail: 'assets/images/video2.jpg',
      duration: '5:20',
      views: '856K',
      date: '1 week ago'
    },
    {
      title: 'Special Interview',
      description: 'An exclusive interview with our featured artist.',
      thumbnail: 'assets/images/video3.jpg',
      duration: '8:15',
      views: '2.1M',
      date: '2 weeks ago'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  subscribeNewsletter(): void {
    if (this.newsletterForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.subscriptionSuccess = true;
        this.newsletterForm.reset();
        setTimeout(() => {
          this.subscriptionSuccess = false;
        }, 3000);
      }, 1000);
    }
  }
}
