import { Component } from '@angular/core';

interface PricingPlan {
  platform: string;
  icon: string;
  color: string;
  plans: Plan[];
}

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  selectedPlatform = 'youtube';

  pricingData: PricingPlan[] = [
    {
      platform: 'youtube',
      icon: 'bi-youtube',
      color: '#ff0000',
      plans: [
        {
          name: 'Starter',
          price: '$29',
          features: [
            '500 Subscribers',
            '2,000 Views',
            '100 Likes',
            '50 Watch Hours',
            'Basic Support'
          ]
        },
        {
          name: 'Growth',
          price: '$79',
          features: [
            '2,000 Subscribers',
            '10,000 Views',
            '500 Likes',
            '200 Watch Hours',
            'Priority Support',
            'Analytics Report'
          ],
          popular: true
        },
        {
          name: 'Professional',
          price: '$149',
          features: [
            '5,000 Subscribers',
            '30,000 Views',
            '1,500 Likes',
            '500 Watch Hours',
            'VIP Support',
            'Detailed Analytics',
            'Monthly Consultation'
          ]
        }
      ]
    },
    {
      platform: 'facebook',
      icon: 'bi-facebook',
      color: '#1877f2',
      plans: [
        {
          name: 'Basic',
          price: '$25',
          features: [
            '1,000 Page Likes',
            '500 Followers',
            'Organic Growth',
            'Basic Support'
          ]
        },
        {
          name: 'Business',
          price: '$69',
          features: [
            '5,000 Page Likes',
            '2,500 Followers',
            'Post Engagement',
            'Priority Support',
            'Growth Strategy'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$129',
          features: [
            '15,000 Page Likes',
            '7,500 Followers',
            'Premium Engagement',
            'VIP Support',
            'Custom Strategy',
            'Monthly Reports'
          ]
        }
      ]
    },
    {
      platform: 'instagram',
      icon: 'bi-instagram',
      color: '#e4405f',
      plans: [
        {
          name: 'Starter',
          price: '$35',
          features: [
            '1,000 Followers',
            '500 Likes',
            '100 Story Views',
            'Basic Support'
          ]
        },
        {
          name: 'Influencer',
          price: '$89',
          features: [
            '5,000 Followers',
            '2,500 Likes',
            '1,000 Story Views',
            'Priority Support',
            'Hashtag Strategy'
          ],
          popular: true
        },
        {
          name: 'Celebrity',
          price: '$179',
          features: [
            '15,000 Followers',
            '7,500 Likes',
            '5,000 Story Views',
            'VIP Support',
            'Content Strategy',
            'Brand Partnerships'
          ]
        }
      ]
    }
  ];

  selectPlatform(platform: string) {
    this.selectedPlatform = platform;
  }

  getSelectedPlatformData(): PricingPlan {
    return this.pricingData.find(p => p.platform === this.selectedPlatform) || this.pricingData[0];
  }
}
