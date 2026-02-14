import type { Article, LiveMatch, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'cricket', name: 'Cricket', slug: 'cricket', color: '#22c55e' },
  { id: 'politics', name: 'Politics', slug: 'politics', color: '#3b82f6' },
  { id: 'health', name: 'Health', slug: 'health', color: '#ef4444' },
  { id: 'bollywood', name: 'Bollywood', slug: 'bollywood', color: '#ec4899' },
  { id: 'business', name: 'Business', slug: 'business', color: '#f59e0b' },
  { id: 'education', name: 'Education', slug: 'education', color: '#8b5cf6' },
  { id: 'technology', name: 'Technology', slug: 'technology', color: '#06b6d4' },
];

export const articles: Article[] = [
  // India Innovates 2026 - Featured Hero Article
  {
    id: 'india-innovates-2026',
    title: 'India Innovates 2026: The Country\'s Biggest Tech Innovation Summit Coming to Bharat Mandapam',
    excerpt: 'Mark your calendars for March 28th as India\'s largest technology and innovation summit arrives at New Delhi\'s iconic Bharat Mandapam, organized by Hansa AI Technologies Pvt. Ltd.',
    content: `<p class="text-lg leading-relaxed mb-6">India is set to witness its most ambitious technology gathering as <strong>India Innovates 2026</strong> prepares to open its doors at the prestigious Bharat Mandapam in New Delhi on <strong>March 28, 2026</strong>. Organized by <strong>Hansa AI Technologies Pvt. Ltd.</strong>, this landmark event promises to be the country's biggest tech innovation summit ever.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">A Platform for India's Tech Revolution</h2>
<p class="mb-6">The summit will bring together over 500 exhibitors, 10,000+ attendees, and 200+ speakers from across the globe. From artificial intelligence and machine learning to quantum computing and sustainable technology, India Innovates 2026 will showcase cutting-edge innovations that are shaping the future.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">What to Expect</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Keynote Sessions:</strong> Industry leaders from Google, Microsoft, Infosys, and TCS will share insights on the future of technology</li>
  <li><strong>Startup Pavilion:</strong> Over 200 Indian startups will showcase their innovative solutions</li>
  <li><strong>AI & Robotics Zone:</strong> Live demonstrations of the latest in artificial intelligence and robotics</li>
  <li><strong>Investor Connect:</strong> Exclusive networking sessions with VCs and angel investors</li>
  <li><strong>Hackathon:</strong> A 24-hour coding challenge with prizes worth ₹50 lakhs</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">About Hansa AI Technologies</h2>
<p class="mb-6">Hansa AI Technologies Pvt. Ltd., the organizing force behind this mega event, has been at the forefront of AI innovation in India. Founded with a vision to democratize artificial intelligence, Hansa AI has been instrumental in bringing together the tech community to foster collaboration and innovation.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"India Innovates 2026 is not just an event; it's a movement to position India as the global hub for technological innovation. We're bringing together the brightest minds to shape tomorrow's solutions today."<br/><span class="text-sm not-italic font-semibold">— CEO, Hansa AI Technologies Pvt. Ltd.</span></blockquote>

<h2 class="text-2xl font-bold mt-8 mb-4">Venue: The Iconic Bharat Mandapam</h2>
<p class="mb-6">The choice of Bharat Mandapam as the venue underscores the significance of this event. Located in the heart of New Delhi at Pragati Maidan, the state-of-the-art convention center spans over 123,000 square meters, making it the ideal location for an event of this magnitude.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Registration Details</h2>
<p class="mb-6">Early bird registrations are now open with special discounts for students and startups. Corporate passes and exhibition booths are available for businesses looking to showcase their innovations.</p>

<div class="bg-neutral-100 p-6 rounded-xl my-8">
  <h3 class="font-bold text-lg mb-2">Event Details at a Glance</h3>
  <ul class="space-y-1">
    <li><strong>Date:</strong> March 28, 2026</li>
    <li><strong>Venue:</strong> Bharat Mandapam, Pragati Maidan, New Delhi</li>
    <li><strong>Organizer:</strong> Hansa AI Technologies Pvt. Ltd.</li>
    <li><strong>Expected Attendance:</strong> 10,000+</li>
  </ul>
</div>

<p class="mb-6">With the government's push for 'Digital India' and 'Make in India' initiatives, India Innovates 2026 comes at a crucial time when the country is positioning itself as a global technology powerhouse. This summit is expected to generate significant investment opportunities and forge partnerships that will drive India's tech ecosystem forward.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    author: 'The Fista Tech Desk',
    publishedAt: '30 min',
    readTime: '6 min read',
    isFeatured: true,
    isTrending: true,
  },
  // Featured/Hero Articles
  {
    id: '1',
    title: 'Virat Kohli Announces Retirement from T20 Internationals After World Cup Victory',
    excerpt: 'In an emotional press conference, Kohli revealed his decision to step away from the shortest format after leading India to glory.',
    content: 'Full article content...',
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop',
    author: 'Rajesh Sharma',
    publishedAt: '45 min',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: '2',
    title: 'Union Budget 2026: Major Tax Relief for Middle Class, New Schemes for Farmers',
    excerpt: 'Finance Minister announces significant income tax cuts and new agricultural subsidies in the annual budget.',
    content: 'Full article content...',
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop',
    author: 'Priya Menon',
    publishedAt: '2 hr',
    readTime: '8 min read',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: '3',
    title: 'AIIMS Delhi Launches Revolutionary Cancer Treatment Using AI-Powered Diagnostics',
    excerpt: 'The new technology promises to detect early-stage cancers with 98% accuracy, potentially saving millions of lives.',
    content: 'Full article content...',
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop',
    author: 'Dr. Anita Singh',
    publishedAt: '3 hr',
    readTime: '6 min read',
    isTrending: true,
  },
  // Trending Articles
  {
    id: '4',
    title: 'Shah Rukh Khan\'s Next Film to Be India\'s Most Expensive Production Ever',
    excerpt: 'SRK teams up with acclaimed director Rajkumar Hirani for an epic historical drama with a budget of ₹500 crores.',
    content: 'Full article content...',
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop',
    author: 'Aishwarya Kapoor',
    publishedAt: '4 hr',
    readTime: '4 min read',
    isTrending: true,
  },
  {
    id: '5',
    title: 'Sensex Hits All-Time High of 85,000; IT Stocks Lead the Rally',
    excerpt: 'Indian markets continue their bull run as foreign institutional investors pour money into the economy.',
    content: 'Full article content...',
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop',
    author: 'Vikram Patel',
    publishedAt: '5 hr',
    readTime: '5 min read',
    isTrending: true,
  },
  {
    id: '6',
    title: 'JEE Advanced 2026 Results Declared: IIT Bombay Tops Choice Among Rankers',
    excerpt: 'Over 50,000 students qualify for IIT admissions; new record set in female candidate selections.',
    content: 'Full article content...',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
    author: 'Neha Gupta',
    publishedAt: '6 hr',
    readTime: '4 min read',
    isTrending: true,
  },
  // More Articles
  {
    id: '7',
    title: 'Rohit Sharma Surpasses Tendulkar\'s ODI Century Record in Asia Cup',
    excerpt: 'The Indian captain hits his 50th ODI hundred, breaking the Master Blaster\'s long-standing record.',
    content: 'Full article content...',
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop',
    author: 'Ravi Kumar',
    publishedAt: '7 hr',
    readTime: '5 min read',
  },
  {
    id: '8',
    title: 'PM Modi Inaugurates India\'s First Underwater Metro in Kolkata',
    excerpt: 'The historic Hooghly River tunnel connects Howrah to Esplanade, revolutionizing city transport.',
    content: 'Full article content...',
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop',
    author: 'Sanjay Das',
    publishedAt: '8 hr',
    readTime: '6 min read',
  },
  {
    id: '9',
    title: 'Ayurveda Gets Global Recognition: WHO Includes 150 Indian Herbs in Essential Medicines List',
    excerpt: 'Traditional Indian medicine achieves major milestone as World Health Organization endorses Ayurvedic treatments.',
    content: 'Full article content...',
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    author: 'Dr. Maya Iyer',
    publishedAt: '9 hr',
    readTime: '7 min read',
  },
  {
    id: '10',
    title: 'Deepika Padukone and Ranveer Singh Welcome Their First Child',
    excerpt: 'Bollywood\'s power couple announces the arrival of their baby girl; fans flood social media with wishes.',
    content: 'Full article content...',
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&auto=format&fit=crop',
    author: 'Pooja Sharma',
    publishedAt: '10 hr',
    readTime: '3 min read',
  },
  {
    id: '11',
    title: 'Reliance Industries Acquires Major European Tech Startup for $5 Billion',
    excerpt: 'Mukesh Ambani\'s conglomerate continues global expansion with biggest overseas acquisition to date.',
    content: 'Full article content...',
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    author: 'Amit Verma',
    publishedAt: '11 hr',
    readTime: '6 min read',
  },
  {
    id: '12',
    title: 'CBSE Introduces Skill-Based Assessment in Class 10, 12 Board Exams',
    excerpt: 'New evaluation system to focus on practical skills and critical thinking rather than rote memorization.',
    content: 'Full article content...',
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    author: 'Kavita Reddy',
    publishedAt: '12 hr',
    readTime: '5 min read',
  },
  {
    id: '13',
    title: 'India vs Australia: Bumrah\'s 7-Wicket Haul Gives India Upper Hand in Test Series',
    excerpt: 'Star pacer dismantles Australian batting lineup as India takes control of the crucial Border-Gavaskar Trophy match.',
    content: 'Full article content...',
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop',
    author: 'Suresh Nair',
    publishedAt: '1 hr',
    readTime: '4 min read',
    isFeatured: true,
  },
  {
    id: '14',
    title: 'Opposition Parties Unite to Form New Alliance Ahead of State Elections',
    excerpt: 'Leaders from multiple parties announce coalition to contest upcoming assembly polls in five states.',
    content: 'Full article content...',
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop',
    author: 'Rakesh Mehta',
    publishedAt: '13 hr',
    readTime: '7 min read',
  },
  {
    id: '15',
    title: 'Government Launches Free Health Insurance for Gig Workers',
    excerpt: 'New scheme to cover 10 million delivery agents, cab drivers, and freelancers under Ayushman Bharat.',
    content: 'Full article content...',
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    author: 'Dr. Rahul Saxena',
    publishedAt: '14 hr',
    readTime: '5 min read',
  },
  {
    id: '16',
    title: 'Alia Bhatt\'s Hollywood Debut Film Becomes Global Box Office Hit',
    excerpt: 'Indian actress\' first international project crosses $300 million worldwide, breaking records.',
    content: 'Full article content...',
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop',
    author: 'Simran Kaur',
    publishedAt: '15 hr',
    readTime: '4 min read',
  },
];

export const liveMatches: LiveMatch[] = [
  {
    id: '1',
    sport: 'Cricket',
    tournament: '1st Test',
    venue: "Lord's",
    innings: '2nd Innings',
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '356/4',
      overs: '(102 ov)',
    },
    team2: {
      name: 'England',
      shortName: 'ENG',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '289',
      overs: '(all out)',
    },
    status: 'live',
  },
  {
    id: '2',
    sport: 'Cricket',
    tournament: 'IPL 2026',
    venue: 'Mumbai',
    team1: {
      name: 'Mumbai Indians',
      shortName: 'MI',
      flag: '💙',
      score: '185/6',
      overs: '(20 ov)',
    },
    team2: {
      name: 'Chennai Super Kings',
      shortName: 'CSK',
      flag: '💛',
      score: '142/3',
      overs: '(15.2 ov)',
    },
    status: 'live',
  },
  {
    id: '3',
    sport: 'Football',
    tournament: 'ISL - Match Day 12',
    venue: 'Kolkata',
    team1: {
      name: 'ATK Mohun Bagan',
      shortName: 'ATKMB',
      flag: '🟢',
      score: '2',
    },
    team2: {
      name: 'Mumbai City FC',
      shortName: 'MCFC',
      flag: '🔵',
      score: '1',
    },
    status: 'live',
  },
];

export const getCategoryColor = (category: string): string => {
  const categoryInfo = categories.find(c => c.id === category);
  return categoryInfo?.color || '#FFD700';
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getTrendingArticles = (): Article[] => {
  return articles.filter(article => article.isTrending);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.isFeatured);
};
