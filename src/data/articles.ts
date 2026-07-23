import type { Article, LiveMatch, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'cricket', name: 'Cricket', slug: 'cricket', color: '#16a34a' },
  { id: 'politics', name: 'Politics', slug: 'politics', color: '#2563eb' },
  { id: 'health', name: 'Health', slug: 'health', color: '#dc2626' },
  { id: 'bollywood', name: 'Bollywood', slug: 'bollywood', color: '#db2777' },
  { id: 'business', name: 'Business', slug: 'business', color: '#d97706' },
  { id: 'education', name: 'Education', slug: 'education', color: '#7c3aed' },
  { id: 'technology', name: 'Technology', slug: 'technology', color: '#0891b2' },
];

export const articles: Article[] = [
  // 1 — Prajwal Jha (Featured Hero — Top Recent)
  {
    id: 'prajwal-jha-young-innovator',
    title: 'Prajwal Jha: The Young Innovator Redefining Student Entrepreneurship in Delhi',
    excerpt: 'Delhi Technological University student Prajwal Jha has been named among the Top 60 most innovative students in India by Delhi CM Rekha Gupta — capping a journey spanning solar-dryer research, youth governance, and organising the world\'s biggest hackathon.',
    content: `<p class="text-lg leading-relaxed mb-6">At a time when most undergraduates are still finding their footing, <strong>Prajwal Jha</strong>, a student at <strong>Delhi Technological University (DTU)</strong>, has built a track record that reads more like a seasoned changemaker's résumé than a college student's. From academic research to civic leadership and large-scale event organizing, Jha has emerged as one of Delhi's most talked-about young innovators — a reputation cemented on <strong>July 2, 2026</strong>, when he was named among the <strong>Top 60 most innovative students in India</strong> by Delhi Chief Minister <strong>Rekha Gupta</strong>.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Researcher's Mindset</h2>
<p class="mb-6">Jha's innovative streak isn't limited to entrepreneurship — it extends into academic research as well. He has published a research paper on solar dryers, a technology with real-world relevance to India's agricultural and food-processing sectors, where reducing post-harvest losses and cutting dependence on conventional energy sources remain pressing challenges. The work reflects a recurring theme in his output: taking a practical, engineering-driven approach to problems that matter at a national scale.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Leading from the Front in Youth Governance</h2>
<p class="mb-6">Beyond the lab and the classroom, Jha has taken on a significant leadership role in civic life as Deputy Speaker of a National Youth Parliament. The role places him at the center of youth-led policy debate and democratic engagement, giving young Indians a structured platform to discuss governance, legislation, and public issues — training ground for the kind of civic-minded leadership India's youth movement increasingly champions.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Building Platforms for Innovation</h2>
<p class="mb-6">Jha's organizing ability extends to the tech and startup ecosystem as well. He has been behind the organization of what is described as the world's biggest hackathon, bringing together developers, designers, and entrepreneurs to build and compete at scale. Events of this size require not just technical fluency but serious operational and leadership capability — skills that mirror the same entrepreneurial instinct he has applied across his other ventures.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Recognized by the Delhi Government</h2>
<p class="mb-6">That instinct was formally recognized on July 2, 2026, when Chief Minister Rekha Gupta named Jha among the Top 60 most innovative students in the country. The recognition came through <strong>Delhi Next – Code, Create & Change</strong>, the Delhi government's large-scale civic-tech innovation programme, which drew participation from students, developers, and young entrepreneurs across India and focused on building technology-driven solutions for urban challenges such as traffic congestion, waterlogging, air pollution, waste management, and citizen service delivery. Selected teams and innovators, after multiple rounds of evaluation, were invited to showcase their ideas before government officials, industry experts, and mentors — with an emphasis on real implementation through pilot projects with Delhi government departments, rather than recognition alone.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Pattern of Purposeful Innovation</h2>
<p class="mb-6">What stands out across Jha's body of work — research, governance, and large-scale organizing — is a consistent focus on solving tangible problems rather than chasing accolades for their own sake. Whether it's sustainable technology through his solar dryer research, democratic participation through the National Youth Parliament, or ecosystem-building through hackathons, his work points toward a broader ambition: using innovation as a tool for public good.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">As Delhi's civic-tech and entrepreneurial ecosystem continues to grow, students like Prajwal Jha represent the kind of talent such initiatives are designed to surface — and a preview of the leadership the next generation of Indian innovation may look like.</blockquote>`,
    category: 'technology',
    imageUrl: '/prj.png',
    author: 'The Fista Desk',
    publishedAt: 'Jul 23, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 2 — Sensex crosses 92,000
  {
    id: 'sensex-crosses-92000',
    title: 'Sensex Crosses 92,000 for the First Time as IT and Banking Stocks Power Record Rally',
    excerpt: 'Indian equity benchmarks hit fresh lifetime highs on Thursday, with the Sensex breaching 92,000 and the Nifty topping 28,000, driven by strong Q1 earnings, cooling inflation, and heavy foreign inflows.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, July 23, 2026 — Indian stock markets scaled a fresh peak on Thursday as the BSE Sensex crossed the <strong>92,000</strong> mark for the first time in history, while the NSE Nifty 50 breezed past 28,000. The rally was powered by a broad-based surge across information technology, banking, and auto stocks.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What's Driving the Surge</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Strong Q1 Earnings:</strong> Blue-chip IT majors and private banks beat street estimates for the April-June quarter</li>
  <li><strong>Cooling Inflation:</strong> Retail inflation eased to a multi-year low, raising hopes of a softer rate cycle</li>
  <li><strong>Foreign Inflows:</strong> FPIs turned aggressive net buyers, pumping in over ₹18,000 crore in July so far</li>
  <li><strong>Monsoon Cheer:</strong> An above-normal monsoon has brightened the outlook for rural demand</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Market Mood</h2>
<p class="mb-6">Broader markets joined the party, with mid-cap and small-cap indices also closing at record highs. Analysts, however, cautioned retail investors against chasing momentum, noting that valuations in several pockets are stretched.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"India remains a structural growth story. Domestic flows and improving earnings visibility are giving the market fresh legs."<br/><span class="text-sm not-italic font-semibold">— Chief Investment Strategist, leading domestic brokerage</span></blockquote>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Jul 23, 2026',
    readTime: '4 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 3 — India clinch ODI series in England
  {
    id: 'india-clinch-odi-series-england',
    title: "Shubman Gill's India Clinch ODI Series in England with Clinical Win at Lord's",
    excerpt: 'India chased down a stiff target under the Lord\'s lights to take an unassailable 2-1 lead in the three-match ODI series, with Shubman Gill and Shreyas Iyer sharing a match-defining stand.',
    content: `<p class="text-lg leading-relaxed mb-6">London, July 22, 2026 — India sealed the ODI series against England with a composed batting display at Lord's, chasing down 290 with seven balls to spare to take an unbeatable 2-1 lead in the three-match series.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Gill and Iyer Anchor the Chase</h2>
<p class="mb-6">Captain Shubman Gill led from the front with a fluent 88, while Shreyas Iyer's counter-attacking 74 tilted the game India's way after an early wobble. The pair added 132 for the third wicket to break the back of the chase on a slow London evening.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Performers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Shubman Gill:</strong> Captain's knock of 88, now the series' leading run-scorer</li>
  <li><strong>Shreyas Iyer:</strong> A busy, pressure-absorbing 74 in the middle overs</li>
  <li><strong>Kuldeep Yadav:</strong> Three crucial wickets to peg England back to 289</li>
  <li><strong>Joe Root (ENG):</strong> A defiant 91 in a losing cause</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">What's Next</h2>
<p class="mb-6">The two sides now travel to Southampton for the dead-rubber final ODI before shifting focus to a three-match T20I series that begins next week — a key marker on the road to the 2026 T20 calendar.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"We wanted to be brave in the chase. The boys backed themselves and it's a proud moment to win a series in England."<br/><span class="text-sm not-italic font-semibold">— Shubman Gill, India Captain</span></blockquote>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Jul 22, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 4 — Monsoon Session of Parliament
  {
    id: 'monsoon-session-parliament-2026',
    title: 'Monsoon Session of Parliament Begins: GST Reform, Data Bill and Jobs Top the Agenda',
    excerpt: 'The Monsoon Session opened on Monday with the government listing a packed legislative agenda, including the next phase of GST rationalisation and a fresh digital data framework, as the Opposition sharpened its attack.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 21, 2026 — The Monsoon Session of Parliament kicked off with the government signalling an ambitious legislative agenda even as the Opposition pressed for debates on employment, price rise, and federal issues.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">On the Legislative Table</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>GST 2.0:</strong> A rationalisation of slabs aimed at simplifying rates for households and small businesses</li>
  <li><strong>Digital Data Framework:</strong> New rules operationalising data protection and cross-border data flows</li>
  <li><strong>Skilling & Jobs Bill:</strong> A package to expand apprenticeships and formalise gig-economy protections</li>
  <li><strong>Infrastructure Push:</strong> Supplementary spending on highways, railways, and urban transit</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Opposition Sharpens Attack</h2>
<p class="mb-6">Opposition parties said they would corner the government on jobs, rural distress, and the impact of monsoon flooding across several states. Floor leaders met ahead of the session to coordinate strategy on demanding structured debates.</p>
<p class="mb-6">The Chair appealed to both sides to ensure the House runs smoothly, noting that a long list of bills awaits passage before the session concludes.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=80',
    author: 'Sanjay Das',
    publishedAt: 'Jul 21, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 5 — Delhi Next Phase 2
  {
    id: 'delhi-next-phase-2',
    title: "Delhi Government Launches Phase 2 of 'Delhi Next' Civic-Tech Programme",
    excerpt: 'Building on its Top 60 innovators showcase, the Delhi government has opened registrations for the second edition of Delhi Next – Code, Create & Change, inviting students and start-ups to pilot solutions with city departments.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 22, 2026 — The Delhi government has announced Phase 2 of its flagship civic-tech initiative, <strong>Delhi Next – Code, Create & Change</strong>, expanding a programme that has quickly become a launchpad for the capital's young innovators.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">From Ideas to Pilots</h2>
<p class="mb-6">The new phase places even greater emphasis on real-world implementation, with shortlisted teams set to run pilot projects alongside Delhi government departments. Focus areas include traffic congestion, waterlogging during the monsoon, air pollution, waste management, and citizen service delivery.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Building on Momentum</h2>
<p class="mb-6">The announcement comes weeks after Chief Minister Rekha Gupta felicitated the <strong>Top 60 most innovative students in India</strong> under the programme's first edition — a cohort that included DTU's Prajwal Jha. Officials said the response to the debut round convinced the government to scale up mentorship, funding support, and departmental access.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Who Can Apply</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Students & Researchers:</strong> Undergraduate and postgraduate innovators from across India</li>
  <li><strong>Early-Stage Start-ups:</strong> Teams building deployable urban-tech solutions</li>
  <li><strong>Independent Developers:</strong> Coders and designers with a working prototype</li>
</ul>
<p class="mb-6">Registrations are open through the programme's online portal, with evaluation to be conducted in multiple rounds before a demo day in front of government officials, industry experts, and mentors.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=80',
    author: 'Meera Joshi',
    publishedAt: 'Jul 22, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 6 — India-EU FTA
  {
    id: 'india-eu-fta-concluded',
    title: 'India and EU Conclude Landmark Free Trade Agreement After Years of Negotiation',
    excerpt: 'India and the European Union announced the conclusion of talks on a long-pending free trade agreement, opening up one of the world\'s largest markets for Indian exporters across textiles, pharma, and IT services.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi/Brussels, July 20, 2026 — India and the European Union announced the conclusion of negotiations on a comprehensive Free Trade Agreement (FTA), marking one of the most significant trade breakthroughs for New Delhi in a decade.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What the Deal Covers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Market Access:</strong> Sharp tariff reductions on textiles, leather, pharmaceuticals, and engineering goods</li>
  <li><strong>Services & Mobility:</strong> Easier movement for Indian professionals and mutual recognition of qualifications</li>
  <li><strong>Investment:</strong> A parallel investment protection pact to boost European capital inflows</li>
  <li><strong>Sustainability:</strong> Commitments on green technology cooperation and supply-chain resilience</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Why It Matters</h2>
<p class="mb-6">The EU is one of India's largest trading partners, and negotiators expect bilateral trade to expand significantly once the agreement is ratified. Exporters in labour-intensive sectors are set to be among the biggest beneficiaries.</p>
<p class="mb-6">Officials said the legal text will now be finalised and put through ratification on both sides, a process expected to take several months.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Jul 20, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 7 — Smriti Mandhana / India Women
  {
    id: 'mandhana-ton-india-women',
    title: 'Smriti Mandhana Hits Sublime Century as India Women Seal Series in England',
    excerpt: 'A masterful hundred from Smriti Mandhana and a disciplined bowling effort helped India Women clinch their white-ball series in England, underlining their credentials ahead of a big season.',
    content: `<p class="text-lg leading-relaxed mb-6">Bristol, July 20, 2026 — Smriti Mandhana produced a batting masterclass, stroking a fluent century to power India Women to a series-clinching victory over England Women in the ODI leg of their tour.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Mandhana in Full Flow</h2>
<p class="mb-6">Opening the innings, Mandhana timed the ball beautifully through the off side and paced her knock to perfection, bringing up her hundred with trademark elegance. Her stand with the middle order pushed India to a commanding total.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">All-Round Effort</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Smriti Mandhana:</strong> A chanceless century at the top of the order</li>
  <li><strong>Deepti Sharma:</strong> Vital breakthroughs and tight overs with the ball</li>
  <li><strong>Renuka Singh:</strong> Early strikes with the new ball to set the tone</li>
</ul>
<p class="mb-6">The result caps an impressive tour for Harmanpreet Kaur's side and offers valuable momentum ahead of a packed international calendar.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80',
    author: 'Suresh Nair',
    publishedAt: 'Jul 20, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 8 — Monsoon health alert
  {
    id: 'monsoon-dengue-alert',
    title: 'Monsoon Health Alert: Dengue and Chikungunya Cases Climb Across North India',
    excerpt: 'Health authorities have issued advisories as vector-borne diseases rise with the monsoon, urging citizens to eliminate stagnant water and watch for warning symptoms.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 22, 2026 — As the monsoon settles over northern India, health departments across several states have flagged a seasonal rise in dengue, chikungunya, and malaria cases, issuing fresh advisories to the public.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Staying Safe This Monsoon</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Eliminate breeding sites:</strong> Empty stagnant water from coolers, pots, and containers weekly</li>
  <li><strong>Use protection:</strong> Mosquito repellents, nets, and full-sleeved clothing, especially at dawn and dusk</li>
  <li><strong>Watch for symptoms:</strong> High fever, severe body ache, rash, and fatigue warrant prompt testing</li>
  <li><strong>Stay hydrated:</strong> Fluids are critical; avoid self-medication with certain painkillers</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Hospitals on Alert</h2>
<p class="mb-6">Civic bodies have ramped up fogging drives and door-to-door checks for larvae, while hospitals have been asked to keep dedicated fever wards ready. Officials stressed that early diagnosis dramatically reduces the risk of complications.</p>
<p class="mb-6">Doctors advised people not to ignore persistent fever and to seek medical attention rather than waiting it out at home.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    author: 'Dr. Anita Singh',
    publishedAt: 'Jul 22, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 9 — CBSE board reforms
  {
    id: 'cbse-two-board-exams-2026',
    title: 'CBSE Confirms Two Board Exams a Year for Class 10 from the New Session',
    excerpt: 'In a major shift, CBSE has confirmed that Class 10 students will get two board exam attempts a year, allowing them to keep their best score and easing exam pressure.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 22, 2026 — The Central Board of Secondary Education (CBSE) confirmed a landmark reform under which Class 10 students will be able to appear for board examinations twice a year, in line with the National Education Policy's vision.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">How It Will Work</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Two attempts:</strong> Exams will be held in two phases, and students may appear in one or both</li>
  <li><strong>Best score counts:</strong> The higher of the two scores will be retained</li>
  <li><strong>Reduced pressure:</strong> The move aims to lower the stakes attached to a single high-stress exam</li>
  <li><strong>No extra fee burden:</strong> The board has outlined a streamlined registration process</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Educators React</h2>
<p class="mb-6">School principals and teachers broadly welcomed the change, saying it aligns Indian assessment with global best practices and gives students a genuine second chance. Some flagged the need for careful scheduling so the two windows do not disrupt the academic calendar.</p>
<p class="mb-6">The board said detailed guidelines, including the exam windows and syllabus coverage for each phase, will be released to schools shortly.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
    author: 'Kavita Reddy',
    publishedAt: 'Jul 22, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 10 — JEE Advanced results
  {
    id: 'jee-advanced-results-2026',
    title: 'JEE Advanced 2026 Results Declared: Record Cutoffs as DTU, IITs Draw Top Talent',
    excerpt: 'The IITs have declared the JEE Advanced 2026 results, with premier institutes reporting some of the highest cutoffs in years amid intense competition among the country\'s brightest engineering aspirants.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 21, 2026 — Results for JEE Advanced 2026 were declared on the official portal, setting off celebrations across the country as lakhs of engineering aspirants checked their ranks in one of the world's toughest entrance examinations.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">How to Check Your Result</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Visit the official JEE Advanced results portal</li>
  <li>Log in with your registration number, date of birth, and phone number</li>
  <li>Download the scorecard and note your All India Rank (AIR)</li>
  <li>Track the counselling schedule for seat allotment</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Fierce Competition for Seats</h2>
<p class="mb-6">Premier institutions, including the IITs and top Delhi colleges such as Delhi Technological University (DTU), are expected to see elevated cutoffs this year, reflecting both the strength of the applicant pool and sustained demand for computer science and allied branches.</p>
<p class="mb-6">Counselling and seat allocation through the joint process will begin shortly, with multiple rounds giving candidates a chance to secure their preferred branch and institute.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    author: 'Kavita Reddy',
    publishedAt: 'Jul 21, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 11 — ISRO Gaganyaan
  {
    id: 'isro-gaganyaan-test-flight',
    title: 'ISRO Sets Date for Gaganyaan Uncrewed Test Flight, Crewed Mission on Track',
    excerpt: 'ISRO has announced the schedule for a key uncrewed Gaganyaan test flight, a decisive step towards India\'s first human spaceflight, with the crewed mission targeted for the following year.',
    content: `<p class="text-lg leading-relaxed mb-6">Bengaluru, July 21, 2026 — The Indian Space Research Organisation (ISRO) announced the timeline for the next major uncrewed test flight of its ambitious <strong>Gaganyaan</strong> human spaceflight programme, calling it a decisive milestone on the road to putting Indian astronauts in orbit.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Step Towards Human Spaceflight</h2>
<p class="mb-6">The upcoming mission will validate critical systems, including the crew module, service module, and the crew escape system, under conditions closely mimicking an actual crewed launch. Data from the flight will feed directly into clearing the vehicle for astronauts.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What's on the Test Card</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Human-rated launch vehicle:</strong> Full validation of the upgraded rocket</li>
  <li><strong>Crew module recovery:</strong> Splashdown and recovery operations at sea</li>
  <li><strong>Life-support systems:</strong> End-to-end checks of environmental control systems</li>
  <li><strong>Abort scenarios:</strong> Demonstration of crew safety mechanisms</li>
</ul>
<p class="mb-6">ISRO officials said the programme remains on course, with the first crewed flight targeted for the following year, potentially making India the fourth nation to independently send humans to space.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop&q=80',
    author: 'Neha Gupta',
    publishedAt: 'Jul 21, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 12 — Bollywood box office
  {
    id: 'bollywood-box-office-weekend',
    title: 'Big Bollywood Release Storms the Box Office in a Blockbuster Weekend',
    excerpt: 'A much-anticipated summer release has opened to packed theatres and strong word of mouth, giving the Hindi film industry its biggest opening of the year so far.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, July 20, 2026 — Bollywood roared back to form this weekend as one of the year's most-anticipated releases opened to houseful boards across the country, notching the biggest opening for a Hindi film in 2026 so far.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Weekend to Remember</h2>
<p class="mb-6">Buoyed by a strong marketing campaign, an ensemble cast, and positive early reviews, the film drew large family audiences and packed late-night shows in metros and smaller towns alike. Trade analysts said the momentum points to a healthy extended run.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Why It's Clicking</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Strong word of mouth:</strong> Social media buzz translated into repeat viewing</li>
  <li><strong>Music that travels:</strong> A chart-topping soundtrack fuelling pre-release hype</li>
  <li><strong>Wide release:</strong> A large screen count across single screens and multiplexes</li>
</ul>
<p class="mb-6">The success offers a much-needed boost to exhibitors after a mixed first half of the year, with several big titles still lined up for the festive season ahead.</p>`,
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80',
    author: 'Pooja Sharma',
    publishedAt: 'Jul 20, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 13 — RBI repo rate
  {
    id: 'rbi-holds-repo-rate',
    title: 'RBI Holds Repo Rate Steady, Signals Comfort as Inflation Cools',
    excerpt: 'The Reserve Bank of India kept its benchmark repo rate unchanged in its latest policy review, striking a balanced tone as retail inflation eased and growth stayed resilient.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, July 22, 2026 — The Reserve Bank of India's Monetary Policy Committee voted to keep the benchmark repo rate unchanged, maintaining a steady hand as inflation trended lower and growth held firm.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Rate on hold:</strong> The repo rate stays put, in line with market expectations</li>
  <li><strong>Inflation easing:</strong> Softer food prices and a good monsoon aid the outlook</li>
  <li><strong>Growth intact:</strong> The RBI reaffirmed a healthy GDP growth projection for the year</li>
  <li><strong>Stance:</strong> The central bank retained flexibility to act as data evolves</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">What It Means for Borrowers</h2>
<p class="mb-6">For home and auto loan borrowers, the pause means EMIs are likely to stay stable in the near term. Economists said a well-behaved monsoon and cooling core inflation keep the door open for a softer stance later in the year.</p>
<p class="mb-6">Markets took the announcement in stride, with rate-sensitive banking and real-estate stocks holding firm.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Jul 22, 2026',
    readTime: '4 min read',
  },

  // 14 — Bumrah workload
  {
    id: 'bumrah-workload-management',
    title: 'Bumrah Rested for Final Stretch of England Tour Under Workload Plan',
    excerpt: 'The team management has confirmed Jasprit Bumrah will be managed carefully through the remainder of the England tour, prioritising his fitness for a demanding season ahead.',
    content: `<p class="text-lg leading-relaxed mb-6">Southampton, July 21, 2026 — India's team management confirmed that pace spearhead Jasprit Bumrah will be rested for parts of the remaining England tour as part of a carefully calibrated workload-management plan.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Managing the Spearhead</h2>
<p class="mb-6">With a packed international calendar ahead, the support staff and medical team opted for a proactive approach to keep Bumrah fresh and injury-free. Officials stressed the move is precautionary and not linked to any fresh niggle.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">An Opportunity for the Bench</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Fresh legs:</strong> Younger pacers get a chance to press their claims</li>
  <li><strong>Depth on show:</strong> A test of India's fast-bowling reserves in English conditions</li>
  <li><strong>Long-term view:</strong> Fitness prioritised ahead of a heavy home-and-away season</li>
</ul>
<p class="mb-6">The captain backed the decision, saying a fit and firing Bumrah for the big assignments matters more than any single fixture.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop&q=80',
    author: 'Ravi Kumar',
    publishedAt: 'Jul 21, 2026',
    readTime: '3 min read',
    isFeatured: true,
  },

  // 15 — Semiconductor mission
  {
    id: 'india-semiconductor-first-chips',
    title: "India's Semiconductor Mission Hits Milestone as First Made-in-India Chips Roll Out",
    excerpt: 'India marked a major moment for its chip ambitions as the first packaged semiconductors from a domestic facility rolled off the line, a key step towards reducing import dependence.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, July 22, 2026 — India took a significant step in its semiconductor journey as the first batch of domestically packaged chips rolled out of a home-grown facility, underscoring the momentum behind the country's electronics manufacturing push.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Why This Matters</h2>
<p class="mb-6">Semiconductors sit at the heart of everything from smartphones and cars to defence systems and data centres. Building domestic capability reduces reliance on imports, strengthens supply-chain resilience, and creates high-skill jobs.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Bigger Picture</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Ecosystem in the making:</strong> Fabrication, packaging, and design capabilities taking shape</li>
  <li><strong>Global partnerships:</strong> Tie-ups with leading international chip firms</li>
  <li><strong>Talent pipeline:</strong> New courses and roles for engineers across the value chain</li>
  <li><strong>Downstream boost:</strong> Support for India's growing electronics and EV sectors</li>
</ul>
<p class="mb-6">Industry leaders called the milestone symbolic but significant, noting that scaling to advanced nodes will take sustained investment and policy support over the coming years.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    author: 'Dr. Priya Sharma',
    publishedAt: 'Jul 22, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 16 — India Innovates 2026 (flagship event — evergreen)
  {
    id: 'india-innovates-2026',
    title: 'India Innovates 2026: 5000+ Developers Set to Break Guinness World Record at Bharat Mandapam',
    excerpt: 'India is about to make history! Over 5000 engineers and developers will gather at Bharat Mandapam on March 28th to break the Guinness World Record, currently held by Saudi Arabia with 3921 developers.',
    content: `<p class="text-lg leading-relaxed mb-6">India is set to create history as <strong>India Innovates 2026</strong> prepares to break the <strong>Guinness World Record</strong> for the largest gathering of developers under one roof. The current record is held by <strong>Saudi Arabia</strong>, where 3921 developers assembled in Riyadh. On <strong>March 28, 2026</strong>, at the prestigious <strong>Bharat Mandapam</strong> in New Delhi, more than <strong>5000+ engineers and developers</strong> will come together, organized by <strong>Hansa AI Technologies Pvt. Ltd.</strong></p>
<h2 class="text-2xl font-bold mt-8 mb-4">Breaking the World Record</h2>
<p class="mb-6">The Guinness World Record for the largest gathering of software developers is currently held by Saudi Arabia, achieved during a tech event in Riyadh where 3921 developers participated. India Innovates 2026 aims to shatter this record by bringing together more than 5000 engineers, developers, and tech professionals from across the nation.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Distinguished Chief Guests</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Shri Ashwini Vaishnaw</strong> — Union Minister of Railways, Electronics & IT</li>
  <li><strong>Smt. Rekha Gupta</strong> — Chief Minister of Delhi</li>
  <li><strong>Shri Parvesh Verma</strong> — Deputy Chief Minister of Delhi & PWD Minister</li>
  <li><strong>20+ IAS/IFS/IRS Officers</strong> — Senior bureaucrats from various ministries</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">What to Expect</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>World Record Attempt:</strong> Be part of history as 5000+ developers assemble</li>
  <li><strong>Keynote Sessions:</strong> Industry leaders and policy makers on India's tech future</li>
  <li><strong>Innovation Showcase:</strong> Cutting-edge technologies from Indian companies</li>
  <li><strong>Career Fair:</strong> Top tech companies recruiting on-site</li>
</ul>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"India has the world's largest pool of tech talent, and India Innovates 2026 is our opportunity to showcase this to the world."<br/><span class="text-sm not-italic font-semibold">— CEO, Hansa AI Technologies Pvt. Ltd.</span></blockquote>
<div class="bg-neutral-100 p-6 my-8"><h3 class="font-bold text-lg mb-2">Event Details</h3><ul class="space-y-1"><li><strong>Date:</strong> March 28, 2026</li><li><strong>Venue:</strong> Bharat Mandapam, Pragati Maidan, New Delhi</li><li><strong>Organizer:</strong> Hansa AI Technologies Pvt. Ltd.</li><li><strong>Target:</strong> 5000+ Developers (Beat Saudi Arabia's 3921)</li></ul></div>`,
    category: 'technology',
    imageUrl: '/poster.png',
    author: 'The Fista Tech Desk',
    publishedAt: 'Mar 28, 2026',
    readTime: '6 min read',
  },
];

export const liveMatches: LiveMatch[] = [
  {
    id: '1',
    sport: 'Cricket',
    tournament: 'India tour of England 2026 — 3rd ODI',
    venue: "Lord's, London",
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '291/3',
      overs: '(48.5 ov)',
    },
    team2: {
      name: 'England',
      shortName: 'ENG',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '289/8',
      overs: '(50 ov)',
    },
    status: 'completed',
  },
  {
    id: '2',
    sport: 'Cricket',
    tournament: 'Women\'s ODI — India in England',
    venue: 'Bristol County Ground',
    team1: {
      name: 'India Women',
      shortName: 'IND-W',
      flag: '🇮🇳',
      score: '278/5',
      overs: '(50 ov)',
    },
    team2: {
      name: 'England Women',
      shortName: 'ENG-W',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '212/9',
      overs: '(50 ov)',
    },
    status: 'completed',
  },
  {
    id: '3',
    sport: 'Cricket',
    tournament: 'India tour of England 2026 — 1st T20I',
    venue: 'Edgbaston, Birmingham',
    team1: {
      name: 'England',
      shortName: 'ENG',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '—',
      overs: '',
    },
    team2: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '—',
      overs: '',
    },
    status: 'upcoming',
  },
  {
    id: '4',
    sport: 'Cricket',
    tournament: 'The Hundred 2026',
    venue: "The Oval, London",
    team1: {
      name: 'Oval Invincibles',
      shortName: 'OVI',
      flag: '🏏',
      score: '128/4',
      overs: '(72 balls)',
    },
    team2: {
      name: 'Trent Rockets',
      shortName: 'TRT',
      flag: '🚀',
      score: '—',
      overs: '',
    },
    status: 'live',
  },
  {
    id: '5',
    sport: 'Cricket',
    tournament: 'India tour of England 2026 — 3rd ODI',
    venue: 'Ageas Bowl, Southampton',
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '—',
      overs: '',
    },
    team2: {
      name: 'England',
      shortName: 'ENG',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '—',
      overs: '',
    },
    status: 'upcoming',
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
