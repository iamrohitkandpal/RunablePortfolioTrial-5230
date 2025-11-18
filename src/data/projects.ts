export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  stack: string[];
  description: string;
  fullDescription: string;
  flow: string;
  architecture: string;
  achievements: string[];
  github: string;
  demo: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'krishnacrypt',
    title: 'KrishnaCrypt',
    subtitle: 'Secure Real-Time Chat Platform',
    period: 'Apr 2025 – Jun 2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    description: 'Secure real-time chat with custom SPN-AES encryption',
    fullDescription: 'Developed a secure real-time chat platform with custom SPN-AES encryption and JWT authentication. Engineered 10ms message latency for 500+ concurrent users using WebSockets and optimized DB queries. Implemented role-based key management, encryption visualization, and scalable cloud deployment via Docker.',
    flow: 'User Authentication → Secure Socket Connection → Message Encryption (SPN-AES) → Real-time Transmission → Decryption → Display',
    architecture: 'Client-side React app communicates with Express.js backend via Socket.io. Messages are encrypted using custom SPN-AES before transmission. MongoDB stores user data and message metadata.',
    achievements: [
      'Achieved 10ms average message latency for 500+ concurrent users',
      'Implemented custom SPN-AES encryption algorithm',
      'Optimized database queries reducing response time by 60%',
      'Built RESTful APIs with JWT-based authentication',
      'Deployed with Docker for scalable cloud infrastructure'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  },
  {
    id: 'rakshak',
    title: 'Rakshak',
    subtitle: 'DDoS Protection System',
    period: 'Dec 2024 – Mar 2025',
    stack: ['Node.js', 'Nginx', 'AWS', 'Redis', 'MongoDB'],
    description: 'Real-time DDoS mitigation with IP logging and rate limiting',
    fullDescription: 'Built a real-time DDoS mitigation system with IP logging, rate limiting, and honeypot integration. Deployed load balancing on AWS EC2, improving request handling throughput by 40%. System detects anomalous traffic patterns and automatically blocks malicious IPs.',
    flow: 'Traffic Analysis → Rate Limiting → IP Reputation Check → Honeypot Detection → Load Balancer → Application Server',
    architecture: 'Nginx acts as reverse proxy with Redis-based rate limiting. Node.js backend analyzes traffic patterns. AWS EC2 instances handle load balancing with auto-scaling capabilities.',
    achievements: [
      'Improved request handling throughput by 40% with load balancing',
      'Implemented Redis-based rate limiting for real-time traffic control',
      'Integrated honeypot system for advanced threat detection',
      'Deployed on AWS EC2 with auto-scaling capabilities',
      'Real-time IP logging and analysis dashboard'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  },
  {
    id: 'aakash-vaani',
    title: 'Aakash Vaani',
    subtitle: 'Voice-Based Mapping System',
    period: 'Sep 2024 – Dec 2024',
    stack: ['JavaScript', 'Leaflet.js', 'Web Speech API'],
    description: 'Voice-controlled mapping with multiple API integrations',
    fullDescription: 'Built a voice-controlled mapping app integrating OpenStreetMap, Bhuvan, and NASA APIs for real-time navigation. Enabled natural voice commands and accessibility features using the Web Speech API.',
    flow: 'Voice Input → Speech Recognition → Command Processing → API Integration → Map Rendering → Audio Feedback',
    architecture: 'Frontend JavaScript app with Leaflet.js for map rendering. Web Speech API processes voice commands. Multiple mapping APIs provide comprehensive geographic data.',
    achievements: [
      'Integrated 3 mapping APIs (OpenStreetMap, Bhuvan, NASA)',
      'Implemented Web Speech API for natural voice commands',
      'Built accessibility features for visually impaired users',
      'Real-time location tracking and navigation guidance',
      'Multi-language support for voice commands'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Shopping Solution',
    period: 'Jun 2024 – Aug 2024',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    description: 'Modern e-commerce platform with payment integration',
    fullDescription: 'Developed a full-featured e-commerce platform with product management, shopping cart, and secure payment processing via Stripe. Implemented server-side rendering with Next.js for optimal SEO and performance.',
    flow: 'Product Browsing → Cart Management → Checkout → Payment Processing → Order Confirmation → Email Notification',
    architecture: 'Next.js app with server-side rendering. Prisma ORM manages PostgreSQL database. Stripe handles secure payment processing. Redis caching for product listings.',
    achievements: [
      'Integrated Stripe payment gateway with 99.9% uptime',
      'Implemented shopping cart with persistent session storage',
      'Built admin dashboard for inventory management',
      'Optimized product images with Next.js Image component',
      'Achieved 95+ Lighthouse performance score'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  },
  {
    id: 'task-management',
    title: 'Task Master Pro',
    subtitle: 'Collaborative Task Management',
    period: 'Mar 2024 – May 2024',
    stack: ['React', 'Firebase', 'Material-UI', 'Redux'],
    description: 'Real-time collaborative task tracking application',
    fullDescription: 'Created a collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Used Firebase for authentication and real-time database synchronization.',
    flow: 'User Authentication → Dashboard → Task Creation → Team Assignment → Real-time Updates → Notifications',
    architecture: 'React frontend with Redux state management. Firebase handles authentication, real-time database, and cloud functions. Material-UI provides responsive design components.',
    achievements: [
      'Real-time synchronization across multiple devices',
      'Implemented drag-and-drop task organization',
      'Built notification system with Firebase Cloud Messaging',
      'Added advanced filtering and search functionality',
      'Supported team collaboration with role-based access'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Insights',
    subtitle: 'Advanced Weather Forecasting',
    period: 'Jan 2024 – Feb 2024',
    stack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    description: 'Interactive weather dashboard with data visualization',
    fullDescription: 'Built an interactive weather dashboard featuring 7-day forecasts, historical data visualization, and location-based weather alerts. Integrated multiple weather APIs for comprehensive climate information.',
    flow: 'Location Detection → API Request → Data Processing → Chart Rendering → Alert System → User Preferences',
    architecture: 'Vue.js frontend with Chart.js for data visualization. OpenWeather API provides weather data. Local storage for user preferences and favorite locations.',
    achievements: [
      'Integrated multiple weather APIs for accurate forecasts',
      'Built interactive charts with historical data analysis',
      'Implemented geolocation for automatic location detection',
      'Added weather alerts and notifications system',
      'Created responsive design with dark/light theme'
    ],
    github: 'https://github.com/iamrohitkandpal',
    demo: '#',
  }
];