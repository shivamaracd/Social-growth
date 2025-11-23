import { Component, OnInit } from '@angular/core';

interface Achievement {
  icon: string;
  count: string;
  label: string;
  suffix?: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [
    {
      icon: 'bi-people-fill',
      count: '10,000',
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      icon: 'bi-graph-up-arrow',
      count: '50,000',
      label: 'Successful Campaigns',
      suffix: '+'
    },
    {
      icon: 'bi-heart-fill',
      count: '5M',
      label: 'Followers Delivered',
      suffix: '+'
    },
    {
      icon: 'bi-headset',
      count: '24/7',
      label: 'Customer Support',
      suffix: ''
    },
    {
      icon: 'bi-star-fill',
      count: '98',
      label: 'Satisfaction Rate',
      suffix: '%'
    }
  ];

  ngOnInit() {
    this.animateCounters();
  }

  animateCounters() {
    // Optional: Add counter animation logic here
  }
}
