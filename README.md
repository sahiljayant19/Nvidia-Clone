# NVIDIA GeForce Graphics Cards Website Clone

A responsive website clone showcasing NVIDIA GeForce graphics cards. This project demonstrates modern web development practices with HTML, CSS, and JavaScript.

## 📋 Project Overview

This is a front-end clone of the NVIDIA GeForce graphics cards website. It features an interactive navigation system, search functionality, and responsive design for various screen sizes.

## 🎯 Features

- **Interactive Navigation** - Dropdown menus for Products and Games & Tech categories
- **Search Functionality** - Search bar with overlay for finding graphics cards
- **Mobile Responsive** - Fully responsive design that adapts to all screen sizes
- **Dynamic UI Elements** - Hover effects and smooth transitions
- **Graphics Card Showcase** - Display of different RTX series (40, 30, 20, 16)
- **Mobile Menu** - Hamburger menu for mobile device navigation

## 📁 Project Structure

```
├── index.html                 # Main HTML file
├── CSS/
│   ├── style.css             # Main styling
│   ├── effect.css            # Animation and effect styles
│   ├── hidden.css            # Hidden element styles
│   └── responsive.css        # Mobile responsive styles
├── JavaScript/
│   ├── script.js             # Main interactive functionality
│   └── var.js                # DOM element variables (ES6 modules)
├── img/                       # Image assets
│   ├── Graphic card images (1.jpeg - 4.jpeg)
│   ├── Icons (icon.png, menu.png, search.png, user-icon.png)
│   ├── Social media icons (fb.png, twitter.png, insta.png, youtube.png, twitch.png)
│   └── UI elements (triangle.png, favicon.ico)
└── README.md                  # Project documentation
```

## 🎨 Key Components

### Header & Navigation
- Top navigation bar with NVIDIA branding
- Main menu (Shop, Drivers, Support)
- Search button with interactive search box
- User login button
- Mobile-responsive hamburger menu

### Sub Navigation
- GeForce section with dropdowns
- Products dropdown - Graphics cards, Laptops, G-SYNC Monitors, GeForce NOW
- Games & Tech dropdown - DLSS, Ray Tracing, Architecture, Gaming, Studio Tools

### Main Content
- Page heading "Graphics Cards"
- Product cards showcasing different RTX series:
  - GeForce RTX 40 Series
  - GeForce RTX 30 Series
  - GeForce RTX 20 Series
  - GeForce RTX 16 Series
- "Learn More" buttons for each card

### Interactive Features
- **Dropdown Menus** - Show/hide option boxes on hover
- **Search Bar** - Opens overlay search when clicked
- **Mobile Navigation** - Toggle menu for mobile devices
- **Arrow Indicators** - Visual feedback for expandable menu items

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Interactive functionality and DOM manipulation
- **ES6 Modules** - Organized code with import/export statements

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. No additional dependencies or build tools required

## 💻 JavaScript Functionality

### Event Listeners
- **Dropdown Navigation** - Mouseover/mouseleave events for product and games menus
- **Search Toggle** - Click events to show/hide search overlay
- **Menu Toggle** - Mobile menu button to show/hide navigation
- **Arrow Animation** - Dynamic arrow styling based on user interaction

### Key Functions
- `setArrowProperty()` - Updates arrow styling for menu indicators
- `setMobileNavProperty()` - Configures mobile navigation styles

### Module System
The project uses ES6 modules for clean code organization:
- `var.js` - Exports all DOM element references
- `script.js` - Imports variables and implements functionality

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Hamburger menu for small screens
- Adapted navigation and layout for tablets
- Full desktop experience for large screens

## 🎨 CSS Features

- Flexbox and Grid layouts
- Smooth transitions and animations
- CSS arrows for menu indicators
- Overlay effects for search functionality
- Responsive media queries

## 📝 Notes

- Favicon included for browser tab display
- All assets (images and icons) are included in the `img/` folder
- Code is optimized for readability and maintainability
- Follows modern web development best practices

## 🔗 Social Media Links

The project includes social media icon assets:
- Facebook
- Twitter/X
- Instagram
- YouTube
- Twitch

---

**Built with:** HTML5, CSS3, JavaScript (ES6)  
**Type:** Front-end Web Application  
**Status:** Complete
