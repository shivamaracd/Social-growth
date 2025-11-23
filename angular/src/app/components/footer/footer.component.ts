import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    { name: 'YouTube Growth', link: '#' },
    { name: 'Facebook Marketing', link: '#' },
    { name: 'Instagram Boost', link: '#' },
    { name: 'Social Media Strategy', link: '#' },
    { name: 'Analytics & Reports', link: '#' }
  ];

  quickLinks = [
    { name: 'About Us', action: 'about' },
    { name: 'Vision & Mission', action: 'vision-mission' },
    { name: 'Pricing', action: 'pricing' },
    { name: 'FAQ', link: '#' },
    { name: 'Blog', link: '#' }
  ];

  contactInfo = {
    address: '123 Digital Street, Tech City, TC 12345',
    phone: '+1 (555) 123-4567',
    email: 'support@socialgrowth.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
  };

  socialLinks = [
    { icon: 'bi-facebook', link: 'https://facebook.com', label: 'Facebook' },
    { icon: 'bi-twitter', link: 'https://twitter.com', label: 'Twitter' },
    { icon: 'bi-instagram', link: 'https://instagram.com', label: 'Instagram' },
    { icon: 'bi-linkedin', link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'bi-youtube', link: 'https://youtube.com', label: 'YouTube' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
