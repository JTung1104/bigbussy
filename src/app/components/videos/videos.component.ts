import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafePipe } from '../../pipes/safe.pipe';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  views: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, RouterModule, SafePipe],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  activeVideoId: string | null = null;

  videos: Video[] = [
    {
      id: 'YOUR_VIDEO_ID_1',
      title: 'My Latest Performance',
      description: 'Check out my latest go-go dancing performance!',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_1/maxresdefault.jpg',
      date: '2 days ago',
      views: '1.2K'
    },
    {
      id: 'YOUR_VIDEO_ID_2',
      title: 'Coding with Style',
      description: 'Watch me code while serving looks!',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg',
      date: '1 week ago',
      views: '856'
    },
    {
      id: 'YOUR_VIDEO_ID_3',
      title: 'Flushing Adventures',
      description: 'Exploring my hometown of Flushing, Queens!',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg',
      date: '2 weeks ago',
      views: '2.1K'
    }
  ];

  getVideoUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  playVideo(videoId: string): void {
    this.activeVideoId = videoId;
  }

  isVideoActive(videoId: string): boolean {
    return this.activeVideoId === videoId;
  }
}
