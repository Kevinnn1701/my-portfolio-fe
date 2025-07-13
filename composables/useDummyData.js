// Dummy data for development - remove when connecting to real API

export const useDummyAboutMe = () => {
  return {
    name: "John Doe",
    role: "Full Stack Developer",
    description: "Passionate developer with 5+ years of experience creating innovative web solutions",
    detailed_description: "I'm a full-stack developer who loves to create meaningful digital experiences. With over 5 years of experience in web development, I specialize in modern frameworks like Vue.js, React, Laravel, and Node.js. I'm passionate about clean code, user experience, and continuous learning. When I'm not coding, you can find me exploring new techs, contributing to open-source projects, or enjoying outdoor activities.",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    personal_story: "My journey into programming started during college when I built my first website. What began as a simple HTML page quickly evolved into a passion for creating digital solutions that solve real-world problems. I've worked with startups and established companies, always focusing on delivering high-quality, scalable solutions."
  }
}

export const useDummySkills = () => {
  return [
    {
      id: 1,
      name: "JavaScript",
      percentage: 90,
      description: "Expert in modern JavaScript, ES6+, and TypeScript",
      category_name: "Frontend"
    },
    {
      id: 2,
      name: "Vue.js",
      percentage: 95,
      description: "Advanced Vue.js development with Nuxt.js and Composition API",
      category_name: "Frontend"
    },
    {
      id: 3,
      name: "React",
      percentage: 85,
      description: "Proficient in React, Next.js, and modern React patterns",
      category_name: "Frontend"
    },
    {
      id: 4,
      name: "Laravel",
      percentage: 88,
      description: "Backend development with Laravel, API design, and database management",
      category_name: "Backend"
    },
    {
      id: 5,
      name: "Node.js",
      percentage: 80,
      description: "Server-side JavaScript with Express.js and modern Node.js features",
      category_name: "Backend"
    },
    {
      id: 6,
      name: "PostgreSQL",
      percentage: 85,
      description: "Database design, optimization, and complex query writing",
      category_name: "Database"
    },
    {
      id: 7,
      name: "Docker",
      percentage: 75,
      description: "Containerization and deployment with Docker and Docker Compose",
      category_name: "DevOps"
    },
    {
      id: 8,
      name: "AWS",
      percentage: 70,
      description: "Cloud deployment and services including EC2, S3, and Lambda",
      category_name: "DevOps"
    },
    {
      id: 9,
      name: "Git",
      percentage: 90,
      description: "Version control, branching strategies, and collaborative development",
      category_name: "Tools"
    },
    {
      id: 10,
      name: "Tailwind CSS",
      percentage: 92,
      description: "Modern CSS framework for rapid UI development",
      category_name: "Frontend"
    }
  ]
}

export const useDummyProjects = () => {
  return [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Laravel and Vue.js, featuring user authentication, payment processing, inventory management, and admin dashboard.",
      link: "https://demo-ecommerce.example.com",
      github: "https://github.com/johndoe/ecommerce-platform",
      featured: true,
      created_at: "2024-01-15",
      images: [
        {
          id: 1,
          project_id: 1,
          image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
          alt_text: "E-commerce homepage"
        },
        {
          id: 2,
          project_id: 1,
          image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
          alt_text: "Product listing page"
        }
      ],
      techs: [
        {
          id: 1,
          name: "Laravel",
          description: "Backend API and admin panel"
        },
        {
          id: 2,
          name: "Vue.js",
          description: "Frontend user interface"
        },
        {
          id: 3,
          name: "Stripe",
          description: "Payment processing"
        },
        {
          id: 4,
          name: "PostgreSQL",
          description: "Database management"
        }
      ]
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      link: "https://taskapp.example.com",
      github: "https://github.com/johndoe/task-manager",
      featured: true,
      created_at: "2024-02-20",
      images: [
        {
          id: 3,
          project_id: 2,
          image_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
          alt_text: "Task dashboard"
        },
        {
          id: 4,
          project_id: 2,
          image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
          alt_text: "Project overview"
        }
      ],
      techs: [
        {
          id: 5,
          name: "React",
          description: "Frontend framework"
        },
        {
          id: 6,
          name: "Node.js",
          description: "Backend server"
        },
        {
          id: 7,
          name: "Socket.io",
          description: "Real-time communication"
        },
        {
          id: 8,
          name: "MongoDB",
          description: "Document database"
        }
      ]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information, forecasts, and historical data with beautiful visualizations.",
      link: "https://weather-dash.example.com",
      github: "https://github.com/johndoe/weather-dashboard",
      featured: false,
      created_at: "2024-03-10",
      images: [
        {
          id: 5,
          project_id: 3,
          image_url: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
          alt_text: "Weather dashboard interface"
        }
      ],
      techs: [
        {
          id: 9,
          name: "Nuxt.js",
          description: "Vue.js framework"
        },
        {
          id: 10,
          name: "OpenWeatherMap API",
          description: "Weather data source"
        },
        {
          id: 11,
          name: "Chart.js",
          description: "Data visualization"
        },
        {
          id: 12,
          name: "Tailwind CSS",
          description: "Styling framework"
        }
      ]
    },
    {
      id: 4,
      name: "Blog CMS",
      description: "A content management system for bloggers with markdown support, SEO optimization, and social media integration.",
      link: "https://blog-cms.example.com",
      github: "https://github.com/johndoe/blog-cms",
      featured: false,
      created_at: "2024-04-05",
      images: [
        {
          id: 6,
          project_id: 4,
          image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
          alt_text: "Blog editor interface"
        }
      ],
      techs: [
        {
          id: 13,
          name: "Laravel",
          description: "Backend framework"
        },
        {
          id: 14,
          name: "Inertia.js",
          description: "Frontend-backend bridge"
        },
        {
          id: 15,
          name: "TinyMCE",
          description: "Rich text editor"
        },
        {
          id: 16,
          name: "Redis",
          description: "Caching system"
        }
      ]
    }
  ]
}

export const useDummyContact = () => {
  return {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    availability: "Available for freelance work",
    social_links: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: "linkedin"
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/johndoe",
        icon: "github"
      },
      {
        id: 3,
        platform: "Twitter",
        url: "https://twitter.com/johndoe",
        icon: "twitter"
      },
      {
        id: 4,
        platform: "Instagram",
        url: "https://instagram.com/johndoe",
        icon: "instagram"
      }
    ]
  }
} 