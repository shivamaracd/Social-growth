import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'YouTube Growth',
      description: 'Accelerate your YouTube channel with genuine subscribers, views, and watch-time to reach monetization faster.',
      icon: 'bi-youtube',
      color: 'youtube',
      features: [
        'Real Subscribers',
        'Organic Views',
        'Watch-time Boost',
        'Likes & Comments',
        'Channel Optimization'
      ]
    },
    {
      title: 'Facebook Marketing',
      description: 'Expand your Facebook presence with authentic page likes and followers to build credibility and trust.',
      icon: 'bi-facebook',
      color: 'facebook',
      features: [
        'Page Likes',
        'Profile Followers',
        'Post Engagement',
        'Community Growth',
        'Business Credibility'
      ]
    },
    {
      title: 'Instagram Engagement',
      description: 'Transform your Instagram profile with real followers and engagement to unlock influencer opportunities.',
      icon: 'bi-instagram',
      color: 'instagram',
      features: [
        'Genuine Followers',
        'Story Views',
        'Post Likes',
        'Comment Engagement',
        'Profile Visits'
      ]
    }
  ];
}
