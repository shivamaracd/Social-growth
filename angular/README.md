# SocialGrowth - Social Media Growth Services Landing Page

A modern, responsive landing page built with **Angular 14** for a social media growth services business. This platform helps individuals, influencers, and businesses grow their presence on YouTube, Facebook, and Instagram.

## 🚀 Features

### Landing Page Sections
1. **Responsive Navbar** - Smooth navigation with mobile-friendly hamburger menu
2. **Carousel Banner** - 3 rotating banners showcasing YouTube, Facebook, and Instagram services
3. **Services Section** - Detailed overview of growth solutions with feature lists
4. **Achievements** - Display impressive metrics and statistics
5. **Vision & Mission** - Company values and core principles
6. **Pricing Plans** - Transparent pricing with platform-specific packages
7. **Footer** - Comprehensive footer with services, quick links, and contact info

### Additional Pages
- **Registration Page** - Beautiful form with validation
- **Login Page** - Secure login with social media options

## 🛠️ Technology Stack

- **Framework:** Angular 14
- **Styling:** Bootstrap 5.3, SCSS
- **Icons:** Bootstrap Icons
- **Routing:** Angular Router
- **Forms:** Reactive Forms with validation
- **Animations:** CSS animations and transitions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Angular CLI

```bash
npm install -g @angular/cli@14
```

## 🔧 Installation

1. **Clone or navigate to the project directory**
```bash
cd as
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
# or
ng serve
```

4. **Open your browser**
Navigate to `http://localhost:4200/`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/              # Navigation bar
│   │   ├── carousel/            # Hero carousel banners
│   │   ├── services/            # Services showcase
│   │   ├── achievements/        # Metrics & stats
│   │   ├── vision-mission/      # Company vision & mission
│   │   ├── pricing/             # Pricing plans
│   │   ├── footer/              # Footer section
│   │   ├── home/                # Home page container
│   │   ├── register/            # Registration form
│   │   └── login/               # Login form
│   ├── app-routing.module.ts    # Route configuration
│   ├── app.module.ts            # Main module
│   └── app.component.*          # Root component
├── assets/                      # Static assets
├── styles.scss                  # Global styles
└── index.html                   # Main HTML file
```

## 🎨 Features Breakdown

### Navbar
- Fixed position with scroll effects
- Smooth scroll to sections
- Mobile responsive with hamburger menu
- Active link highlighting

### Carousel
- Auto-rotating slides (5-second interval)
- Manual navigation with arrows
- Dot indicators
- Platform-specific gradients (YouTube red, Facebook blue, Instagram gradient)

### Services
- Card-based layout
- Hover animations
- Feature lists for each platform
- "Why Choose Us" subsection

### Achievements
- Gradient background with glassmorphism effects
- Animated statistics cards
- Additional trust indicators

### Vision & Mission
- Dual card layout
- Core values showcase
- Call-to-action section

### Pricing
- Platform selector tabs
- Three-tier pricing for each platform
- "Most Popular" badge
- FAQ section
- Money-back guarantee banner

### Forms (Register/Login)
- Reactive forms with validation
- Password visibility toggle
- Real-time error messages
- Loading states
- Social login options (UI only)

## 🎯 Business Logic Flow

1. User visits landing page → sees promotional banners
2. User explores services and pricing
3. Clicks "Register" to create account
4. Completes registration with validation
5. Can log in to access dashboard (simulated)
6. Service delivery starts after payment (future enhancement)

## 🔮 Future Enhancements

- [ ] Payment Gateway Integration (Stripe/PayPal)
- [ ] Live Chat Support Widget
- [ ] Dynamic Pricing via API
- [ ] Customer Testimonials Section
- [ ] Referral and Loyalty Program
- [ ] User Dashboard
- [ ] Order Tracking System
- [ ] Admin Panel
- [ ] Email Notifications
- [ ] Analytics Integration

## 🌐 Build for Production

```bash
npm run build
# or
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Color Palette

- **Primary:** #6366f1 (Indigo)
- **Secondary:** #ec4899 (Pink)
- **Success:** #10b981 (Green)
- **YouTube:** #ff0000 (Red)
- **Facebook:** #1877f2 (Blue)
- **Instagram:** Gradient (Orange to Purple)

## 📝 Key Components

### Home Component
Container for all landing page sections

### Navbar Component
- Scroll-based styling
- Section navigation with smooth scroll
- Mobile menu toggle

### Carousel Component
- Auto-play functionality
- Manual controls
- Platform-specific theming

### Services Component
- Service cards with hover effects
- Feature lists
- Trust indicators

### Achievements Component
- Statistical counters
- Glassmorphism cards
- Trust badges

### Vision-Mission Component
- Dual card layout
- Core values grid
- CTA section

### Pricing Component
- Platform tabs
- Tiered pricing cards
- FAQ accordion
- Guarantee section

### Register Component
- Form validation
- Password strength check
- Terms acceptance

### Login Component
- Email/password authentication
- Remember me option
- Social login UI

## 🔐 Form Validation

### Registration Form
- Full Name (min 3 characters)
- Email (valid format)
- Phone (10-15 digits)
- Password (min 8 characters)
- Confirm Password (must match)
- Terms agreement (required)

### Login Form
- Email (valid format)
- Password (required)
- Remember Me (optional)

## 🚀 Deployment

The application can be deployed to various platforms:

### Netlify
```bash
ng build --configuration production
# Deploy the dist/ folder
```

### Vercel
```bash
vercel --prod
```

### Firebase Hosting
```bash
ng build --configuration production
firebase deploy
```

## 📞 Contact & Support

For any questions or support regarding this project:
- **Email:** support@socialgrowth.com
- **Phone:** +1 (555) 123-4567

## 📄 License

This project is created for educational and business purposes.

## 👨‍💻 Development Notes

- All components use Angular best practices
- SCSS follows BEM methodology where applicable
- Responsive design uses Bootstrap grid system
- Custom animations for enhanced UX
- Accessibility considerations included

## 🎓 Learning Resources

- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

**Built with ❤️ using Angular 14**
