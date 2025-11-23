import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.scss']
})
export class VisionMissionComponent {
  vision = {
    title: 'Our Vision',
    description: 'To become the most trusted and result-oriented social media growth partner globally, empowering creators, influencers, and businesses to achieve their digital dreams.',
    icon: 'bi-eye-fill'
  };

  mission = {
    title: 'Our Mission',
    description: 'To deliver high-quality, transparent, and affordable digital growth solutions that help our clients build authentic communities and achieve sustainable success on social media platforms.',
    icon: 'bi-rocket-takeoff-fill'
  };

  values = [
    {
      icon: 'bi-transparency',
      title: 'Transparency',
      description: 'Clear pricing and honest communication in every interaction'
    },
    {
      icon: 'bi-award-fill',
      title: 'Quality',
      description: 'Premium services that deliver real, measurable results'
    },
    {
      icon: 'bi-people-fill',
      title: 'Customer First',
      description: 'Your success is our top priority, always'
    },
    {
      icon: 'bi-shield-check',
      title: 'Integrity',
      description: 'Ethical practices that comply with platform guidelines'
    }
  ];

  scrollToPricing() {
    const element = document.getElementById('pricing');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
