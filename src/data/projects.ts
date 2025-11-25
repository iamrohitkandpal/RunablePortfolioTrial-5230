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
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "retailvision",
    title: "RetailVision: Data Forecasting for Retail",
    subtitle: "Time series sales forecasting with Facebook Prophet and interactive Streamlit dashboard for inventory optimization",
    period: "Sep 2025 – Nov 2025",
    stack: ["Python 3.8+", "Facebook Prophet", "Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
    description: "A powerful retail sales forecasting system using Facebook's Prophet algorithm for advanced time series analysis. Features interactive Streamlit dashboard, confidence intervals, trend analysis, and actionable business insights for inventory management and revenue optimization.",
    fullDescription: "RetailVision is a comprehensive time series forecasting application designed to help businesses predict future sales patterns with high accuracy. It uses Facebook's Prophet algorithm which intelligently handles seasonal patterns, holiday effects, trend changes, missing data, and outliers. The system processes historical retail data to identify underlying trends and patterns, then generates accurate sales predictions for 7-90 day periods. The interactive Streamlit dashboard provides real-time forecasting with adjustable parameters allowing users to experiment with different scenarios. Users can filter by store location, adjust forecast periods dynamically, and view confidence intervals to understand prediction uncertainty. The system generates actionable business insights including peak day predictions, seasonal analysis patterns, and inventory recommendations. Performance metrics show 85-95% accuracy on test data with fast model training in seconds. The platform supports multi-store analysis for chain retailers, SKU-level forecasting for individual products, and revenue predictions beyond unit sales.",
    flow: "Historical Sales Data Input (CSV/database) → Data Aggregation by Date (daily/weekly/monthly) → Trend Analysis (growth patterns identification) → Prophet Model Training (seasonal decomposition) → Seasonal Pattern Detection (yearly/monthly/weekly cycles) → Holiday Effect Analysis (special events impact) → Confidence Interval Calculation (uncertainty quantification) → Forecast Generation (7-90 day predictions) → Dashboard Visualization (interactive charts) → Business Insights Generation (anomaly detection, peak identification) → Actionable Recommendations (inventory levels, staffing needs)",
    architecture: "Data Processing: Pandas for data manipulation and cleaning, NumPy for numerical operations, scikit-learn for model evaluation metrics. Forecasting Engine: Facebook Prophet for time series modeling with automatic trend and seasonality handling, handles holidays, missing data, and outliers gracefully. Dashboard: Streamlit for web interface with minimal code, Plotly for interactive visualizations and drill-down capabilities. Analytics: RMSE, MAE, MAPE metrics for accuracy measurement, walk-forward validation for realistic performance assessment, backtesting on historical data.",
    achievements: [
      "Advanced Forecasting: Facebook Prophet algorithm with 85-95% accuracy, handles seasonality, holidays, and trend changes automatically without manual tuning",
      "Interactive Dashboard: Streamlit interface with real-time forecasting, adjustable parameters, multi-store analysis, and scenario planning capabilities",
      "Business Intelligence: Actionable insights including peak day predictions, seasonal analysis patterns, inventory recommendations, and revenue optimization strategies",
      "Performance Metrics: Fast model training in seconds, real-time predictions, scalable for millions of data points from multiple stores and SKUs",
      "Multi-Level Analysis: Store-wise comparison and benchmarking, SKU-level forecasting for individual products, revenue forecasting beyond units, regional trend analysis"
    ],
    github: "https://github.com/iamrohitkandpal/Something-About-Data/tree/main/Data%20Forecasting%20for%20Retail",
    demo: "https://retailvision-dev.streamlit.app/",
    image: "/projects/retailvision.webp"
  },
  {
    id: "krishnacrypt",
    title: "KrishnaCrypt: Advanced Secure Chat Application",
    subtitle: "End-to-end encrypted real-time chat with custom cryptographic algorithms and VPN-like tunneling",
    period: "Jul 2025 – Sep 2025",
    stack: ["React 18.x", "Node.js 18.x", "Express.js 4.18+", "Socket.io 4.7+", "MongoDB 6.x", "Mongoose 7.x", "JWT", "bcrypt 5.x", "Custom SPN Encryption", "AES-256-GCM", "Docker"],
    description: "A cutting-edge cybersecurity-focused real-time chat application featuring custom 3-round Substitution-Permutation Network (SPN) encryption, end-to-end encryption with AES-256-GCM, friend-based communication system, and educational cryptographic demonstrations for learning advanced encryption techniques.",
    fullDescription: "KrishnaCrypt is an advanced secure messaging application demonstrating practical implementation of cryptographic algorithms and secure communication protocols at enterprise level. It features a custom 3-round Substitution-Permutation Network (SPN) encryption algorithm with 128-bit key derivation using SHA-256, operating in CBC mode with PKCS#7 padding for maximum security. All messages are encrypted before transmission and stored encrypted in the database, ensuring end-to-end confidentiality. The application implements JWT-based authentication with bcrypt password hashing (12 salt rounds), friend-based access control preventing unauthorized communication, and SHA-256 hashed secure room generation. Real-time messaging uses Socket.io with typing indicators, message delivery/read receipts, and persistent encrypted message history. The platform includes an interactive educational debug panel showing step-by-step encryption/decryption processes, making it invaluable for learning cryptography concepts. Performance metrics demonstrate sub-100ms message delivery, support for 500+ concurrent users, and 85% test coverage with comprehensive security validation.",
    flow: "User Registration (bcrypt password hashing with 12 salt rounds) → Login (JWT token generation with 24-hour expiration) → Profile Setup (user metadata storage) → Add Friends (UUID-based friend discovery system) → Create Private Room (SHA-256 hash-based secure room generation) → Send Message (client-side encryption with SPN + AES-256-GCM) → Socket.io Real-time Transmission (WebSocket with TLS 1.3) → Server-side Decryption (verify JWT, decrypt message) → Database Storage (encrypted message persistence in MongoDB) → Recipient Receives (Socket.io notification) → Client-side Decryption (SPN + AES-256-GCM) → Display Message (UI rendering) → Debug Panel Shows Encryption Steps (educational visualization of cryptographic operations)",
    architecture: "Frontend: React components with Socket.io client for real-time bidirectional communication, Axios for REST API calls, custom encryption module for client-side cryptographic operations, interactive debug panel for educational visualization of encryption/decryption processes. Backend: Express.js REST API for authentication and user management, Socket.io server for real-time messaging with event-driven architecture, MongoDB with Mongoose for user data and encrypted message storage, custom encryption module implementing SPN algorithm with configurable parameters. Security Layers: Authentication (bcrypt + JWT with expiration), Authorization (friend-based access control preventing unauthorized messaging), Transport (HTTPS/WSS in production with TLS 1.3), Data (encrypted message storage with key derivation). Encryption: Custom SPN algorithm with 128-bit keys derived from SHA-256, AES-256-GCM for additional authenticated encryption, CBC mode with random IV, PKCS#7 padding, Base64 encoding for safe transport.",
    achievements: [
      "Custom Encryption Algorithm: Successfully implemented 3-round Substitution-Permutation Network (SPN) with 128-bit key derivation using SHA-256 and CBC mode operation, demonstrating deep understanding of cryptographic principles",
      "High Performance & Scalability: Sub-100ms message delivery latency, 1000 req/s throughput capacity, support for 500+ concurrent users with <512MB memory usage, optimized Socket.io event handling",
      "Educational Value: Interactive debug panel showing real-time encryption/decryption steps, algorithm demonstration with visual feedback, security metrics display, and cryptographic operations visualization for learning purposes",
      "Security Implementation: bcrypt password hashing with 12 rounds, JWT authentication with 24-hour expiration, friend-based access control preventing unauthorized communication, encrypted message storage in database, TLS 1.3 transport security",
      "Production Ready: Docker containerization for easy deployment, comprehensive error handling and validation, rate limiting to prevent abuse, input validation and sanitization, CORS configuration, deployment guides for Heroku, Render, and Docker platforms"
    ],
    github: "https://github.com/iamrohitkandpal/KrishnaCrypt",
    image: "/projects/krishnacrypt.webp"
  },
  {
    id: "rakshak",
    title: "Rakshak: DDoS Protection System",
    subtitle: "Enterprise-grade real-time DDoS mitigation system for government infrastructure with ML-powered threat detection",
    period: "Feb 2025 – Apr 2025",
    stack: ["React 18.2.0", "Node.js 16.x", "Express 4.21.0", "MongoDB 8.12.1", "Redis 4.7.0", "Socket.io 4.7.2", "JWT", "TensorFlow.js 4.10.0", "Recharts", "Axios"],
    description: "An enterprise-grade cybersecurity solution engineered for real-time DDoS protection with advanced machine learning-powered threat detection, multi-layered defense mechanisms, and interactive monitoring dashboard. Handles 10,000+ requests/minute with <50ms latency impact, protecting critical infrastructure.",
    fullDescription: "Rakshak is a sophisticated, production-ready cybersecurity solution specifically engineered to safeguard critical government web infrastructure against Distributed Denial of Service attacks. It utilizes advanced machine learning algorithms for real-time threat detection with 85% accuracy rate. The system implements multi-layered defense against HTTP floods, slowloris attacks, and volumetric attacks through intelligent rate limiting, geolocation analysis, and behavioral scoring. Real-time processing architecture handles 10,000+ requests per minute with minimal latency impact (<50ms), ensuring legitimate traffic flows uninterrupted. The platform features WebSocket-based live monitoring with millisecond response times, asynchronous processing architecture for handling concurrent request streams, and dynamic resource allocation based on traffic patterns. Redis provides high-speed rate limiting and blacklist management for instant threat response, while MongoDB stores long-term attack pattern analytics for trend analysis. The React-based dashboard offers interactive real-time metrics, threat intelligence visualization, and automated incident response triggering with customizable thresholds.",
    flow: "Incoming Request (HTTP/HTTPS) → Traffic Ingestion Layer (load balancing) → Analysis Engine (rule-based + ML models) → Threat Scoring (rate limit analysis + geolocation verification + behavioral pattern analysis) → Cache Layer (Redis for instant decisions) → Decision Engine (Allow/Block/Throttle) → Persistent Storage (MongoDB for analytics) → Dashboard Update (WebSocket real-time) → Alert Generation (critical threats) → Automated Response (IP blacklisting, rate limiting) → Logging & Analytics (incident tracking)",
    architecture: "Frontend: React dashboard with Recharts for real-time threat visualization, Axios for API communication, Socket.io client for live updates and instant alerts, responsive design with Hindi localization for accessibility. Backend: Express.js API with Node.js runtime, Socket.io for WebSocket communication enabling real-time updates, multi-factor threat analysis combining rate limiting, geolocation verification, and behavioral scoring. Cache Layer: Redis for high-speed rate limiting decisions, blacklist management with TTL, session storage for performance. Database: MongoDB for long-term attack pattern storage, analytics aggregation, and incident logging. ML Engine: TensorFlow.js for pattern recognition and anomaly detection, LSTM networks for time-series traffic analysis and prediction. Security: JWT authentication for dashboard access, rate limiting middleware, CORS configuration, helmet for security headers.",
    achievements: [
      "Real-time DDoS Mitigation: Handles 10,000+ requests/minute with <50ms latency impact, blocking malicious traffic instantly while maintaining service availability for legitimate users",
      "ML-Powered Detection: 85% accuracy rate using multi-factor analysis combining rate limiting thresholds, geolocation verification, and behavioral scoring algorithms",
      "High Performance Architecture: Asynchronous processing with Redis caching for instant decisions, supporting concurrent request handling and auto-scaling based on traffic load",
      "Interactive Dashboard: WebSocket-based live monitoring with real-time metrics, threat intelligence visualization, automated incident response triggering, and customizable alert thresholds",
      "Enterprise Features: API gateway integration, custom rule engine for organization-specific policies, distributed deployment capability, CERT-In integration support, blockchain audit trails for compliance, disaster recovery mode with failover"
    ],
    github: "https://github.com/iamrohitkandpal/DDoS-Cloud-Protection-System",
    image: "/projects/rakshak.webp"
  },
  {
    id: "kurukshetra",
    title: "Kurukshetra: Advanced Cybersecurity Training Platform",
    subtitle: "OWASP Top 10 vulnerability training platform with dual-database architecture for ethical hacker education",
    period: "Jun 2025 – Jul 2025",
    stack: ["Next.js 15.3.3", "TypeScript 5.8.3", "React 18.3.1", "Tailwind CSS 3.4.1", "ShadCN UI", "Framer Motion", "MongoDB 8.16.5", "SQLite 5.1.7", "JWT", "Node.js", "Firebase Hosting"],
    description: "A comprehensive cybersecurity training platform implementing all OWASP Top 10 (2021) vulnerabilities in a safe, controlled environment. Features dual-database architecture (MongoDB/SQLite), real-time database switching, CTF-style flag system, and professional UI/UX with smooth animations for immersive learning.",
    fullDescription: "Kurukshetra is a production-ready cybersecurity training platform serving as a comprehensive training ground for ethical hackers and security professionals. It implements all 10 OWASP Top 10 (2021) vulnerability categories including Broken Access Control, Cryptographic Failures, Injection attacks, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Software & Data Integrity, Security Logging Failures, and SSRF. The platform features an innovative dual-database architecture that dynamically switches between MongoDB for NoSQL injection demonstrations and SQLite for SQL injection scenarios. Built with Next.js 15 and TypeScript, it provides enterprise-grade UI/UX with Framer Motion animations, comprehensive testing suites, and multi-platform deployment support including Docker, Firebase, Vercel, AWS, and Azure. Each vulnerability module includes intentional security flaws, educational explanations, and CTF-style flag capture mechanics.",
    flow: "User Registration (secure account creation) → Login with JWT Auth (session management) → Dashboard Access (vulnerability module selection) → Select Vulnerability Module (choose from OWASP Top 10) → Exploit Vulnerable Endpoint (interact with intentional flaws) → Capture Flag (CTF-style challenge completion) → Progress Tracking (achievement recording) → Database Toggle (switch between SQLite/MongoDB) → Real-time Vulnerability Demonstration (live attack simulation) → Educational Insights Display (explanation of vulnerabilities and fixes)",
    architecture: "Frontend: Next.js App Router with TypeScript for type safety, React Context for state management, ShadCN UI components on Radix primitives for accessibility, Tailwind CSS for responsive styling, Framer Motion for smooth animations. Backend: Next.js API Routes with Node.js runtime, JWT middleware for authentication, dual-database abstraction layer supporting both MongoDB and SQLite, Zod schemas for validation. Database: MongoDB primary for document-based operations and NoSQL injection demos, SQLite fallback for SQL injection demonstrations, real-time synchronization across both databases. Security: Intentionally vulnerable code for educational purposes, custom logging system with security gaps, weak JWT secrets for demonstration, plaintext password storage alongside hashed passwords for comparison.",
    achievements: [
      "Complete OWASP Top 10 (2021) Implementation: Successfully implemented all 10 vulnerability categories with real-world attack scenarios and comprehensive educational explanations",
      "Dual-Database Architecture: Innovative MongoDB/SQLite system allowing seamless switching between SQL and NoSQL injection demonstrations without application restart",
      "Production-Ready Deployment: Fully containerized with Docker, deployed on Firebase Hosting, compatible with Vercel, AWS, Google Cloud, and Azure with comprehensive CI/CD support",
      "Advanced UI/UX: Professional interface with smooth Framer Motion animations, responsive design using Tailwind CSS, ShadCN UI components, real-time database status indicators, and progress tracking visualization",
      "Comprehensive Testing Suite: 15,000+ lines of TypeScript code with security validation tests, endpoint tests, database compatibility tests, and vulnerability implementation verification"
    ],
    github: "https://github.com/iamrohitkandpal/Kurukshetra",
    // demo: "https://kurukshetra-training.vercel.app",
    image: "/projects/kurukshetra.webp"
  },
  {
    id: "chitrakaar",
    title: "Chitrakaar: AI Art Generator",
    subtitle: "AI-powered image generation platform using Stable Diffusion with community showcase and social features",
    period: "Sep 2024 – Nov 2024",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Stable Diffusion v1.5", "Hugging Face API", "Cloudinary", "Render"],
    description: "A cutting-edge AI-powered image generation platform transforming text descriptions into stunning visual artworks using Stable Diffusion. Features beautiful light/dark themes, community showcase, smart search, and fully responsive design for seamless creative experience.",
    fullDescription: "Chitrakaar (Sanskrit for 'Artist') is a modern web application that democratizes AI art creation by making it accessible, beautiful, and fun for everyone. Built with React and Vite for optimal performance, it leverages Stable Diffusion v1.5 through Hugging Face API for high-quality image generation from text prompts. The platform features a stunning dual-theme system with automatic system preference detection and smooth animations for delightful user experience. Users can generate unlimited unique artworks from simple text descriptions, with real-time character count validation and comprehensive error handling. The community showcase allows users to discover and share amazing AI-generated artwork, fostering a creative community. Smart search functionality enables finding artworks by artist name or description with fuzzy matching. Cloudinary integration provides fast, secure, and optimized media uploads with CDN delivery ensuring quick load times globally. The responsive design ensures perfect experience across desktop, tablet, and mobile devices with adaptive layouts.",
    flow: "User Input (Text Prompt Entry) → Character Validation (length and content checks) → Hugging Face API Call (send prompt to Stable Diffusion) → Stable Diffusion Processing (image generation with parameters) → Image Generation (AI model output) → Cloudinary Upload (secure media storage) → Database Storage (MongoDB metadata) → Display Generated Image (UI rendering) → Community Showcase (share with community) → Search/Filter (discover artworks) → Share Artwork (social sharing) → Social Engagement (likes, comments, follows)",
    architecture: "Frontend: React with Vite for fast builds and development experience, Tailwind CSS for responsive and beautiful design, React Router for navigation, Context API for theme management, Axios for API communication. Backend: Express.js server with Node.js runtime, MongoDB with Mongoose for artwork storage and user data. AI Integration: Hugging Face API for Stable Diffusion v1.5 access, model inference with configurable parameters. Media Management: Cloudinary for image optimization, CDN delivery, and secure storage. Deployment: Render for backend hosting, Vercel or Netlify for frontend, environment-based configuration for production/development.",
    achievements: [
      "AI Image Generation: Seamless integration with Stable Diffusion v1.5 for high-quality artwork creation from text prompts with configurable parameters",
      "Beautiful UI/UX: Stunning light/dark themes with smooth animations, system preference detection, professional design with Tailwind CSS, intuitive user interface",
      "Community Features: Artwork showcase, smart search with fuzzy matching, artist profiles, social sharing capabilities, and community engagement",
      "Performance Optimization: Vite for fast builds, Cloudinary CDN for image delivery, optimized React components, lazy loading, and caching strategies",
      "Responsive Design: Perfect experience on desktop, tablet, and mobile devices with adaptive layouts and touch-friendly interface"
    ],
    github: "https://github.com/iamrohitkandpal/Chitrakaar",
    demo: "https://chitrakaar.netlify.app",
    image: "/projects/chitrakaar.webp"
  },
  {
    id: "mernwrite",
    title: "MERNWrite: Full-Stack Blogging Platform",
    subtitle: "MERN-based blogging application with Clerk authentication, real-time comments, and optimized media handling",
    period: "Nov 2024 – Dec 2024",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Clerk", "ImageKit", "Svix", "Axios", "React Router", "React Query", "Redux"],
    description: "A full-stack blogging platform built with MERN stack enabling users to create, read, update, and delete blog posts with real-time comments, secure Clerk authentication, optimized media handling through ImageKit, and comprehensive user engagement features.",
    fullDescription: "MERNWrite is a comprehensive blogging application crafted using the MERN stack (MongoDB, Express, React, Node.js) designed for content creators and publishers. It empowers users to create, edit, and manage blog posts seamlessly with a modern, responsive design powered by Tailwind CSS and Vite for optimal performance. The platform features real-time collaboration through an interactive comment system, allowing readers to engage directly on blog posts with threaded discussions. Secure authentication and authorization are powered by Clerk, providing robust user management, role-based access control, and social login options. ImageKit integration ensures fast, secure, and optimized media uploads with automatic CDN delivery and responsive image serving. The application includes comprehensive features like blog post management with rich text editing, comment systems with moderation, user profiles showcasing individual contributions, saved blogs for reading lists, and advanced search capabilities. Currently in active development with upcoming features including draft management, advanced analytics dashboards, social media sharing integration, and admin dashboards for content moderation.",
    flow: "User Registration (Clerk Auth with email/social) → Login (secure session management) → Dashboard Access (user profile and blog management) → Create/Edit Blog Post (rich text editor) → Upload Media (ImageKit optimization) → Publish Blog (make public or schedule) → View Blog Feed (discover content) → Add Comments (real-time engagement) → Save Blog (reading list) → User Profile (showcase published posts) → Analytics Dashboard (view engagement metrics)",
    architecture: "Frontend: React with Vite for fast builds and HMR, Tailwind CSS for responsive design, React Router for navigation, Redux for global state management, React Query for data fetching and caching, Clerk for authentication UI components, ImageKit for media optimization. Backend: Express.js server with Node.js runtime, MongoDB with Mongoose for data persistence, Clerk webhook integration for user management, ImageKit SDK for media handling, Svix for webhook management. Database: MongoDB collections for users, blogs, comments, saved posts with proper relationships and indexing. Authentication: Clerk handles user registration, login, sessions, role-based access control, and social login integration.",
    achievements: [
      "Rich Blogging Features: Complete CRUD operations for blog posts with real-time updates, interactive comment system, threaded discussions, and moderation capabilities",
      "Modern UI/UX: Responsive design with Tailwind CSS optimized for desktop and mobile devices, smooth animations, intuitive navigation, and accessibility features",
      "Secure Authentication: Clerk integration for enterprise-grade user management, role-based access control, social login options, and session security",
      "Optimized Media Handling: ImageKit integration for fast image optimization, automatic CDN delivery, responsive image serving, and bandwidth optimization",
      "Real-time Collaboration: Comment system enabling user engagement and discussion on blog posts with real-time notifications and threaded replies"
    ],
    github: "https://github.com/iamrohitkandpal/MERNWrite",
    image: "/projects/mernwrite.webp"
  },
  {
    id: "twitter-sentiment",
    title: "Twitter Sentiment Analysis System",
    subtitle: "Real-time sentiment analysis of tweets using dual NLP algorithms with interactive Streamlit dashboard",
    period: "Aug 2024 – Sep 2024",
    stack: ["Python 3.8+", "Streamlit", "TextBlob", "VADER", "Tweepy", "Pandas", "NumPy", "NLTK", "Plotly", "WordCloud"],
    description: "A sophisticated NLP system analyzing Twitter sentiment in real-time using dual algorithms (TextBlob + VADER) for comprehensive emotional analysis. Features interactive Streamlit dashboard with live visualizations, trend analysis, and hashtag tracking.",
    fullDescription: "Twitter Sentiment Analysis System is a powerful NLP application that analyzes public sentiment on Twitter using dual sentiment analysis algorithms for maximum accuracy. It combines TextBlob's pattern-based approach with VADER's lexicon and rule-based sentiment analysis specifically tuned for social media text. The system handles Twitter's unique challenges including hashtags, emojis, slang, abbreviations, and character limits. Real-time data collection uses Tweepy API with rate limiting and error handling for continuous stream processing. The interactive Streamlit dashboard provides live sentiment visualization, trend analysis over time, geographic distribution maps, and hashtag performance metrics. Advanced features include comparative analysis between TextBlob and VADER results, confidence scoring, emoji sentiment interpretation, and automated report generation.",
    flow: "Twitter API Authentication (OAuth 1.0a) → Search Query Input (keywords, hashtags, users) → Tweet Collection (Tweepy streaming) → Text Preprocessing (lowercase, remove URLs, handle emojis) → Tokenization (word splitting) → Sentiment Analysis Dual Processing (TextBlob polarity + VADER compound score) → Score Normalization (standardize results) → Classification (positive/negative/neutral) → Aggregate Statistics (calculate averages, distributions) → Visualization Generation (charts, word clouds, maps) → Dashboard Display (real-time updates) → Export Results (CSV, JSON formats)",
    architecture: "Data Collection: Tweepy for Twitter API v2 integration with authentication and rate limiting, real-time streaming and historical search capabilities. NLP Engine: TextBlob for pattern-based sentiment with polarity and subjectivity scores, VADER for social media-optimized lexicon analysis, NLTK for text preprocessing and tokenization. Dashboard: Streamlit for interactive web interface with real-time updates, Plotly for dynamic visualizations and drill-down capabilities, WordCloud for visual text analysis. Data Processing: Pandas for data manipulation and aggregation, NumPy for numerical operations and statistical analysis.",
    achievements: [
      "Dual Algorithm Analysis: Combined TextBlob and VADER for comprehensive sentiment detection with cross-validation and confidence scoring",
      "Real-time Processing: Live tweet streaming and analysis with Tweepy API, handling rate limits and continuous data flow",
      "Interactive Dashboard: Streamlit interface with live visualizations, trend charts, geographic maps, and word clouds for intuitive insights",
      "Social Media Optimization: Specialized handling of hashtags, emojis, slang, and Twitter-specific text patterns for accurate sentiment detection",
      "Comprehensive Reporting: Automated report generation with statistical analysis, trend identification, and exportable results in multiple formats"
    ],
    github: "https://github.com/iamrohitkandpal/Something-About-Data/tree/main/Tweets%20Sentiment%20Analysis",
    image: "/projects/twitter-sentiment.webp"
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    subtitle: "Hybrid recommendation engine with 62,000+ movies using collaborative and content-based filtering",
    period: "Jun 2024 – Jul 2024",
    stack: ["Python 3.8+", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Matplotlib", "Seaborn", "Surprise Library"],
    description: "An intelligent movie recommendation system analyzing 62,000+ movies using hybrid approach combining collaborative filtering and content-based filtering for personalized suggestions with high accuracy.",
    fullDescription: "Movie Recommendation System is a comprehensive machine learning application that provides personalized movie suggestions by analyzing user preferences and movie characteristics. The system processes a dataset of 62,000+ movies with metadata including genres, ratings, cast, crew, and plot descriptions. It implements a hybrid recommendation approach combining collaborative filtering (user-user and item-item similarity) with content-based filtering (genre, cast, plot analysis) for superior accuracy. The collaborative filtering component uses matrix factorization and k-nearest neighbors to find similar users and movies based on rating patterns. Content-based filtering analyzes movie features using TF-IDF vectorization for plot similarity and one-hot encoding for categorical features. The system handles cold start problems through content-based fallback and popularity-based recommendations. Interactive Jupyter widgets provide an intuitive interface for exploring recommendations with filtering options.",
    flow: "Dataset Loading (62K+ movies with metadata) → Data Cleaning (handle missing values, duplicates) → Feature Engineering (genre encoding, rating normalization) → User-Movie Matrix Creation (sparse matrix) → Collaborative Filtering (SVD matrix factorization, KNN similarity) → Content-Based Analysis (TF-IDF on plots, genre matching) → Hybrid Score Calculation (weighted combination) → Generate Recommendations (top-N filtering) → Similarity Scoring (calculate confidence) → Display Results (interactive widgets) → User Feedback Collection (improve recommendations)",
    architecture: "Data Processing: Pandas for dataset manipulation and cleaning, NumPy for numerical operations and matrix handling. Machine Learning: Scikit-learn for TF-IDF vectorization and similarity calculations, Surprise Library for collaborative filtering algorithms including SVD and KNN. Recommendation Engine: Hybrid system combining collaborative filtering (user-based and item-based) with content-based filtering (genre, plot, cast similarity), weighted scoring for final recommendations. Visualization: Matplotlib and Seaborn for exploratory data analysis and recommendation insights. Interface: Jupyter Notebook with interactive widgets for user input and result exploration.",
    achievements: [
      "Large-Scale Dataset: Successfully processed 62,000+ movies with comprehensive metadata including genres, cast, crew, ratings, and plot descriptions",
      "Hybrid Recommendation: Combined collaborative filtering and content-based filtering for superior accuracy and handling of cold start problems",
      "Advanced Algorithms: Implemented SVD matrix factorization, KNN similarity, TF-IDF vectorization, and cosine similarity for multi-dimensional analysis",
      "Cold Start Solution: Content-based fallback and popularity-based recommendations for new users and movies without sufficient rating data",
      "Interactive Interface: Jupyter widgets providing intuitive exploration of recommendations with filtering, sorting, and detailed movie information"
    ],
    github: "https://github.com/iamrohitkandpal/Something-About-Data/tree/main/Movie%20Recomend%20System",
    image: "/projects/movie-recommendation.webp"
  },
  {
    id: "aakash-vaani",
    title: "Aakash Vaani: Voice-Controlled Mapping PWA",
    subtitle: "Offline-capable Progressive Web App with voice control using Web Speech API and TensorFlow.js",
    period: "Apr 2024 – May 2024",
    stack: ["HTML5", "CSS3", "JavaScript ES6+", "Web Speech API", "Leaflet.js", "TensorFlow.js", "Service Workers", "IndexedDB", "PWA"],
    description: "An innovative voice-controlled mapping Progressive Web App enabling hands-free navigation and location search. Features offline capability, speech recognition, and accessibility-focused design for universal usability.",
    fullDescription: "Aakash Vaani (Sanskrit for 'Sky Voice') is a cutting-edge Progressive Web App that revolutionizes map interaction through voice control technology. Built with vanilla JavaScript and modern web APIs, it provides hands-free navigation perfect for accessibility, driving, or multitasking scenarios. The application leverages Web Speech API for real-time speech recognition with support for multiple languages and accents. TensorFlow.js powers offline speech recognition using pre-trained models for basic commands even without internet connectivity. Leaflet.js integration provides interactive maps with voice-controlled zoom, pan, and location search capabilities. The PWA architecture ensures the app works offline through Service Workers caching map tiles and location data in IndexedDB. Users can search locations, get directions, and explore maps entirely through voice commands with visual feedback and error correction. The accessibility-first design includes screen reader compatibility, high contrast modes, and keyboard navigation fallbacks.",
    flow: "App Launch (service worker registration) → Voice Activation (microphone permission) → Speech Recognition (Web Speech API) → Command Processing (parse intent) → Map Action (zoom, pan, search) → Leaflet.js Update (render changes) → Visual Feedback (confirm action) → Offline Fallback (TensorFlow.js for basic commands) → Cache Update (service worker) → IndexedDB Storage (save locations) → Continuous Listening (await next command)",
    architecture: "Frontend: Vanilla JavaScript with ES6+ features for lightweight performance, HTML5 for semantic structure, CSS3 for responsive design and animations. Voice Control: Web Speech API for real-time speech recognition with language detection, TensorFlow.js for offline command recognition using pre-trained models. Mapping: Leaflet.js for interactive map rendering with tile caching, geocoding API integration for location search. PWA Features: Service Workers for offline functionality and asset caching, IndexedDB for persistent storage of locations and preferences, Web App Manifest for installability. Accessibility: ARIA labels for screen reader support, keyboard navigation for all features, high contrast mode for visual impairment.",
    achievements: [
      "Voice Control Innovation: Hands-free map interaction using Web Speech API with support for multiple languages and natural language commands",
      "Offline Capability: Full PWA implementation with Service Workers enabling offline map access and TensorFlow.js for speech recognition without internet",
      "Accessibility First: Screen reader compatible, keyboard navigation, high contrast modes, and voice control making maps universally accessible",
      "Lightweight Performance: Built with vanilla JavaScript for fast load times, efficient caching strategies, and minimal resource usage",
      "Modern Web Technologies: Leverages latest APIs including Web Speech, Service Workers, IndexedDB, and TensorFlow.js for cutting-edge functionality"
    ],
    github: "https://github.com/iamrohitkandpal/Aakash-Vaani",
    image: "/projects/akashvaani.webp"
  }
];
