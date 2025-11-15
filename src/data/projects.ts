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
  }
];
