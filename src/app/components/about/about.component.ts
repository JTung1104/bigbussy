import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  socialLinks = [
    { platform: 'Twitter', url: 'https://twitter.com/bigbussy', icon: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/2_dolla_heaux', icon: 'instagram' },
    { platform: 'YouTube', url: 'https://youtube.com/@2_dolla_heaux', icon: 'youtube' }
  ];
}
