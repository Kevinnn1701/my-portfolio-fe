# Portfolio Website

A modern, responsive portfolio website built with Nuxt.js and Tailwind CSS. This portfolio showcases projects, skills, and provides a way for potential clients or employers to get in touch.

## ✨ Features

- **🏠 Home/Landing Page** - Hero section with personal introduction and quick stats
- **👤 About Me Page** - Detailed personal information and background story
- **🛠️ Skills Page** - Interactive skill showcase with progress bars and categories
- **📁 Projects Page** - Portfolio showcase with filtering and search functionality
- **🔍 Project Detail Pages** - Individual project pages with image galleries and tech stacks
- **📞 Contact Page** - Contact form and social media links
- **📱 Responsive Design** - Mobile-first design that works on all devices
- **🎨 Modern UI** - Beautiful animations and transitions
- **⚡ Fast Performance** - Optimized for speed and SEO

## 🚀 Technologies Used

- **Frontend Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript/JavaScript
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash (placeholder images)

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable Vue components
│   ├── Header.vue      # Navigation header
│   ├── Footer.vue      # Site footer
│   ├── ProjectCard.vue # Project display card
│   └── SkillCard.vue   # Skill display card
├── composables/        # Vue composables
│   ├── useApi.js       # API functions for backend integration
│   └── useDummyData.js # Dummy data for development
├── pages/              # Application pages
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   ├── skills.vue      # Skills page
│   ├── contact.vue     # Contact page
│   └── projects/       # Projects pages
│       ├── index.vue   # Projects listing
│       └── [id].vue    # Project detail page
├── assets/             # Static assets
│   └── main.css        # Custom CSS and Tailwind imports
└── app.vue             # Root component
```

## 🛠️ Installation & Setup

1. **Clone the repository** (if using Git):
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit `http://localhost:3000`

## 🔄 Connecting to Backend API

This portfolio is currently set up with dummy data for demonstration. To connect to your Laravel backend:

1. **Update API Base URL** in `composables/useApi.js`:
   ```javascript
   const API_BASE_URL = 'https://your-api-domain.com/api'
   ```

2. **Replace dummy data usage** in pages:
   ```javascript
   // Replace this:
   const aboutMe = useDummyAboutMe()
   
   // With this:
   const { data: aboutMe } = await useAboutMe()
   ```

3. **Set up your Laravel backend** with these API endpoints:
   - `GET /api/about-me` - About me information
   - `GET /api/skills` - Skills list
   - `GET /api/projects` - Projects list (with optional filtering)
   - `GET /api/projects/{id}` - Single project details
   - `GET /api/contact` - Contact information
   - `GET /api/social-links` - Social media links
   - `POST /api/contact/submit` - Contact form submission

## 📊 Data Models

The portfolio expects data in the following structure (matching your Laravel models):

### AboutMe Model
```javascript
{
  name: "John Doe",
  role: "Full Stack Developer", 
  description: "Short bio...",
  detailed_description: "Longer bio...",
  image_url: "image-url",
  personal_story: "Personal journey..."
}
```

### Skill Model
```javascript
{
  id: 1,
  name: "JavaScript",
  percentage: 90,
  description: "Skill description",
  category_name: "Frontend"
}
```

### Project Model
```javascript
{
  id: 1,
  name: "Project Name",
  description: "Project description",
  live_demo_link: "https://demo.com",
  github_repository_link: "https://github.com/user/repo",
  featured: true,
  created_at: "2024-01-01",
  images: [
    {
      id: 1,
      image_url: "image-url",
      alt_text: "Description"
    }
  ],
  technologies: [
    {
      id: 1,
      name: "Vue.js",
      description: "Frontend framework"
    }
  ]
}
```

## 🎨 Customization

### Colors & Branding
Update the color scheme in `assets/main.css` and throughout the components:
- Primary: Blue (`blue-600`)
- Secondary: Purple (`purple-600`) 
- Accent: Indigo (`indigo-600`)

### Content
1. Replace dummy data in `composables/useDummyData.js`
2. Update images with your own photos/screenshots
3. Modify text content in each page component
4. Update social media links and contact information

### Layout
- Modify component layouts in the `components/` directory
- Adjust page layouts in the `pages/` directory
- Update global styles in `assets/main.css`

## 📱 Responsive Design

The portfolio is built mobile-first and includes:
- Mobile navigation menu
- Responsive grid layouts
- Optimized images and content
- Touch-friendly interactions

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Generate static site:
```bash
npm run generate
```

### Preview production build:
```bash
npm run preview
```

## 📈 Performance Features

- **Lazy loading** for images
- **Code splitting** for optimal bundle sizes
- **SEO optimization** with meta tags
- **Modern CSS** with Tailwind CSS
- **Fast navigation** with Nuxt.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:
1. Check the documentation
2. Review the code comments
3. Create an issue on GitHub
4. Contact the developer

---

**Happy coding! 🚀**
