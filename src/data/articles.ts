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
    title: 'India Innovates 2026: 5000+ Developers Set to Break Guinness World Record at Bharat Mandapam',
    excerpt: 'India is about to make history! Over 5000 engineers and developers will gather at Bharat Mandapam on March 28th to break the Guinness World Record, currently held by Saudi Arabia with 3921 developers.',
    content: `<p class="text-lg leading-relaxed mb-6">India is set to create history as <strong>India Innovates 2026</strong> prepares to break the <strong>Guinness World Record</strong> for the largest gathering of developers under one roof. The current record is held by <strong>Saudi Arabia</strong>, where 3921 developers assembled in Riyadh. On <strong>March 28, 2026</strong>, at the prestigious <strong>Bharat Mandapam</strong> in New Delhi, more than <strong>5000+ engineers and developers</strong> will come together, organized by <strong>Hansa AI Technologies Pvt. Ltd.</strong></p>

<h2 class="text-2xl font-bold mt-8 mb-4">Breaking the World Record</h2>
<p class="mb-6">The Guinness World Record for the largest gathering of software developers is currently held by Saudi Arabia, achieved during a tech event in Riyadh where 3921 developers participated. India Innovates 2026 aims to shatter this record by bringing together more than 5000 engineers, developers, and tech professionals from across the nation. This historic attempt will not only put India in the Guinness Book of World Records but also showcase the country's massive tech talent pool to the world.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Distinguished Chief Guests</h2>
<p class="mb-6">The event will be graced by some of the most prominent leaders and dignitaries:</p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Shri Ashwini Vaishnaw</strong> - Union Minister of Railways, Electronics & IT</li>
  <li><strong>Smt. Rekha Gupta</strong> - Chief Minister of Delhi</li>
  <li><strong>Shri Parvesh Verma</strong> - Deputy Chief Minister of Delhi & PWD Minister</li>
  <li><strong>Shri Manjinder Singh Sirsa</strong> - Environment Minister of Delhi</li>
  <li><strong>Shri Kapil Mishra</strong> - Minister of Art and Culture of Delhi</li>
  <li><strong>20+ IAS/IFS/IRS Officers</strong> - Senior bureaucrats from various ministries</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">What to Expect</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>World Record Attempt:</strong> Be part of history as 5000+ developers assemble to break the Guinness World Record</li>
  <li><strong>Keynote Sessions:</strong> Industry leaders and policy makers will share insights on India's tech future</li>
  <li><strong>Networking Opportunities:</strong> Connect with thousands of fellow developers and tech enthusiasts</li>
  <li><strong>Innovation Showcase:</strong> Witness cutting-edge technologies and innovations from Indian tech companies</li>
  <li><strong>Career Fair:</strong> Top tech companies will be present for recruitment opportunities</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">About Hansa AI Technologies</h2>
<p class="mb-6">Hansa AI Technologies Pvt. Ltd., the organizing force behind this historic event, has been at the forefront of AI innovation in India. Founded with a vision to democratize artificial intelligence, Hansa AI has taken the ambitious initiative to put India on the global map by breaking this prestigious world record.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"India has the world's largest pool of tech talent, and India Innovates 2026 is our opportunity to showcase this to the world. Breaking the Guinness World Record with 5000+ developers will be a proud moment for every Indian in the tech industry."<br/><span class="text-sm not-italic font-semibold">— CEO, Hansa AI Technologies Pvt. Ltd.</span></blockquote>

<h2 class="text-2xl font-bold mt-8 mb-4">Venue: The Iconic Bharat Mandapam</h2>
<p class="mb-6">Bharat Mandapam, India's largest convention center located at Pragati Maidan, New Delhi, is the perfect venue for this historic attempt. Spanning over 123,000 square meters, the state-of-the-art facility can comfortably accommodate the massive gathering of developers while providing world-class amenities.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">How to Participate</h2>
<p class="mb-6">Registrations are now open for all software developers, engineers, and tech professionals who want to be part of this historic world record attempt. Whether you're a student, working professional, or startup founder - if you code, you're welcome to join!</p>

<div class="bg-blue-50 p-6 rounded-xl my-8 border border-blue-200">
  <h3 class="font-bold text-lg mb-2 text-blue-800">Register Now!</h3>
  <p class="mb-3 text-blue-700">Secure your spot in history by registering for India Innovates 2026:</p>
  <a href="https://unstop.com/conferences/india-innovates-2026-municipal-corporation-of-delhi-1625920?utm_medium=Share&utm_source=rishajai19112&utm_campaign=Conferences" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">Register on Unstop →</a>
</div>

<div class="bg-neutral-100 p-6 rounded-xl my-8">
  <h3 class="font-bold text-lg mb-2">Event Details at a Glance</h3>
  <ul class="space-y-1">
    <li><strong>Date:</strong> March 28, 2026</li>
    <li><strong>Venue:</strong> Bharat Mandapam, Pragati Maidan, New Delhi</li>
    <li><strong>Organizer:</strong> Hansa AI Technologies Pvt. Ltd.</li>
    <li><strong>Expected Participants:</strong> 5000+ Developers</li>
    <li><strong>World Record Target:</strong> Beat Saudi Arabia's 3921 developers</li>
  </ul>
</div>

<p class="mb-6">This is not just an event; it's a movement to establish India as the global leader in technology. Join us on March 28, 2026, to be part of history and help India claim the Guinness World Record!</p>`,
    category: 'technology',
    imageUrl: '/poster.png',
    author: 'The Fista Tech Desk',
    publishedAt: '30 min',
    readTime: '6 min read',
    isFeatured: true,
    isTrending: true,
  },
  // Featured/Hero Articles
  {
    id: '1',
    title: 'ICC T20 World Cup: Varun Chakaravarthy\'s Magic Helps India Complete Group Stage Undefeated',
    excerpt: 'Varun Chakaravarthy\'s stunning 4-wicket haul against Netherlands ensures India finish group stage with perfect record. Super 8s await.',
    content: `<p class="text-lg leading-relaxed mb-6">Ahmedabad, February 19, 2026 - Varun Chakaravarthy produced a match-winning performance as India defeated Netherlands by 17 runs at the Narendra Modi Stadium to complete their group stage campaign with a perfect 4-0 record in the ICC T20 World Cup 2026.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Chakaravarthy\'s Masterclass</h2>
<p class="mb-6">The Tamil Nadu spinner claimed 4/32 in his four overs, including the crucial wickets of Netherlands captain Scott Edwards and Max O\'Dowd. His mystery spin variations proved too difficult for the Dutch batters as they struggled to read his deliveries on a turning Ahmedabad track.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">India\'s Super 8 Qualification</h2>
<p class="mb-6">Having posted 187/4 thanks to Shivam Dube\'s quickfire 47* and Virat Kohli\'s steady 54, India restricted Netherlands to 170/8. The victory ensures India top Group A with maximum points and excellent net run rate heading into the Super 8 stage.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Tournament Progress</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Group Stage:</strong> Won 4/4 matches with impressive margins</li>
  <li><strong>Next Phase:</strong> Super 8s starting February 22nd</li>
  <li><strong>Key Players:</strong> Chakaravarthy, Kohli, and Dube in excellent form</li>
  <li><strong>Captain Rohit:</strong> Praised team\'s bowling depth and batting flexibility</li>
</ul>

<p class="mb-6">India will now face tougher opposition in the Super 8 stage as they aim for their third T20 World Cup title after 2007 and 2024 victories.</p>`,
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
    title: 'Historic Moment: Jammu & Kashmir Reaches First-Ever Ranji Trophy Final',
    excerpt: 'From cricket\'s punching bag to title contenders - J&K creates history by reaching their maiden Ranji Trophy final, breaking decades of struggle.',
    content: `<p class="text-lg leading-relaxed mb-6">Chennai, February 19, 2026 - Jammu & Kashmir scripted a fairytale chapter in Indian cricket by reaching their first-ever Ranji Trophy final, defeating Jharkhand by 4 wickets in a thrilling semi-final at the M.A. Chidambaram Stadium.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">From Struggle to Glory</h2>
<p class="mb-6">Once considered cricket\'s \'punching bag\', J&K\'s transformation has been remarkable. The team that struggled with basic facilities and often traveled 60km for training has now reached the pinnacle of domestic cricket. Their journey represents hope and determination against all odds.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Key Heroes of the Campaign</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Shubham Khajuria:</strong> Leading run-scorer with 912 runs in the tournament</li>
  <li><strong>Auqib Nabi:</strong> 67 wickets this season, spearheading the bowling attack</li>
  <li><strong>Abdul Samad:</strong> Aggressive middle-order batting and crucial wickets</li>
  <li><strong>Paras Dogra:</strong> Veteran presence and leadership in crucial moments</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">The Final Challenge</h2>
<p class="mb-6">J&K will now face defending champions Mumbai in the final, starting February 23rd. Despite being underdogs, their fearless approach and team unity have made them genuine title contenders. The entire region celebrates this historic achievement.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">
"This is not just a cricket match for us. It\'s about representing a region that has faced immense challenges. Every ball we play is for our people."<br/><span class="text-sm not-italic font-semibold">— Shubham Khajuria, J&K Captain</span>
</blockquote>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop',
    author: 'Ravi Kumar',
    publishedAt: '1 hr',
    readTime: '7 min read',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: '3',
    title: 'Lost Boy\'s 14-Year Journey: From Wrong Train at Age 6 to Home at 22',
    excerpt: 'After 14 years of separation, a young man from Jharkhand finally returns home. His incredible journey of survival and hope captures the nation\'s heart.',
    content: `<p class="text-lg leading-relaxed mb-6">Ranchi, February 19, 2026 - In an emotional reunion that has touched millions across India, 22-year-old Ravi Kumar finally returned home to his family in Jharkhand after being separated for 14 years when he boarded the wrong train as a 6-year-old child.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">The Wrong Turn</h2>
<p class="mb-6">In 2012, young Ravi was supposed to board a train to visit his grandmother in a neighboring district. Confused and scared, he got on the wrong train that took him hundreds of kilometers away to West Bengal. Unable to communicate clearly due to his age and trauma, he spent years in various shelters and foster homes.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Years of Searching</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Family\'s Struggle:</strong> Parents never stopped searching, filing missing person reports across multiple states</li>
  <li><strong>Police Efforts:</strong> Various state police departments worked on the case intermittently</li>
  <li><strong>Social Workers:</strong> NGOs and child welfare organizations provided care and education</li>
  <li><strong>Technology Aid:</strong> Recent facial recognition technology helped connect the dots</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">The Reunion</h2>
<p class="mb-6">The breakthrough came when Ravi, now 22 and working as a mechanic in Kolkata, shared his story with a local NGO worker. Using advanced facial recognition software and cross-referencing with missing person databases, authorities finally matched him with his family\'s 14-year-old missing person report.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">
"I never forgot my mother\'s face or my village. I always believed I would find my way back home someday. Today is that day."<br/><span class="text-sm not-italic font-semibold">— Ravi Kumar</span>
</blockquote>

<p class="mb-6">The reunion at his village in Lohardaga district was attended by hundreds of villagers who had never given up hope. Ravi\'s story highlights both the vulnerabilities in India\'s child protection system and the power of persistent love and hope.</p>`,
    content: `<p class="text-lg leading-relaxed mb-6">Bengaluru, February 19, 2026 - The AI Impact Summit 2026 has concluded with major announcements in AI-powered healthcare solutions that promise to revolutionize preventive care across India.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Healthcare AI Breakthroughs</h2>
<p class="mb-6">Leading tech companies unveiled new AI diagnostic tools that can detect cardiovascular diseases, diabetes, and certain cancers 90% faster than traditional methods. These innovations are expected to significantly improve early detection rates across rural and urban healthcare centers.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Key Announcements</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>AI Screening Tool:</strong> Detects diseases from simple blood tests in 15 minutes</li>
  <li><strong>Telemedicine Platform:</strong> AI-powered remote consultation system for rural areas</li>
  <li><strong>Drug Discovery:</strong> AI models to accelerate pharmaceutical research by 50%</li>
  <li><strong>Mental Health:</strong> AI chatbots for initial psychological assessment and support</li>
</ul>

<p class="mb-6">Union Health Minister praised the initiative as a "game-changer for India's healthcare ecosystem" and announced government support for nationwide deployment of these AI solutions.</p>`,
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
    title: 'Maharashtra Village Makes History: Declares Itself Completely Caste-Free',
    excerpt: 'Soundala village in Maharashtra passes groundbreaking resolution to end caste-based discrimination, setting example for rural India.',
    content: `<p class="text-lg leading-relaxed mb-6">Pune, February 19, 2026 - In a groundbreaking move that has garnered national attention, Soundala village in Maharashtra\'s Solapur district has declared itself completely \'caste-free\' and implemented comprehensive measures to end all forms of social discrimination.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Historic Resolution</h2>
<p class="mb-6">The village panchayat, led by Sarpanch Sunita Pawar, passed a unanimous resolution declaring that caste, religion, or race will no longer determine social interactions in the village. The 3,200-resident village has committed to creating an inclusive society where dignity and respect prevail.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Concrete Measures</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Social Mixing:</strong> Community events and festivals will be celebrated together regardless of background</li>
  <li><strong>Economic Support:</strong> Equal access to development schemes and village resources</li>
  <li><strong>Education:</strong> Special funds for education of children from all communities</li>
  <li><strong>Women\'s Rights:</strong> Enhanced support for widow remarriage and women\'s empowerment</li>
  <li><strong>Language Policy:</strong> Ban on derogatory language towards any community</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Community Response</h2>
<p class="mb-6">The initiative has received overwhelming support from villagers across all communities. The village has also established a monitoring committee to ensure the resolution\'s implementation and address any violations.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">
"We don\'t want hatred to reach our doorstep. Our village will be a model for unity and human dignity."<br/><span class="text-sm not-italic font-semibold">— Sunita Pawar, Village Sarpanch</span>
</blockquote>

<p class="mb-6">Social activists and government officials have praised Soundala\'s initiative, calling it a beacon of hope for rural India\'s social transformation. The village plans to share its model with other communities across Maharashtra.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop',
    author: 'Meera Joshi',
    publishedAt: '35 min',
    readTime: '6 min read',
    isTrending: true,
  },
  {
    id: '5',
    title: 'Punjab Police Under Scanner: 34 Encounters in 3 Months Raise Serious Questions',
    excerpt: 'Investigation reveals alarming frequency of police encounters in Punjab with one-third occurring while suspects were in custody. Rights groups demand inquiry.',
    content: `<p class="text-lg leading-relaxed mb-6">Chandigarh, February 19, 2026 - An investigation by The Indian Express has revealed a concerning pattern of police encounters in Punjab, with 34 incidents reported between November 2025 and January 2026, resulting in 5 deaths and 45 injuries.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Alarming Statistics</h2>
<p class="mb-6">The data shows Punjab Police reported more than one encounter every three days during this period. Most concerning is that approximately one-third of these encounters occurred while suspects were already in police custody, raising serious questions about the circumstances surrounding these incidents.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Pattern Analysis</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Frequency:</strong> 34 encounters in 92 days (one every 2.7 days)</li>
  <li><strong>Casualties:</strong> 5 deaths and 45 people injured</li>
  <li><strong>Custody Cases:</strong> 11 incidents while suspects were in police custody</li>
  <li><strong>Geography:</strong> Incidents spread across multiple districts</li>
  <li><strong>Cases:</strong> Mostly involving drug trafficking and weapons charges</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Rights Groups\'\' Concerns</h2>
<p class="mb-6">Human rights organizations have expressed serious concerns about the frequency and circumstances of these encounters. They have demanded judicial inquiries into the incidents, particularly those involving suspects already in custody.</p>

<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">
"Such a high frequency of encounters suggests either a breakdown in police procedure or a deliberate pattern that needs immediate investigation."<br/><span class="text-sm not-italic font-semibold">— Senior Human Rights Lawyer</span>
</blockquote>

<p class="mb-6">The Punjab government has announced it will review the circumstances of these encounters and ensure all procedures were followed according to Supreme Court guidelines on police encounters.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-dcea62de1068?w=800&auto=format&fit=crop',
    author: 'Harpreet Singh',
    publishedAt: '2 hr',
    readTime: '7 min read',
    isTrending: true,
  },
  {
    id: '6',
    title: 'AI Impact Summit 2026: IITs Showcase Revolutionary Healthcare and Agriculture Solutions',
    excerpt: 'Indian Institutes of Technology present groundbreaking AI applications from flood prediction to cancer detection, demonstrating India\'s technological prowess.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 19, 2026 - The AI Impact Summit 2026 has become a showcase for Indian innovation as leading IITs presented breakthrough AI applications spanning healthcare, agriculture, and disaster management, demonstrating India\'s growing technological capabilities.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Healthcare Innovations</h2>
<p class="mb-6">IIT researchers unveiled revolutionary low-cost AI tools for early disease detection. These include breath analyzers that can detect cancer markers, oral swab tests for kidney disease screening, and AI-powered microscopy for faster pathology diagnosis.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Agricultural Solutions</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Crop Monitoring:</strong> Satellite-based AI for real-time crop health assessment</li>
  <li><strong>Pest Detection:</strong> Mobile apps that identify crop diseases from photos</li>
  <li><strong>Weather Prediction:</strong> Hyper-local weather forecasting for farmers</li>
  <li><strong>Yield Optimization:</strong> AI-driven recommendations for fertilizer and water usage</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Disaster Management</h2>
<p class="mb-6">The summit highlighted AI systems for flood prediction, earthquake early warning, and disaster response coordination. These solutions are already being tested in various Indian states and have shown promising results in improving disaster preparedness.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Global Recognition</h2>
<p class="mb-6">International delegates at the summit praised India\'s focus on practical, affordable AI solutions that address real-world problems. The innovations demonstrated showcase how AI can be leveraged for social good and sustainable development.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop',
    author: 'Dr. Priya Sharma',
    publishedAt: '3 hr',
    readTime: '5 min read',
    isTrending: true,
  },
  {
    id: '6',
    title: 'TATA-Airbus Helicopter Manufacturing Facility Inaugurated in Hyderabad',
    excerpt: 'TATA Group and Airbus officially inaugurate joint helicopter manufacturing facility in Hyderabad, marking major milestone in India\'s aerospace sector.',
    content: `<p class="text-lg leading-relaxed mb-6">Hyderabad, February 19, 2026 - TATA Group and Airbus have officially inaugurated their joint helicopter manufacturing facility in Hyderabad, marking a major milestone in India's aerospace manufacturing sector.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Manufacturing Excellence</h2>
<p class="mb-6">The state-of-the-art facility will produce H125 helicopters for both domestic and international markets. The plant has an initial capacity of manufacturing 36 helicopters annually, with plans to increase production to 50 units by 2028.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Economic Impact</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Job Creation:</strong> Over 5,000 direct and indirect jobs</li>
  <li><strong>Investment:</strong> ₹2,000 crore facility investment</li>
  <li><strong>Export Potential:</strong> 60% of production targeted for exports</li>
  <li><strong>Local Content:</strong> 85% localization by 2027</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Strategic Importance</h2>
<p class="mb-6">Defence Minister praised the initiative as strengthening India's defence manufacturing capabilities under the "Atmanirbhar Bharat" program. The helicopters will serve both civilian aviation and defence requirements.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format&fit=crop',
    author: 'Neha Gupta',
    publishedAt: '6 hr',
    readTime: '4 min read',
    isTrending: true,
  },
  // More Articles
  {
    id: '7',
    title: 'T20 World Cup 2026: India Maintains Perfect Record, Secures Super 8 Berth',
    excerpt: 'India defeated Netherlands by 17 runs at Ahmedabad to maintain 100% record. Shivam Dube and Varun Chakravarthy star as India qualifies for Super 8.',
    content: `<p class="text-lg leading-relaxed mb-6">Ahmedabad, February 19, 2026 - India defeated Netherlands by 17 runs at the Narendra Modi Stadium to maintain their 100% record in T20 World Cup 2026 and secure their place in the Super 8 stage.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Match Highlights</h2>
<p class="mb-6">Batting first, India posted 193/6 with Shivam Dube's career-best knock being the standout performance. Netherlands fought hard but managed 176/7, falling short by 17 runs. Varun Chakravarthy's excellent bowling figures of 3/35 proved crucial.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Group A Final Standings</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>India:</strong> 8 points (4 wins) - Qualified</li>
  <li><strong>Pakistan:</strong> 6 points (3 wins) - Qualified</li>
  <li><strong>USA:</strong> 4 points (2 wins)</li>
  <li><strong>Netherlands:</strong> 2 points (1 win)</li>
  <li><strong>Namibia:</strong> 0 points (0 wins)</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Super 8 Preview</h2>
<p class="mb-6">India's perfect group stage performance sets them as favorites heading into the Super 8. Pakistan also qualified after their emphatic 102-run victory over Namibia. The Super 8 stage begins February 22 with confirmed schedule and venues released.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop',
    author: 'Ravi Kumar',
    publishedAt: '7 hr',
    readTime: '5 min read',
  },
  {
    id: '8',
    title: 'Battle for 37 Rajya Sabha Seats: BJP and Congress Gear Up for Crucial Elections',
    excerpt: 'Political parties intensify campaigns as elections for 37 Rajya Sabha seats across multiple states begin. Stakes high for both BJP and Congress.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 19, 2026 - Political parties are intensifying their campaigns as elections for 37 Rajya Sabha seats across multiple states are set to begin, with stakes particularly high for both BJP and Congress.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Electoral Battle</h2>
<p class="mb-6">The elections are crucial as they could alter the balance of power in the upper house. Currently, BJP and allies hold 116 seats while the opposition has 108 seats in the 245-member house. These elections could significantly impact future legislation.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Key States in Focus</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Punjab:</strong> 3 seats with ongoing political realignments</li>
  <li><strong>Maharashtra:</strong> 6 seats - intense three-way contest</li>
  <li><strong>West Bengal:</strong> 4 seats - TMC vs BJP battle</li>
  <li><strong>Karnataka:</strong> 4 seats - Congress stronghold at stake</li>
  <li><strong>Gujarat:</strong> 3 seats - BJP bastion faces test</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Electoral Arithmetic</h2>
<p class="mb-6">With cross-voting possibilities and regional party dynamics, the outcome remains uncertain. Both BJP and Congress have deployed senior leaders to ensure party unity and prevent defections during the voting process.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop',
    author: 'Sanjay Das',
    publishedAt: '8 hr',
    readTime: '6 min read',
  },
  {
    id: '9',
    title: 'Delhi Air Quality Improves to \'Moderate\' for First Time This Winter; AQI Drops to 150',
    excerpt: 'Favorable wind patterns and successful implementation of GRAP measures bring relief to Delhi-NCR residents after months of severe pollution.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 19, 2026 - Delhi recorded its best air quality in four months as the Air Quality Index (AQI) dropped to 150 (Moderate category), providing relief to residents who have been battling severe pollution since October 2025.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Contributing Factors</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Strong westerly winds dispersing pollutants</li>
  <li>Effective implementation of GRAP Stage-II measures</li>
  <li>Reduced stubble burning in Punjab and Haryana</li>
  <li>Increased adoption of electric vehicles in NCR</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Health Advisory</h2>
<p class="mb-6">While the improvement is significant, health experts advise continued caution for vulnerable groups including children, elderly, and those with respiratory conditions. The Commission for Air Quality Management expects the AQI to remain in the moderate to satisfactory range for the next week.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    author: 'Dr. Maya Iyer',
    publishedAt: '9 hr',
    readTime: '7 min read',
  },
  {
    id: '10',
    title: 'Ranbir Kapoor\'s \'Ramayana\' Teaser Drops: Nitesh Tiwari\'s Epic Promises Visual Spectacle',
    excerpt: 'The first teaser of the ₹700 crore mythological epic featuring Ranbir as Lord Ram and Sai Pallavi as Sita breaks viewership records.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, February 19, 2026 - The much-awaited teaser of Nitesh Tiwari's 'Ramayana' was released today, showcasing Ranbir Kapoor as Lord Ram in what is being called the most ambitious Indian film ever made.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Teaser Highlights</h2>
<p class="mb-6">The 90-second teaser gives glimpses of the grandeur of Ayodhya, Ranbir Kapoor's transformation into Lord Ram, and stunning VFX sequences depicting Lanka. Sai Pallavi as Goddess Sita and Yash as Raavan have also generated massive excitement.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Record-Breaking Viewership</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>50 million views in first 6 hours on YouTube</li>
  <li>#RamayanaTeaser trending #1 in 42 countries</li>
  <li>Highest-liked Indian film teaser ever</li>
</ul>

<p class="mb-6">The film, produced by Namit Malhotra's Prime Focus Studios, is planned as a two-part saga with Part 1 releasing during Diwali 2026.</p>`,
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=800&auto=format&fit=crop',
    author: 'Pooja Sharma',
    publishedAt: '10 hr',
    readTime: '3 min read',
  },
  {
    id: '11',
    title: 'Tata Motors Electric Vehicle Sales Cross 1 Lakh Units in January 2026',
    excerpt: 'The homegrown automaker achieves historic milestone as Nexon EV and Punch EV dominate the electric vehicle market with 72% share.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, February 19, 2026 - Tata Motors announced today that its electric vehicle sales crossed the 1 lakh units mark in January 2026, making it the first Indian automaker to achieve this milestone in a single month.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Sales Breakdown</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Nexon EV:</strong> 45,000 units</li>
  <li><strong>Punch EV:</strong> 38,000 units</li>
  <li><strong>Tiago EV:</strong> 12,000 units</li>
  <li><strong>Curvv EV:</strong> 5,000 units</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Market Leadership</h2>
<p class="mb-6">Tata Motors now commands a 72% market share in India's electric PV segment, followed by Mahindra (15%) and MG Motor (8%). The company attributed the growth to expanding charging infrastructure, competitive pricing, and increased consumer awareness.</p>

<p class="mb-6">MD Shailesh Chandra announced plans to launch two new EV models in 2026 and expand production capacity at the Sanand facility.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    author: 'Amit Verma',
    publishedAt: '11 hr',
    readTime: '6 min read',
  },
  {
    id: '12',
    title: 'IIT Delhi Develops AI System That Can Predict Earthquakes 72 Hours in Advance',
    excerpt: 'Groundbreaking research by IIT Delhi scientists uses machine learning to analyze seismic patterns; system achieves 85% accuracy in trials.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 19, 2026 - Scientists at the Indian Institute of Technology Delhi have developed an artificial intelligence system capable of predicting earthquakes up to 72 hours in advance, a breakthrough that could revolutionize disaster preparedness.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">How It Works</h2>
<p class="mb-6">The AI system, named 'SeismoPredict', analyzes patterns in seismic data, ground deformation, and electromagnetic signals using deep learning algorithms. Trained on 50 years of global seismic data, the system has achieved 85% accuracy in predicting earthquakes of magnitude 5.0 and above.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Potential Impact</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Early warning systems for earthquake-prone regions</li>
  <li>Evacuation planning with 72-hour window</li>
  <li>Infrastructure protection measures</li>
  <li>Reduced casualties in seismic events</li>
</ul>

<p class="mb-6">The research team, led by Prof. Amit Sharma, has received ₹50 crore funding from DST for pilot implementation across the Himalayan seismic belt.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    author: 'Kavita Reddy',
    publishedAt: '12 hr',
    readTime: '5 min read',
  },
  {
    id: '13',
    title: 'Women\'s T20 World Cup: India Defeats Australia by 7 Wickets to Reach Finals',
    excerpt: 'Smriti Mandhana\'s unbeaten 89 guides India to a historic semi-final victory; team to face England in Sunday\'s final.',
    content: `<p class="text-lg leading-relaxed mb-6">Dubai, February 19, 2026 - The Indian women's cricket team secured a historic victory over defending champions Australia in the T20 World Cup semi-final, winning by 7 wickets with 12 balls to spare.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Match Summary</h2>
<p class="mb-6">Australia posted 156/6 in their 20 overs with Beth Mooney scoring 67. In response, Smriti Mandhana played a match-winning knock of 89* off 58 balls, while Shafali Verma contributed a quickfire 42.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Key Performances</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Smriti Mandhana:</strong> 89* (58) - Player of the Match</li>
  <li><strong>Renuka Singh:</strong> 3/28 in 4 overs</li>
  <li><strong>Deepti Sharma:</strong> 2/24 with crucial economy</li>
</ul>

<p class="mb-6">India will now face England in the final on Sunday, February 22, aiming for their maiden T20 World Cup title.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop',
    author: 'Suresh Nair',
    publishedAt: '1 hr',
    readTime: '4 min read',
    isFeatured: true,
  },
  {
    id: '14',
    title: 'G20 Foreign Ministers Meet in Mumbai: India Pushes for Global South Representation',
    excerpt: 'External Affairs Minister leads discussions on UN Security Council reform and climate finance; joint statement expected tomorrow.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, February 19, 2026 - India hosted the G20 Foreign Ministers' Meeting today, with External Affairs Minister S. Jaishankar leading discussions on key global issues including UN Security Council reform and climate finance.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Key Agenda Items</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Expansion of UNSC permanent membership to include India, Brazil, and African nations</li>
  <li>$500 billion climate finance commitment for developing nations</li>
  <li>Technology transfer frameworks for Global South</li>
  <li>Counter-terrorism cooperation mechanisms</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">Progress Made</h2>
<p class="mb-6">Sources indicate broad consensus on the need for UNSC reform, with major powers showing flexibility on expansion models. The climate finance discussions saw constructive engagement from EU nations and the US.</p>

<p class="mb-6">A joint ministerial statement is expected to be released tomorrow following the conclusion of bilateral meetings.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop',
    author: 'Rakesh Mehta',
    publishedAt: '13 hr',
    readTime: '7 min read',
  },
  {
    id: '15',
    title: 'Zika Virus Cases Detected in Maharashtra: Health Ministry Issues Advisory',
    excerpt: 'Five confirmed cases in Pune district prompt authorities to intensify surveillance; no cause for panic, says Health Secretary.',
    content: `<p class="text-lg leading-relaxed mb-6">Pune, February 19, 2026 - The Maharashtra Health Department confirmed five cases of Zika virus infection in Pune district, prompting the Union Health Ministry to issue an advisory for enhanced surveillance and vector control measures.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Current Situation</h2>
<p class="mb-6">All five patients are currently stable and recovering. The cases were detected through routine surveillance, and contact tracing is underway. Authorities have intensified fogging operations and mosquito breeding site elimination in affected areas.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">Health Ministry Advisory</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Enhanced surveillance in Maharashtra and neighboring states</li>
  <li>Special attention to pregnant women in affected areas</li>
  <li>Intensified vector control measures</li>
  <li>Public awareness campaigns on prevention</li>
</ul>

<p class="mb-6">Health Secretary Apurva Chandra assured that there is no cause for panic and the situation is under control. Rapid response teams have been deployed to the affected areas.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    author: 'Dr. Rahul Saxena',
    publishedAt: '14 hr',
    readTime: '5 min read',
  },
  {
    id: '16',
    title: 'Oscars 2026: Indian Film \'The Last Village\' Nominated for Best International Feature',
    excerpt: 'Chaitanya Tamhane\'s Marathi film becomes the third Indian movie to receive Oscar nomination in this category after Mother India and Lagaan.',
    content: `<p class="text-lg leading-relaxed mb-6">Los Angeles, February 19, 2026 - Indian cinema achieved a historic moment as Chaitanya Tamhane's Marathi film 'The Last Village' received an Oscar nomination for Best International Feature Film at the 98th Academy Awards.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">About the Film</h2>
<p class="mb-6">'The Last Village' tells the story of a remote Himalayan village facing extinction due to climate change and migration. The film features a cast of non-professional actors from actual villages in Ladakh and has been praised for its stunning cinematography and authentic storytelling.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">India's Oscar Journey</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>1958:</strong> Mother India - Nominated</li>
  <li><strong>2002:</strong> Lagaan - Nominated</li>
  <li><strong>2026:</strong> The Last Village - Nominated</li>
</ul>

<p class="mb-6">Director Chaitanya Tamhane, previously known for 'Court' and 'The Disciple', expressed his gratitude saying, "This recognition belongs to the people of Ladakh who opened their hearts and homes to us."</p>

<p class="mb-6">The Academy Awards ceremony is scheduled for March 2, 2026.</p>`,
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
    tournament: 'T20 World Cup 2026',
    venue: "Eden Gardens",
    innings: 'Group C',
    team1: {
      name: 'West Indies',
      shortName: 'WI',
      flag: '🏴‍☠️',
      score: '198/4',
      overs: '(20 ov)',
    },
    team2: {
      name: 'Italy',
      shortName: 'ITA',
      flag: '🇮🇹',
      score: '145/6',
      overs: '(16.3 ov)',
    },
    status: 'live',
  },
  {
    id: '2',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026',
    venue: 'Colombo',
    team1: {
      name: 'Sri Lanka',
      shortName: 'SL',
      flag: '🇱🇰',
      score: '0/0',
      overs: '(0 ov)',
    },
    team2: {
      name: 'Zimbabwe',
      shortName: 'ZIM',
      flag: '🇿🇼',
      score: '0/0',
      overs: '(0 ov)',
    },
    status: 'upcoming',
  },
  {
    id: '3',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026',
    venue: 'Chennai',
    team1: {
      name: 'Afghanistan',
      shortName: 'AFG',
      flag: '🇦🇫',
      score: '0/0',
      overs: '(0 ov)',
    },
    team2: {
      name: 'Canada',
      shortName: 'CAN',
      flag: '🇨🇦',
      score: '0/0',
      overs: '(0 ov)',
    },
    status: 'upcoming',
  },
  {
    id: '4',
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
  {
    id: '5',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '187/4',
      overs: '(20 ov)',
    },
    team2: {
      name: 'Netherlands',
      shortName: 'NED',
      flag: '🇳🇱',
      score: '170/8',
      overs: '(20 ov)',
    },
    status: 'completed',
  },
  {
    id: '6',
    sport: 'Cricket',
    tournament: 'Ranji Trophy Final',
    venue: 'M.A. Chidambaram Stadium, Chennai',
    team1: {
      name: 'Jammu & Kashmir',
      shortName: 'J&K',
      flag: '🏔️',
      score: '234/5',
      overs: '(85 ov)',
    },
    team2: {
      name: 'Mumbai',
      shortName: 'MUM',
      flag: '🏙️',
      score: '312',
      overs: '(98.2 ov)',
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
