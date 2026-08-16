import { Injectable } from '@angular/core';
import { ProjectDetail } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly lawyerManagementSystem: ProjectDetail = {
    slug: 'lowyer',
    title: 'Lawyer Management System',
    category: 'Desktop App',
    subtitle:
      'A professional case management platform designed to simplify and organize modern legal workflows.',
    shortDescription:
      'A complete lawyer management system for managing clients, legal cases, sessions, documents, expenses, and daily legal operations from a centralized dashboard.',
    fullDescription:
      'Lawyer Management System is a full-stack application designed to help lawyers efficiently manage their daily legal activities. The system provides a centralized workspace where lawyers can manage clients, cases, court sessions, documents, notes, expenses, and important notifications. The application focuses on security, organization, usability, and efficient access to critical legal information through a professional administrative dashboard.',
    heroVideoUrl:
      '/Lawyer Management System/video.mp4',
    heroImageUrl:
      '/Lawyer Management System/Capture d’écran 2026-06-05 105958.png',
    overview:
      'The application provides a centralized management environment for a law office. Instead of relying on scattered documents and manual processes, lawyers can organize their clients, cases, sessions, documents, expenses, and notes in one structured system. The dashboard gives a clear overview of the current activity and provides quick access to the most important information.',
    challenge:
      'Managing legal cases involves a large amount of information, including client details, case status, court sessions, documents, notes, expenses, and deadlines. Keeping this information organized while maintaining secure access can become difficult when using traditional tools. The main challenge was to create a system that could centralize this information while remaining simple, intuitive, secure, and efficient for everyday use.',
    solution:
      'I designed and developed a complete management system with a structured dashboard and dedicated modules for the main operations of a law office. The solution uses a secure backend architecture with database-driven APIs and authentication, while the frontend provides a clean interface for managing cases, clients, documents, sessions, and financial information. The system was structured to make daily workflows faster and provide lawyers with a clear overview of their activities.',
    features: [
      {
        title: 'Case Management',
        description:
          'Create, update, track, and organize legal cases with detailed information such as case number, type, status, priority, court, judge, opposing party, and important dates.',
        icon: 'briefcase',
      },
      {
        title: 'Client Management',
        description:
          'Maintain structured client records and connect each client with their associated legal cases for quick access to relevant information.',
        icon: 'users',
      },
      {
        title: 'Session Management',
        description:
          'Schedule and manage court sessions, including dates, locations, duration, status, outcomes, and next steps.',
        icon: 'calendar',
      },
      {
        title: 'Document Management',
        description:
          'Organize important legal documents and associate them with the relevant cases and clients.',
        icon: 'file-text',
      },
      {
        title: 'Financial Tracking',
        description:
          'Monitor expenses and financial activity related to legal cases through a dedicated management interface.',
        icon: 'wallet',
      },
      {
        title: 'Dashboard Analytics',
        description:
          'Display important statistics and visual information about cases, clients, documents, sessions, and financial activity.',
        icon: 'chart',
      },
      {
        title: 'Notifications',
        description:
          'Provide important alerts and notifications to help the lawyer keep track of upcoming activities and relevant updates.',
        icon: 'bell',
      },
      {
        title: 'Security & Authentication',
        description:
          'Implement authentication and protected access to ensure that sensitive legal information is accessible only to authorized users.',
        icon: 'shield',
      },
    ],
    keyFeaturesList: [
      'Secure authentication system',
      'Centralized lawyer dashboard',
      'Complete case management',
      'Client management',
      'Court session scheduling',
      'Document organization',
      'Case notes management',
      'Expense tracking',
      'Notifications and alerts',
      'Case status and priority management',
      'Case type analytics',
      'Protected API endpoints',
      'MySQL database integration',
      'Responsive administrative interface',
    ],
    technologies: [
      { name: 'HTML5', category: 'Frontend', icon: '🌐' },
      { name: 'CSS3', category: 'Frontend', icon: '🎨' },
      { name: 'JavaScript', category: 'Frontend', icon: '📜' },
      { name: 'PHP', category: 'Backend', icon: '🐘' },
      { name: 'PDO', category: 'Backend', icon: '🔌' },
      { name: 'MySQL', category: 'Database', icon: '🐬' },
      { name: 'REST API', category: 'Backend', icon: '⚡' },
      { name: 'JSON', category: 'Data', icon: '📦' },
    ],
    gallery: [
      // {
      //   imageUrl:
      //     '/Lawyer Management System/Capture d’écran 2026-06-05 105958.png',
      //   title: 'Dashboard Overview',
      //   description:
      //     'Main dashboard providing a comprehensive overview of cases, clients, and upcoming sessions.',
      // },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185148.png',
        title: 'Case Management Index',
        description: 'Centralized case tracking with search and status filtering.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185303.png',
        title: 'Client Directory',
        description: 'Structured client profiles and connected legal cases.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185347.png',
        title: 'Client Information Form',
        description: 'Form interface for registering new clients and managing contacts.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185526.png',
        title: 'Detailed Case View',
        description: 'Deep dive into case timeline, associated documents, and judge notes.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185808.png',
        title: 'Court Sessions Scheduler',
        description: 'Calendar view for tracking hearing dates and court schedules.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185844.png',
        title: 'Document Archival',
        description: 'Secure legal document repository linked to active cases.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185925.png',
        title: 'Expense Tracking',
        description: 'Financial expense management and case fee tracking.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 185950.png',
        title: 'Case Notes & Reminders',
        description: 'Quick notes and private legal annotations workspace.',
      },
      {
        imageUrl:
          '/Lawyer Management System/Capture d’écran 2026-05-31 190020.png',
        title: 'System Settings',
        description: 'Administrative permissions and account preferences.',
      },
      // {
      //   imageUrl: '/Lawyer Management System/imgCard.png',
      //   title: 'System Overview Card',
      //   description: 'Visual summary card of system key highlights.',
      // },
    ],
    responsiveScreens: {
      desktop:
        '/Lawyer Management System/Capture d’écran 2026-06-05 105958.png',
    },
    liveDemoUrl: '',
    githubUrl: '',
    quote:
      'A centralized digital workspace that transforms complex legal information into a clear, organized, and efficient workflow.',
  };

  private readonly coffeeProject: ProjectDetail = {
    slug: 'coffee',
    title: 'Coffee',
    category: 'E-COMMERCE PLATFORM',
    subtitle: 'Modern coffee e-commerce experience built with Angular.',
    shortDescription:
      'Coffee is a modern e-commerce platform for coffee lovers. It offers a smooth shopping experience with beautiful animations, responsive design and powerful features.',
    fullDescription:
      'An end-to-end digital storefront tailored for artisanal coffee roasters. Featuring dynamic inventory filtering, single-origin flavor profiling, subscription workflow, real-time checkout validation, and an intuitive administrative portal.',
    heroVideoUrl:
      '/coffee/video.mp4',
    heroImageUrl: '/coffee/Screenshot 2026-08-14 163841.png',
    overview:
      'Coffee is an e-commerce web application that allows users to discover, explore and purchase their favorite coffee products. The goal was to build a fast, modern and user-friendly experience.',
    challenge:
      'Build a scalable e-commerce platform with a great UI/UX, smooth animations, secure checkout and an admin dashboard to manage products and orders.',
    solution:
      'I built a modular Angular application with a clean architecture, reusable components, state management and RESTful API integration for the admin part.',
    features: [
      {
        icon: '⚡',
        title: 'Fast & Smooth',
        description: 'Optimized performance and smooth animations.',
      },
      {
        icon: '🛡️',
        title: 'Secure Checkout',
        description: 'Safe payment integration and form validation.',
      },
      {
        icon: '📊',
        title: 'Admin Dashboard',
        description: 'Manage products, orders and users easily.',
      },
      {
        icon: '📱',
        title: 'Responsive',
        description: 'Fully responsive on all devices.',
      },
    ],
    keyFeaturesList: [
      'User Authentication',
      'Product Listing',
      'Shopping Cart',
      'Wishlist',
      'Checkout Process',
      'Order Tracking',
      'Admin Dashboard',
      'Responsive Design',
    ],
    technologies: [
      { name: 'HTML', category: 'Frontend', icon: '🌐', badgeColor: '#E34F26' },
      { name: 'TypeScript', category: 'Language', icon: '📜', badgeColor: '#3178C6' },
      { name: 'CSS', category: 'Frontend', icon: '🎨', badgeColor: '#1572B6' },
      { name: 'Angular', category: 'Frontend', icon: '🅰️', badgeColor: '#DD0031' },
      { name: 'MySQL', category: 'Database', icon: '🐬', badgeColor: '#4479A1' },
      { name: 'PHP', category: 'Backend', icon: '🐘', badgeColor: '#777BB4' },
      { name: 'PDO', category: 'Backend', icon: '🔌', badgeColor: '#4F5D95' },
      { name: 'JSON', category: 'Data', icon: '📦', badgeColor: '#000000' },
    ],
    gallery: [
      // {
      //   imageUrl: '/coffee/Screenshot 2026-08-14 163841.png',
      //   title: 'Hero Storefront',
      //   description: 'Interactive storefront with real-time category filtering.',
      // },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 163959.png',
        title: 'Product Catalog',
        description: 'Detailed origin history and flavor profile selector.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164023.png',
        title: 'Product Details View',
        description: 'Comprehensive single-origin item specs and subscription options.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164048.png',
        title: 'Checkout & Cart',
        description: 'Streamlined checkout with instant address validation.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164119.png',
        title: 'Analytics Dashboard',
        description: 'Real-time sales revenue breakdown and order status manager.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164145.png',
        title: 'Orders Management',
        description: 'Store administrator order processing and shipment status tracker.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164635.png',
        title: 'Customer Profile',
        description: 'Saved payment methods and subscription preferences.',
      },
      {
        imageUrl: '/coffee/Screenshot 2026-08-14 164708.png',
        title: 'Admin Settings',
        description: 'Store configuration and inventory settings.',
      },
      // {
      //   imageUrl: '/coffee/imgCard.png',
      //   title: 'Platform Overview Card',
      //   description: 'Visual summary card of Coffee Shop e-commerce platform.',
      // },
    ],
    responsiveScreens: {
      desktop: '/coffee/Screenshot 2026-08-14 163841.png',
    },
    liveDemoUrl: 'https://example.com/demo/coffee',
    githubUrl: 'https://github.com',
    quote:
      'This project was a great experience that helped me improve my Angular skills and UI/UX design.',
  };

  private readonly foodProject: ProjectDetail = {
    slug: 'food',
    title: 'Food Bliss',
    category: 'FINE DINING & BESPOKE EVENTS',
    subtitle: 'Cinematic fine dining platform and bespoke culinary event reservation web app.',
    shortDescription:
      'Food Bliss is an immersive culinary digital experience designed for a luxury Michelin-star dining establishment and bespoke private event catering service.',
    fullDescription:
      'Crafted to deliver a high-end gastronomic presentation, Food Bliss features interactive tasting menu explorations, private chef booking workflows, seasonal ingredient sourcing narratives, real-time table reservation systems, and an administrative event management suite.',
    heroVideoUrl:
      '/food/video.mp4',
    heroImageUrl: '/food/Screenshot 2026-08-14 164939.png',
    overview:
      'Food Bliss elevates fine dining reservations and luxury event catering by pairing editorial gastronomy imagery with an intuitive, seamless reservation platform.',
    challenge:
      'Capturing the sophisticated sensory experience of fine dining while engineering a reliable table reservation system and private event inquiry workflow.',
    solution:
      'I developed a high-contrast dark aesthetic web application using Angular standalone architecture, featuring custom culinary menu showcases, interactive calendar reservation engines, and cloud media pipelines.',
    features: [
      {
        icon: '🍽️',
        title: 'Interactive Tasting Menus',
        description: 'Explore seasonal multi-course tasting menus with paired wine selections and dietary options.',
      },
      {
        icon: '🍷',
        title: 'Sommelier Pairings',
        description: 'Detailed vintage cellar notes, terroir maps, and sommelier pairing recommendations.',
      },
      {
        icon: '📅',
        title: 'Table Reservations',
        description: 'Real-time seating availability engine with instant confirmation and party size configurator.',
      },
      {
        icon: '✨',
        title: 'Bespoke Event Booking',
        description: 'Custom private dining and corporate event request pipeline with menu customizer.',
      },
    ],
    keyFeaturesList: [
      'Interactive seasonal tasting menu catalog',
      'Real-time online table reservation system',
      'Sommelier wine pairing guide',
      'Private chef & bespoke event inquiry workflow',
      'Interactive kitchen team & chef profiles',
      'Seasonal local farm ingredient origin stories',
      'Admin portal for table allocation & booking management',
      'High-performance video hero media player',
      'Responsive design optimized for all screen sizes',
    ],
    technologies: [
      { name: 'HTML', category: 'Frontend', icon: '🌐', badgeColor: '#E34F26' },
      { name: 'TypeScript', category: 'Language', icon: '📜', badgeColor: '#3178C6' },
      { name: 'CSS', category: 'Frontend', icon: '🎨', badgeColor: '#1572B6' },
      { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
      { name: 'Angular', category: 'Frontend', icon: '🅰️', badgeColor: '#DD0031' },
      { name: 'MySQL', category: 'Database', icon: '🐬', badgeColor: '#4479A1' },
      { name: 'PHP', category: 'Backend', icon: '🐘', badgeColor: '#777BB4' },
      { name: 'PDO', category: 'Backend', icon: '🔌', badgeColor: '#4F5D95' },
      { name: 'JSON', category: 'Data', icon: '📦', badgeColor: '#000000' },
    ],
    gallery: [
      // {
      //   imageUrl: '/food/Screenshot 2026-08-14 164939.png',
      //   title: 'Cinematic Dining Hero',
      //   description: 'Interactive fine dining presentation.',
      // },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165016.png',
        title: 'Tasting Menu Catalog',
        description: 'Seasonal tasting menu showcase.',
      },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165052.png',
        title: 'Sommelier Wine Cellar',
        description: 'Vintage cellar guide and sommelier notes.',
      },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165126.png',
        title: 'Table Reservation Engine',
        description: 'Real-time seating availability engine.',
      },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165211.png',
        title: 'Bespoke Catering',
        description: 'Custom private event request pipeline.',
      },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165302.png',
        title: 'Chef Table Experience',
        description: 'Exclusive chef counter booking.',
      },
      {
        imageUrl: '/food/Screenshot 2026-08-14 165341.png',
        title: 'Culinary Team & Origin',
        description: 'Chef profiles and farm ingredient stories.',
      },
      // {
      //   imageUrl: '/food/imgCard.png',
      //   title: 'Overview Card',
      //   description: 'Summary card of Food Bliss culinary platform.',
      // },
    ],
    responsiveScreens: {
      desktop: '/food/Screenshot 2026-08-14 164939.png',
    },
    liveDemoUrl: '',
    githubUrl: '',
    quote:
      'Connecting culinary artistry with digital elegance to redefine the luxury dining experience.',
  };

  private readonly projects: Record<string, ProjectDetail> = {
    lowyer: this.lawyerManagementSystem,
    lawyer: this.lawyerManagementSystem,
    coffee: this.coffeeProject,
    food: this.foodProject,
    oasii: {
      slug: 'oasii',
      title: 'Oasii',
      category: 'BRANDING / IDENTITY',
      subtitle: 'Luxury eco-resort identity system and digital booking platform.',
      shortDescription:
        'Oasii is a holistic branding and digital experience designed for an exclusive eco-luxury sanctuary in North Africa.',
      fullDescription:
        'Crafted an organic visual identity combining earthy tones with modern typography. Developed a responsive web app enabling seamless villa reservations and spa package customized bookings.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
      overview:
        'Oasii wanted to elevate their luxury resort brand presence online with an immersive, high-conversion reservation platform.',
      challenge:
        'Translate the peaceful ambience of desert oases into a modern, fast web application with complex booking availability logic.',
      solution:
        'Built an elegant Angular app with smooth micro-interactions, custom interactive calendars, and seamless media presentations.',
      features: [
        {
          icon: '🌴',
          title: 'Immersive Visuals',
          description: 'High-definition video tours and editorial galleries.',
        },
        {
          icon: '📅',
          title: 'Smart Booking',
          description: 'Instant villa availability check and package addon selector.',
        },
        {
          icon: '🌐',
          title: 'Multilingual',
          description: 'Full internationalization for global travelers.',
        },
        {
          icon: '✨',
          title: 'Micro-animations',
          description: 'Smooth page transitions and scroll reveal triggers.',
        },
      ],
      keyFeaturesList: [
        'Villa Virtual Tours',
        'Real-time Availability Engine',
        'Custom Spa Package Configurator',
        'Multi-currency Payment Portal',
        'Interactive Map & Experiences',
        'Responsive Mobile Experience',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'GSAP', icon: '🟢', badgeColor: '#88CE02' },
        { name: 'Tailwind CSS', icon: '🌊', badgeColor: '#06B6D4' },
        { name: 'Figma', icon: '🎨', badgeColor: '#F24E1E' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
          title: 'Resort Overview',
        },
        {
          imageUrl:
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
          title: 'Villa Suite Selection',
        },
      ],
      responsiveScreens: {
        desktop:
          'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
      },
      liveDemoUrl: 'https://example.com/demo/oasii',
      githubUrl: 'https://github.com',
      quote:
        'A comprehensive exercise in editorial layout, branding consistency, and Angular state management.',
    },
    'baleh-haus': {
      slug: 'baleh-haus',
      title: 'Baleh Haus',
      category: 'BRANDING / MONOGRAM',
      subtitle: 'Architectural studio monograph and digital portfolio.',
      shortDescription:
        'Baleh Haus is a minimalist architectural concept studio specializing in sustainable residential sanctuaries.',
      fullDescription:
        'Designed a high-end monogram identity system and built an interactive architectural showcase featuring ultra-wide project photography, Blueprint inspection modes, and material exploration controls.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      overview:
        'Baleh Haus required a quiet, sophisticated digital portfolio to present residential architecture projects to high-net-worth clients.',
      challenge:
        'Balance high-resolution architectural photography with instantaneous loading times and sophisticated typography.',
      solution:
        'Constructed a progressive web application with lazy-loaded image pipelines, custom scroll triggers, and editorial spatial layouts.',
      features: [
        {
          icon: '🏛️',
          title: 'Architectural Blueprint View',
          description: 'Toggle between floorplan vectors and finished renders.',
        },
        {
          icon: '📐',
          title: 'Precision Typography',
          description: 'Refined serif display paired with technical monospace labels.',
        },
        {
          icon: '🔍',
          title: 'Material Zoom',
          description: 'High-detail inspect mode for timber, stone, and glass textures.',
        },
      ],
      keyFeaturesList: [
        'High-Resolution Image Galleries',
        'Interactive Floorplan Overlay',
        'Material Palette Inspector',
        'Minimalist Inquiry Form',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'CSS Grid', icon: '📐', badgeColor: '#264DE4' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
          title: 'Interior Sanctuary View',
        },
      ],
      liveDemoUrl: 'https://example.com/demo/baleh-haus',
      githubUrl: 'https://github.com',
      quote:
        'Emphasizing negative space, classic proportions, and architectural clarity.',
    },
    kemper: {
      slug: 'kemper',
      title: 'Kemper Contemporary Museum of Arts',
      category: 'IDENTITY / MOTION DESIGN',
      subtitle: 'Dynamic exhibition platform and digital artwork catalog.',
      shortDescription:
        'A bold exhibition brand system and interactive museum website for Kemper Museum of Art.',
      fullDescription:
        'Developed an immersive online gallery platform allowing art enthusiasts to explore upcoming exhibitions, stream curator video lectures, and purchase timed entry tickets.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1600&auto=format&fit=crop',
      overview:
        'The Kemper Museum needed to modernize its digital presence and create an accessible virtual gallery experience.',
      challenge:
        'Represent diverse art mediums online while providing an intuitive ticket booking system for visitors.',
      solution:
        'Designed a high-contrast dark green & gold aesthetic with dynamic filtering by medium, artist, and timeline period.',
      features: [
        {
          icon: '🖼️',
          title: 'Virtual Art Rooms',
          description: 'Interactive room tours and high-resolution artwork inspection.',
        },
        {
          icon: '🎟️',
          title: 'Timed Ticket Pass',
          description: 'Fast check-out flow with QR code ticket generation.',
        },
      ],
      keyFeaturesList: [
        'Exhibition Timeline',
        'Curator Video Archive',
        'Online Art Shop',
        'Interactive Museum Map',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'Tailwind CSS', icon: '🌊', badgeColor: '#06B6D4' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
          title: 'Exhibition Hallway',
        },
      ],
      liveDemoUrl: 'https://example.com/demo/kemper',
      githubUrl: 'https://github.com',
      quote: 'Creating a digital museum space that respects artistic expression.',
    },
    artiver: {
      slug: 'artiver',
      title: 'Artiver AI Art Awards',
      category: 'EVENT GRAPHICS / IDENTITY',
      subtitle: 'Global AI art festival branding and submission portal.',
      shortDescription:
        'Artiver is a premier international awards event celebrating generative AI art, digital prompt creators, and synthetic media pioneers.',
      fullDescription:
        'Designed event identity branding, live voting dashboards, and a submission gateway for digital artists worldwide.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
      overview:
        'Artiver required a high-energy, futuristic visual brand to launch their inaugural generative art competition.',
      challenge:
        'Handle thousands of high-file-size image & video submissions with public voting mechanisms.',
      solution:
        'Built a resilient Angular platform with cloud storage upload integration and real-time voting leaderboard.',
      features: [
        {
          icon: '🎨',
          title: 'Artwork Gateway',
          description: 'Direct submission portal with automatic prompt metadata tagging.',
        },
        {
          icon: '🏆',
          title: 'Live Leaderboard',
          description: 'Real-time public voting updates and judge scorecards.',
        },
      ],
      keyFeaturesList: [
        'Artist Submission Portal',
        'Live Community Voting',
        'Judge Evaluation Dashboard',
        'Event Livestream Hub',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'Firebase', icon: '🔥', badgeColor: '#FFCA28' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
          title: 'Main Stage Screen Graphics',
        },
      ],
      liveDemoUrl: 'https://example.com/demo/artiver',
      githubUrl: 'https://github.com',
      quote:
        'Bringing generative AI art into the spotlight with clean digital architecture.',
    },
    esi: {
      slug: 'esi',
      title: 'ESI',
      category: 'INTERACTION DESIGN / WEB APP',
      subtitle: 'Enterprise smart intelligence analytics suite.',
      shortDescription:
        'ESI is a data-visualization web application designed for real-time sensor telematics and industrial analytics.',
      fullDescription:
        'Engineered dynamic data charts, predictive maintenance alerts, and custom dashboard layouts for enterprise operators.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
      overview:
        'ESI required a high-performance web dashboard to visualize complex sensor data streams.',
      challenge:
        'Render thousands of live data points without causing UI latency or lag.',
      solution:
        'Leveraged Angular signals, RxJS reactive data pipes, and optimized Canvas chart rendering.',
      features: [
        {
          icon: '📈',
          title: 'Real-time Telematics',
          description: 'Sub-second sensor metrics streaming.',
        },
        {
          icon: '⚡',
          title: 'Predictive Alerts',
          description: 'Machine learning threshold notifications.',
        },
      ],
      keyFeaturesList: [
        'Interactive Charts',
        'Custom Metric Widgets',
        'Exportable PDF/CSV Reports',
        'Role-Based Access Control',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'RxJS', icon: '🟣', badgeColor: '#D8128F' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
          title: 'Analytics Dashboard',
        },
      ],
      liveDemoUrl: 'https://example.com/demo/esi',
      githubUrl: 'https://github.com',
      quote:
        'High-throughput data visualization engineered for speed and clarity.',
    },
    'google-next': {
      slug: 'google-next',
      title: 'Google Next',
      category: 'MOTION DESIGN / EXPERIENCE',
      subtitle: 'Interactive tech conference key visual & agenda web app.',
      shortDescription:
        'An interactive experience showcase built for Google Next keynotes and developer sessions.',
      fullDescription:
        'Designed 3D orb interactive graphics, keynote speaker schedules, and session bookmarking features for attendees.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
      overview:
        'Delivering a memorable visual atmosphere for tech conference attendees across devices.',
      challenge:
        'Create interactive 3D elements that run smoothly on mobile devices.',
      solution:
        'Combined lightweight WebGL shaders with Angular state routing and CSS keyframe animations.',
      features: [
        {
          icon: '🌐',
          title: '3D Orb Interaction',
          description:
            'Dynamic canvas shaders reacting to cursor and touch inputs.',
        },
        {
          icon: '🗓️',
          title: 'Agenda Planner',
          description: 'Personalized schedule builder with calendar export.',
        },
      ],
      keyFeaturesList: [
        'Keynote Livestream Player',
        'Interactive Speaker Directory',
        'Session Reservation Engine',
        'Venue Map & Guidance',
      ],
      technologies: [
        { name: 'Angular', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'WebGL', icon: '🌐', badgeColor: '#990000' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
          title: 'Stage & Keynote Screen',
        },
      ],
      liveDemoUrl: 'https://example.com/demo/google-next',
      githubUrl: 'https://github.com',
      quote:
        'Merging cutting-edge motion design with web application functionality.',
    },
    portfolio: {
      slug: 'portfolio',
      title: 'Developer Portfolio',
      category: 'PERSONAL PORTFOLIO',
      subtitle:
        'Modern high-performance developer portfolio built with Angular 21.',
      shortDescription:
        'An elegant portfolio application showcasing selected works, skills, and detailed case studies with editorial design aesthetics.',
      fullDescription:
        'Engineered with Angular standalone components, signals, CSS grid layouts, and dynamic routing for an unmatched user experience.',
      heroImageUrl:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
      overview:
        'A personal showcase designed to highlight frontend engineering expertise, design system mastery, and product polish.',
      challenge:
        'Deliver a unique, fast, responsive portfolio that stands out visually without compromising accessibility or performance.',
      solution:
        'Crafted a warm editorial cream & serif aesthetic with modular architecture and zero heavy framework overhead.',
      features: [
        {
          icon: '🎨',
          title: 'Editorial Aesthetics',
          description:
            'Warm cream backgrounds, gold accents, and serif display typography.',
        },
        {
          icon: '⚡',
          title: 'Angular Signals',
          description: 'Ultra-fast reactive state and smooth routing.',
        },
      ],
      keyFeaturesList: [
        'Dynamic Project Case Studies',
        'Interactive Work Filter',
        'Skills & Technology Matrix',
        'Fully Responsive Breakpoints',
      ],
      technologies: [
        { name: 'Angular 21', icon: '🅰️', badgeColor: '#DD0031' },
        { name: 'TypeScript', icon: 'TS', badgeColor: '#3178C6' },
        { name: 'Vanilla CSS', icon: '🎨', badgeColor: '#1572B6' },
      ],
      gallery: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
          title: 'Portfolio Home View',
        },
      ],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      quote: 'Crafted with precision, passion, and purpose.',
    },
  };

  getProjectBySlug(slug: string): ProjectDetail | undefined {
    if (!slug) return this.lawyerManagementSystem;
    const key = slug.toLowerCase().trim();
    return this.projects[key] || this.lawyerManagementSystem;
  }
}
