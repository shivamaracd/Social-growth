# Quick Start Guide - SocialGrowth Landing Page

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```
or
```bash
ng serve
```

### Step 3: Open Browser
Navigate to: **http://localhost:4200/**

---

## 📱 What You'll See

### Home Page (/)
- **Carousel Banner** - 3 rotating slides for YouTube, Facebook, Instagram
- **Services Section** - Detailed service offerings
- **Achievements** - Company statistics and metrics
- **Vision & Mission** - Company values
- **Pricing** - Platform-specific pricing plans
- **Footer** - Contact and navigation

### Register Page (/register)
- Complete registration form with validation
- Password strength requirements
- Terms and conditions acceptance

### Login Page (/login)
- Email and password authentication
- Remember me option
- Social login buttons (UI only)

---

## 🎨 Key Features to Test

### Navigation
- Click on navbar links to smooth scroll to sections
- Test mobile menu (resize browser to <992px)
- Click "Register" and "Login" buttons

### Carousel
- Watch auto-rotation (5 seconds)
- Click arrow buttons for manual navigation
- Click dot indicators to jump to specific slide

### Services
- Hover over service cards for animations
- View "Why Choose Us" features

### Pricing
- Click platform tabs (YouTube, Facebook, Instagram)
- Notice "Most Popular" badge on middle tier
- Read FAQ section

### Forms
- Try submitting empty register form (see validation)
- Toggle password visibility
- Test email format validation
- Try password mismatch

---

## 🔧 Development Commands

### Start Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests (if configured)
```bash
npm test
```

---

## 📂 Project Structure

```
as/
├── src/
│   ├── app/
│   │   ├── components/      # All page components
│   │   ├── app.module.ts    # Main module
│   │   └── app-routing.module.ts
│   ├── styles.scss          # Global styles
│   └── index.html
├── package.json
├── angular.json
└── README.md
```

---

## 🎯 Testing Checklist

- [ ] Homepage loads successfully
- [ ] Carousel auto-rotates
- [ ] All navigation links work
- [ ] Mobile menu toggles
- [ ] Service cards display correctly
- [ ] Pricing tabs switch platforms
- [ ] Register form validates input
- [ ] Login form validates input
- [ ] Footer links are visible
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
ng serve --port 4201
```

### Modules Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache
```bash
npm cache clean --force
npm install
```

---

## 📞 Need Help?

Check the full **README.md** for detailed documentation.

---

**Happy Coding! 🚀**

