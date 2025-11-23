import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  platform: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  slides: Slide[] = [
    {
      title: 'Grow Your YouTube Channel',
      subtitle: 'Boost Your Presence',
      description: 'Get genuine subscribers, likes, and watch-time to accelerate your channel growth and reach monetization goals faster.',
      icon: 'bi-youtube',
      gradient: 'youtube',
      platform: 'YouTube'
    },
    {
      title: 'Expand Your Facebook Reach',
      subtitle: 'Build Your Community',
      description: 'Increase page likes and followers to establish credibility and expand your business or personal brand on Facebook.',
      icon: 'bi-facebook',
      gradient: 'facebook',
      platform: 'Facebook'
    },
    {
      title: 'Instagram Growth Made Easy',
      subtitle: 'Engage Your Audience',
      description: 'Gain real followers and boost engagement to transform your Instagram profile into a powerful marketing tool.',
      icon: 'bi-instagram',
      gradient: 'instagram',
      platform: 'Instagram'
    }
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoplay();
    this.startAutoplay();
  }
}
