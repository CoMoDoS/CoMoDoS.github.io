# Personal Portfolio Website

A modern, responsive portfolio website showcasing web development skills and projects. Built with semantic HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Semantic HTML**: Proper use of HTML5 semantic elements for accessibility
- **Interactive Navigation**: Hamburger menu for mobile devices
- **Project Filtering**: Dynamic filtering system for portfolio projects
- **Image Lightbox**: Click-to-expand functionality for project images
- **Contact Form**: Real-time validation with user feedback
- **Smooth Scrolling**: Enhanced navigation experience
- **Accessibility**: ARIA labels and keyboard navigation support
- **Cross-browser Compatibility**: Vendor prefixes for broad browser support

## 🚀 Demo

Open `step2.html` in your web browser to see the portfolio in action.

## 📁 Project Structure

```
Web/
├── step2.html          # Main portfolio page
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # JavaScript functionality
├── index.html          # Basic HTML practice page
├── index1.html         # Additional HTML structure practice
├── Portofolio.png      # Portfolio project screenshot
├── Ecommerce.png       # E-commerce project screenshot
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Flexbox, Grid, Media Queries, Custom Properties
- **JavaScript (ES6+)**: DOM manipulation, Event handling, Form validation
- **Git**: Version control

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ JavaScript Functions

### Core Functions
- `toggleMenu()` - Toggle mobile navigation menu
- `filterProjects(category)` - Filter portfolio projects by category
- `openLightbox(src, alt)` - Open image in lightbox modal
- `closeLightbox()` - Close lightbox modal
- `validateForm()` - Validate contact form with real-time feedback

### Event Listeners
- Smooth scrolling navigation
- Project filter buttons
- Image lightbox functionality
- Form validation and submission
- Real-time input validation

## 🎨 CSS Features

- **Mobile-first responsive design**
- **Flexbox and Grid layouts**
- **CSS Custom Properties (variables)**
- **Smooth transitions and hover effects**
- **Vendor prefixes for cross-browser support**
- **Accessible color contrast**
- **Print-friendly styles**

## 🧪 Testing

### Manual Testing Checklist

#### Navigation
- [ ] Hamburger menu toggles on mobile devices
- [ ] Navigation links scroll smoothly to sections
- [ ] Mobile menu closes after clicking a link

#### Project Filtering
- [ ] "All" button shows all projects
- [ ] Category buttons filter projects correctly
- [ ] Active button styling updates properly

#### Lightbox
- [ ] Images open in lightbox when clicked
- [ ] Close button works
- [ ] Clicking outside modal closes lightbox
- [ ] Keyboard navigation (ESC key)

#### Contact Form
- [ ] Required field validation
- [ ] Email format validation
- [ ] Real-time error messages
- [ ] Success message on submission
- [ ] Form reset after successful submission

#### Responsive Design
- [ ] Layout adapts to different screen sizes
- [ ] Images scale appropriately
- [ ] Text remains readable on all devices
- [ ] Touch targets are appropriately sized

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/CoMoDoS/BasicWebsite.git
   cd BasicWebsite
   ```

2. **Open the portfolio**
   - Open `step2.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **View the website**
   - Navigate to `http://localhost:8000/step2.html`

## 🔧 Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Git for version control

### Development Workflow
1. Make changes to HTML, CSS, or JavaScript files
2. Test in browser and different device sizes
3. Validate HTML and CSS
4. Test accessibility features
5. Commit changes with descriptive messages

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with fallbacks)

## 🎯 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement lazy loading for images
- [ ] Add animation library (AOS, GSAP)
- [ ] Include blog section
- [ ] Add contact form backend integration
- [ ] Implement PWA features
- [ ] Add unit tests for JavaScript functions
- [ ] Include performance optimization

## 📄 File Descriptions

### `step2.html`
Main portfolio page featuring:
- Header with responsive navigation
- About section with personal introduction
- Projects section with filtering and lightbox
- Skills section highlighting technical abilities
- Contact section with validation form
- Footer with social links

### `styles.css`
Comprehensive stylesheet including:
- CSS reset and base styles
- Responsive layout system
- Component-specific styles
- Media queries for all breakpoints
- Accessibility enhancements
- Print styles

### `script.js`
Interactive functionality:
- Menu toggle for mobile navigation
- Project filtering system
- Image lightbox functionality
- Form validation with real-time feedback
- Smooth scrolling behavior
- Event delegation and error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspiration from modern portfolio designs
- MDN Web Docs for technical references
- W3C for accessibility guidelines
- CSS-Tricks for layout techniques

---

⭐ **Star this repository if you found it helpful!**
