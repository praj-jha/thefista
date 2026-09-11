import type { Article, LiveMatch, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'cricket', name: 'Cricket', slug: 'cricket', color: '#0F766E' },
  { id: 'politics', name: 'Politics', slug: 'politics', color: '#1D4ED8' },
  { id: 'health', name: 'Health', slug: 'health', color: '#B91C1C' },
  { id: 'bollywood', name: 'Bollywood', slug: 'bollywood', color: '#BE185D' },
  { id: 'business', name: 'Business', slug: 'business', color: '#B45309' },
  { id: 'education', name: 'Education', slug: 'education', color: '#6D28D9' },
  { id: 'technology', name: 'Technology', slug: 'technology', color: '#0E7490' },
];

export const articles: Article[] = [
  // 1 — Asia Cup Final (Featured Hero — Sep 11, 2026)
  {
    id: 'india-asia-cup-2026-final-win',
    title: 'India Clinch Asia Cup 2026 Title with Nerveless Chase in Dubai Final',
    excerpt: 'Chasing 182 under the Dubai lights, India held their composure through a tense final over to beat their arch-rivals and lift a record-extending Asia Cup crown, capping a flawless unbeaten campaign.',
    content: `<p class="text-lg leading-relaxed mb-6">Dubai, September 11, 2026 — India were crowned champions of the <strong>Asia Cup 2026</strong> on Thursday night, chasing down 182 with two balls to spare in a final that swung on every delivery of a pulsating closing over at the Dubai International Stadium. The victory extended India's record as the most successful side in the tournament's history and completed an unbeaten run through the competition.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Chase Built on Cool Heads</h2>
<p class="mb-6">Set a demanding target on a used surface, India lost an early wicket but were steadied by a composed half-century at the top of the order and a match-defining cameo in the death overs. With 14 needed off the final over, the middle order held its nerve, picking gaps and running hard to seal a title that had looked out of reach at the halfway stage.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Performers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Opening stand:</strong> A brisk 74-run partnership set the platform for the chase</li>
  <li><strong>Death-overs finishing:</strong> Two clean strikes in the 19th over swung momentum decisively</li>
  <li><strong>Spin in the middle:</strong> Three wickets through the middle phase kept the target within reach</li>
  <li><strong>Fielding:</strong> Two direct-hit run-outs proved the difference on the night</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">What It Means</h2>
<p class="mb-6">The triumph offers India valuable momentum heading into a packed home season and reaffirms the depth of a squad in transition. Selectors will take heart from the way younger players absorbed pressure on the biggest stage in the region.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"We spoke about staying in the present, ball by ball. The boys were fearless when it mattered — that's what makes this group special."<br/><span class="text-sm not-italic font-semibold">— India Captain, post-match presentation</span></blockquote>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Sep 11, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 2 — GST 2.0 (Sep 11)
  {
    id: 'gst-2-simplified-slabs-rollout',
    title: 'GST 2.0 Goes Live: Simplified Two-Slab Structure Cheers Households and Small Business',
    excerpt: 'The next-generation Goods and Services Tax framework took effect this week, collapsing multiple rates into a cleaner structure that the government says will cut prices on everyday essentials and ease compliance for MSMEs.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 11, 2026 — The long-awaited overhaul of India's indirect tax system, popularly dubbed <strong>GST 2.0</strong>, came into force this week, rationalising a tangle of rates into a simpler structure aimed at lowering the tax burden on essentials and reducing paperwork for small businesses.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What Changes for Consumers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Everyday essentials:</strong> A wide basket of daily-use goods moves to a lower slab</li>
  <li><strong>Simpler rates:</strong> Fewer categories mean less confusion at the point of sale</li>
  <li><strong>Faster refunds:</strong> A streamlined process promises quicker input-credit settlement</li>
  <li><strong>Sin and luxury goods:</strong> A special rate keeps high-end and demerit items separate</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Relief for Small Business</h2>
<p class="mb-6">Trade bodies broadly welcomed the reform, saying the simplified filing requirements and clearer classification will cut compliance costs for micro, small and medium enterprises. Economists said the timing — ahead of the festive season — could give consumption a meaningful lift.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Fiscal Balance</h2>
<p class="mb-6">Officials acknowledged a short-term hit to collections but argued that wider compliance and stronger demand would offset it over the medium term. Analysts will watch the first full month of data closely for early signals.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Sep 11, 2026',
    readTime: '4 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 3 — Monsoon Session concludes (Sep 10)
  {
    id: 'monsoon-session-concludes-2026',
    title: 'Monsoon Session Wraps Up: Data Rules, Skilling Push and Jobs Debate Dominate',
    excerpt: 'Parliament concluded its Monsoon Session with the government clearing a clutch of economic bills, even as the Opposition pressed hard on employment and price rise in a series of sharp exchanges.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 10, 2026 — The Monsoon Session of Parliament drew to a close on Wednesday, with the treasury benches claiming a productive stretch of legislative business while the Opposition insisted key concerns on jobs and household budgets remained unanswered.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">On the Statute Book</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Digital data rules:</strong> Fresh regulations operationalising data protection and cross-border flows</li>
  <li><strong>Skilling and apprenticeships:</strong> A package to widen formal training and gig-worker protections</li>
  <li><strong>Infrastructure spending:</strong> Supplementary allocations for highways, railways and urban transit</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">The Opposition's Case</h2>
<p class="mb-6">Floor leaders said they had used every available instrument to force debates on employment, rural distress and inflation. The government countered that its reform agenda — including this month's tax rationalisation — was already easing pressure on households.</p>
<p class="mb-6">The Chair thanked members for a largely orderly session and noted that a long list of committee referrals would carry the work forward before the Winter Session.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop&q=80',
    author: 'Sanjay Das',
    publishedAt: 'Sep 10, 2026',
    readTime: '4 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 4 — ISRO Gaganyaan crewed timeline (Sep 10)
  {
    id: 'isro-gaganyaan-crew-timeline',
    title: 'ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review',
    excerpt: 'India moved a decisive step closer to its first human spaceflight as ISRO announced a firm window for the crewed Gaganyaan mission, following a clean bill of health from its final major systems review.',
    content: `<p class="text-lg leading-relaxed mb-6">Bengaluru, September 10, 2026 — The Indian Space Research Organisation (ISRO) confirmed the target window for its historic crewed <strong>Gaganyaan</strong> mission after completing a comprehensive review of the human-rated launch vehicle, crew module and life-support systems.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Cleared for the Big Step</h2>
<p class="mb-6">Officials said data from earlier uncrewed test flights had validated the critical safety architecture, including the crew escape system and splashdown recovery. The mission would make India only the fourth nation to independently send humans into orbit.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">On the Flight Card</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Human-rated vehicle:</strong> Final validation of the upgraded rocket stack</li>
  <li><strong>Crew training:</strong> Astronaut-designates complete integrated mission simulations</li>
  <li><strong>Recovery operations:</strong> Naval teams rehearse splashdown retrieval at sea</li>
  <li><strong>Ground network:</strong> Tracking and communication links checked end to end</li>
</ul>
<p class="mb-6">ISRO said the programme would also feed directly into its longer-term ambitions, including a planned space station and a crewed lunar goal in the next decade.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&auto=format&fit=crop&q=80',
    author: 'Neha Gupta',
    publishedAt: 'Sep 10, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 5 — Post-monsoon dengue (Sep 9)
  {
    id: 'post-monsoon-dengue-advisory',
    title: 'Post-Monsoon Health Watch: Dengue Cases Peak as North India Steps Up Fogging',
    excerpt: 'With the monsoon retreating, health departments have flagged the seasonal peak in dengue and chikungunya, urging citizens to clear stagnant water and watch for warning symptoms.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 9, 2026 — As the monsoon begins to withdraw from northern India, health authorities across several states have flagged the annual post-monsoon surge in vector-borne diseases, issuing fresh advisories on prevention and early testing.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Staying Safe This Season</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Eliminate breeding sites:</strong> Empty stagnant water from coolers, pots and containers weekly</li>
  <li><strong>Use protection:</strong> Repellents, nets and full-sleeved clothing, especially at dawn and dusk</li>
  <li><strong>Watch for symptoms:</strong> High fever, severe body ache, rash and fatigue warrant prompt testing</li>
  <li><strong>Stay hydrated:</strong> Fluids are critical; avoid self-medication with certain painkillers</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Hospitals on Alert</h2>
<p class="mb-6">Civic bodies have intensified fogging drives and door-to-door larvae checks, while hospitals have been asked to keep dedicated fever wards ready. Officials stressed that early diagnosis dramatically reduces the risk of complications.</p>
<p class="mb-6">Doctors advised people not to ignore persistent fever and to seek medical attention rather than waiting it out at home.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Anita Singh',
    publishedAt: 'Sep 9, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 6 — Bollywood festive release (Sep 9)
  {
    id: 'bollywood-festive-season-blockbuster',
    title: 'Festive Season Roars In as Big Bollywood Release Posts Year-Best Opening',
    excerpt: 'The Hindi film industry kicked off the festive stretch in style, with a much-anticipated release drawing packed houses across the country and delivering the biggest opening weekend of 2026 so far.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, September 9, 2026 — Bollywood set the tone for a bumper festive season as one of the year's most-awaited releases opened to houseful boards nationwide, notching the biggest opening weekend for a Hindi film in 2026.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Weekend to Remember</h2>
<p class="mb-6">Backed by a strong marketing push, an ensemble cast and warm early reviews, the film pulled large family audiences and packed late-night shows in metros and smaller towns alike. Trade analysts said the momentum points to a healthy extended run through the festival calendar.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Why It's Clicking</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Word of mouth:</strong> Social buzz quickly translating into repeat viewing</li>
  <li><strong>Music that travels:</strong> A chart-topping soundtrack fuelling pre-release hype</li>
  <li><strong>Wide release:</strong> A large screen count across single screens and multiplexes</li>
</ul>
<p class="mb-6">Exhibitors, buoyed after a mixed first half of the year, said several more big titles lined up for the festive window could make this one of the strongest quarters in recent memory.</p>`,
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80',
    author: 'Pooja Sharma',
    publishedAt: 'Sep 9, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 7 — CBSE two board exams (Sep 8)
  {
    id: 'cbse-two-board-exams-rollout',
    title: 'CBSE Releases Guidelines for Twice-a-Year Class 10 Board Exams',
    excerpt: 'The board has published detailed guidelines for its landmark reform allowing Class 10 students two exam attempts a year, spelling out the exam windows, syllabus coverage and the best-of-two scoring rule.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 8, 2026 — The Central Board of Secondary Education (CBSE) released detailed operational guidelines for its landmark reform under which Class 10 students can appear for board examinations twice a year, in line with the National Education Policy's vision.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">How It Will Work</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Two attempts:</strong> Exams will be held in two phases, and students may appear in one or both</li>
  <li><strong>Best score counts:</strong> The higher of the two scores will be retained</li>
  <li><strong>Reduced pressure:</strong> The move aims to lower the stakes attached to a single high-stress exam</li>
  <li><strong>Clear windows:</strong> The board has published the phase-wise schedule and syllabus split</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Educators React</h2>
<p class="mb-6">School principals and teachers broadly welcomed the clarity, saying it aligns Indian assessment with global best practices and gives students a genuine second chance. Some flagged the need for careful scheduling so the two windows do not disrupt the academic calendar.</p>
<p class="mb-6">The board said schools would receive orientation material to help students and parents plan for the new structure.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80',
    author: 'Kavita Reddy',
    publishedAt: 'Sep 8, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 8 — Women's cricket (Sep 8)
  {
    id: 'india-women-series-win-momentum',
    title: 'Smriti Mandhana Masterclass Powers India Women to Commanding Series Win',
    excerpt: 'A sublime century from Smriti Mandhana and a disciplined bowling effort handed India Women a series victory, sharpening their credentials ahead of a marquee home season.',
    content: `<p class="text-lg leading-relaxed mb-6">Bengaluru, September 8, 2026 — Smriti Mandhana produced a batting masterclass, stroking a fluent century to power India Women to a series-clinching victory and cap an impressive run of white-ball form ahead of a busy home calendar.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Mandhana in Full Flow</h2>
<p class="mb-6">Opening the innings, Mandhana timed the ball beautifully through the off side and paced her knock to perfection, bringing up her hundred with trademark elegance. Her stand with the middle order pushed India to a commanding total.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">All-Round Effort</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Smriti Mandhana:</strong> A chanceless century at the top of the order</li>
  <li><strong>Deepti Sharma:</strong> Vital breakthroughs and tight, economical overs</li>
  <li><strong>Renuka Singh:</strong> Early strikes with the new ball to set the tone</li>
</ul>
<p class="mb-6">The result offers Harmanpreet Kaur's side valuable momentum and selection clarity with a demanding season on the horizon.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80',
    author: 'Suresh Nair',
    publishedAt: 'Sep 8, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 9 — RBI policy (Sep 7)
  {
    id: 'rbi-policy-holds-rate-growth',
    title: 'RBI Holds Repo Rate, Lifts Growth Outlook as Inflation Stays Benign',
    excerpt: 'The Reserve Bank of India kept its benchmark rate unchanged and nudged up its growth forecast, striking an upbeat tone as a good monsoon and cooling prices brightened the outlook.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, September 7, 2026 — The Reserve Bank of India's Monetary Policy Committee voted to keep the benchmark repo rate unchanged while raising its growth projection for the year, reflecting confidence in a resilient economy and a well-behaved price environment.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Rate on hold:</strong> The repo rate stays put, in line with market expectations</li>
  <li><strong>Inflation benign:</strong> Softer food prices and a good monsoon aid the outlook</li>
  <li><strong>Growth upgraded:</strong> The RBI nudged up its GDP forecast for the fiscal year</li>
  <li><strong>Stance:</strong> The central bank retained flexibility to act as data evolves</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">What It Means for Borrowers</h2>
<p class="mb-6">For home and auto loan borrowers, the pause means EMIs are likely to stay stable in the near term. Economists said the combination of easing inflation and the fresh tax rationalisation keeps the door open for a softer stance later in the year.</p>
<p class="mb-6">Markets took the announcement in stride, with rate-sensitive banking and real-estate stocks holding firm.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Sep 7, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 10 — Prajwal Jha profile (evergreen, re-dated Sep 7)
  {
    id: 'prajwal-jha-young-innovator',
    title: 'Prajwal Jha: The Young Innovator Redefining Student Entrepreneurship in Delhi',
    excerpt: 'Delhi Technological University student Prajwal Jha has been named among the Top 60 most innovative students in India by Delhi CM Rekha Gupta — capping a journey spanning solar-dryer research, youth governance, and organising one of the world’s biggest hackathons.',
    content: `<p class="text-lg leading-relaxed mb-6">At a time when most undergraduates are still finding their footing, <strong>Prajwal Jha</strong>, a student at <strong>Delhi Technological University (DTU)</strong>, has built a track record that reads more like a seasoned changemaker's résumé than a college student's. From academic research to civic leadership and large-scale event organizing, Jha has emerged as one of Delhi's most talked-about young innovators — a reputation cemented when he was named among the <strong>Top 60 most innovative students in India</strong> by Delhi Chief Minister <strong>Rekha Gupta</strong>.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Researcher's Mindset</h2>
<p class="mb-6">Jha's innovative streak isn't limited to entrepreneurship — it extends into academic research as well. He has published a research paper on solar dryers, a technology with real-world relevance to India's agricultural and food-processing sectors, where reducing post-harvest losses and cutting dependence on conventional energy sources remain pressing challenges. The work reflects a recurring theme in his output: taking a practical, engineering-driven approach to problems that matter at a national scale.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Leading from the Front in Youth Governance</h2>
<p class="mb-6">Beyond the lab and the classroom, Jha has taken on a significant leadership role in civic life as Deputy Speaker of a National Youth Parliament. The role places him at the center of youth-led policy debate and democratic engagement, giving young Indians a structured platform to discuss governance, legislation, and public issues — training ground for the kind of civic-minded leadership India's youth movement increasingly champions.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Building Platforms for Innovation</h2>
<p class="mb-6">Jha's organizing ability extends to the tech and startup ecosystem as well. He has been behind the organization of what is described as one of the world's biggest hackathons, bringing together developers, designers, and entrepreneurs to build and compete at scale. Events of this size require not just technical fluency but serious operational and leadership capability — skills that mirror the same entrepreneurial instinct he has applied across his other ventures.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Recognized by the Delhi Government</h2>
<p class="mb-6">That instinct was formally recognized when Chief Minister Rekha Gupta named Jha among the Top 60 most innovative students in the country. The recognition came through <strong>Delhi Next – Code, Create & Change</strong>, the Delhi government's large-scale civic-tech innovation programme, which drew participation from students, developers, and young entrepreneurs across India and focused on building technology-driven solutions for urban challenges such as traffic congestion, waterlogging, air pollution, waste management, and citizen service delivery. Selected teams and innovators, after multiple rounds of evaluation, were invited to showcase their ideas before government officials, industry experts, and mentors — with an emphasis on real implementation through pilot projects with Delhi government departments, rather than recognition alone.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">A Pattern of Purposeful Innovation</h2>
<p class="mb-6">What stands out across Jha's body of work — research, governance, and large-scale organizing — is a consistent focus on solving tangible problems rather than chasing accolades for their own sake. Whether it's sustainable technology through his solar dryer research, democratic participation through the National Youth Parliament, or ecosystem-building through hackathons, his work points toward a broader ambition: using innovation as a tool for public good.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">As Delhi's civic-tech and entrepreneurial ecosystem continues to grow, students like Prajwal Jha represent the kind of talent such initiatives are designed to surface — and a preview of the leadership the next generation of Indian innovation may look like.</blockquote>`,
    category: 'technology',
    imageUrl: '/prj.png',
    author: 'The Fista Desk',
    publishedAt: 'Sep 7, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 11 — India-EU FTA ratification (Sep 6)
  {
    id: 'india-eu-fta-ratification',
    title: 'India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports',
    excerpt: 'The landmark India–European Union free trade agreement moved through its final ratification steps, opening one of the world’s largest markets to Indian exporters across textiles, pharma and IT services.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi/Brussels, September 6, 2026 — The comprehensive Free Trade Agreement between India and the European Union cleared its final ratification hurdles, marking one of the most significant trade breakthroughs for New Delhi in a decade and setting the stage for a phased reduction in tariffs.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What the Deal Covers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Market access:</strong> Sharp tariff reductions on textiles, leather, pharmaceuticals and engineering goods</li>
  <li><strong>Services and mobility:</strong> Easier movement for professionals and mutual recognition of qualifications</li>
  <li><strong>Investment:</strong> A parallel protection pact to boost European capital inflows</li>
  <li><strong>Sustainability:</strong> Commitments on green-technology cooperation and supply-chain resilience</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Why It Matters</h2>
<p class="mb-6">The EU is one of India's largest trading partners, and negotiators expect bilateral trade to expand significantly as the agreement is implemented. Exporters in labour-intensive sectors are set to be among the biggest beneficiaries.</p>
<p class="mb-6">Officials said the two sides would now move to operationalise the agreement in phases, with early gains expected in the coming quarters.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    author: 'Meera Joshi',
    publishedAt: 'Sep 6, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 12 — India semiconductor (Sep 6)
  {
    id: 'india-semiconductor-scale-up',
    title: "India's Chip Mission Scales Up as Second Packaging Line Comes Online",
    excerpt: 'India’s semiconductor ambitions gathered pace as a second domestic packaging line began commercial output, a key step towards cutting import dependence and anchoring a homegrown electronics ecosystem.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 6, 2026 — India took another significant step in its semiconductor journey as a second domestically operated packaging line began commercial production, underscoring the momentum behind the country's electronics manufacturing push.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Why This Matters</h2>
<p class="mb-6">Semiconductors sit at the heart of everything from smartphones and cars to defence systems and data centres. Building domestic capability reduces reliance on imports, strengthens supply-chain resilience, and creates high-skill jobs across the value chain.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Bigger Picture</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Ecosystem in the making:</strong> Fabrication, packaging and design capabilities taking shape</li>
  <li><strong>Global partnerships:</strong> Tie-ups with leading international chip firms</li>
  <li><strong>Talent pipeline:</strong> New courses and roles for engineers across the sector</li>
  <li><strong>Downstream boost:</strong> Support for India's growing electronics and EV industries</li>
</ul>
<p class="mb-6">Industry leaders called the milestone significant, noting that scaling to advanced nodes will take sustained investment and policy support over the coming years.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Priya Sharma',
    publishedAt: 'Sep 6, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 13 — Preventive health / lifestyle (Sep 5)
  {
    id: 'preventive-health-screening-push',
    title: 'Doctors Urge Annual Health Screening as Lifestyle Diseases Rise Among Young Indians',
    excerpt: 'Health experts are calling for wider adoption of preventive check-ups, warning that early screening and simple lifestyle changes can sharply cut the burden of diabetes, hypertension and heart disease.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 5, 2026 — Public-health specialists have renewed calls for annual preventive screening, cautioning that lifestyle-linked conditions are appearing in younger Indians and that early detection remains the single most effective tool to manage them.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Small Steps, Big Impact</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Know your numbers:</strong> Blood pressure, blood sugar and cholesterol checks once a year</li>
  <li><strong>Move daily:</strong> At least 30 minutes of activity on most days of the week</li>
  <li><strong>Eat mindfully:</strong> More whole foods and fibre, less ultra-processed and sugary intake</li>
  <li><strong>Sleep and stress:</strong> Consistent sleep and stress management protect long-term health</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Prevention Over Cure</h2>
<p class="mb-6">Doctors said the biggest gains come from catching risk factors early, long before they progress into serious illness. Employers and insurers, they added, are increasingly building preventive check-ups into wellness programmes.</p>
<p class="mb-6">The message, experts stressed, is simple: routine screening is not a sign of illness but a habit that keeps people healthy.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Anita Singh',
    publishedAt: 'Sep 5, 2026',
    readTime: '4 min read',
  },

  // 14 — India AI Mission (Sep 5)
  {
    id: 'india-ai-mission-compute-push',
    title: 'India AI Mission Expands Public Compute Access for Startups and Researchers',
    excerpt: 'The government widened access to subsidised GPU compute under the India AI Mission, aiming to lower the entry barrier for startups, universities and researchers building homegrown AI models.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, September 5, 2026 — The government expanded access to subsidised high-performance computing under the <strong>India AI Mission</strong>, a move designed to help startups, universities and independent researchers train and deploy artificial-intelligence models at a fraction of commercial cost.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Lowering the Barrier</h2>
<p class="mb-6">Access to large-scale compute has been one of the biggest constraints for India's AI builders. By pooling public GPU capacity and offering it at concessional rates, officials hope to unlock a wave of applications tailored to Indian languages, agriculture, healthcare and public services.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">What's on Offer</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Subsidised compute:</strong> Concessional GPU access for eligible teams</li>
  <li><strong>Indian-language models:</strong> Priority support for multilingual and voice applications</li>
  <li><strong>Datasets and tooling:</strong> Curated, privacy-compliant datasets for training</li>
  <li><strong>Skilling:</strong> Fellowships and courses to widen the AI talent base</li>
</ul>
<p class="mb-6">Industry watchers said the initiative could meaningfully improve India's standing in applied AI, provided access is transparent and the ecosystem scales responsibly.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80',
    author: 'Neha Gupta',
    publishedAt: 'Sep 5, 2026',
    readTime: '5 min read',
  },
];

export const liveMatches: LiveMatch[] = [
  {
    id: '1',
    sport: 'Cricket',
    tournament: 'Asia Cup 2026 — Final',
    venue: 'Dubai International Stadium',
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '182/6',
      overs: '(19.4 ov)',
    },
    team2: {
      name: 'Pakistan',
      shortName: 'PAK',
      flag: '🇵🇰',
      score: '181/7',
      overs: '(20 ov)',
    },
    status: 'completed',
  },
  {
    id: '2',
    sport: 'Cricket',
    tournament: "Women's ODI Series — India",
    venue: 'M. Chinnaswamy Stadium, Bengaluru',
    team1: {
      name: 'India Women',
      shortName: 'IND-W',
      flag: '🇮🇳',
      score: '289/4',
      overs: '(50 ov)',
    },
    team2: {
      name: 'Australia Women',
      shortName: 'AUS-W',
      flag: '🇦🇺',
      score: '246/9',
      overs: '(50 ov)',
    },
    status: 'completed',
  },
  {
    id: '3',
    sport: 'Cricket',
    tournament: 'Duleep Trophy 2026 — Semi-Final',
    venue: 'M. A. Chidambaram Stadium, Chennai',
    team1: {
      name: 'South Zone',
      shortName: 'SZ',
      flag: '🏏',
      score: '312/6',
      overs: '(Day 2)',
    },
    team2: {
      name: 'West Zone',
      shortName: 'WZ',
      flag: '🏏',
      score: '—',
      overs: '',
    },
    status: 'live',
  },
  {
    id: '4',
    sport: 'Cricket',
    tournament: 'India tour of Australia 2026 — 1st T20I',
    venue: 'MCG, Melbourne',
    team1: {
      name: 'Australia',
      shortName: 'AUS',
      flag: '🇦🇺',
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
    id: '5',
    sport: 'Cricket',
    tournament: 'Ranji Trophy 2026-27 — Round 1',
    venue: 'Arun Jaitley Stadium, Delhi',
    team1: {
      name: 'Delhi',
      shortName: 'DEL',
      flag: '🏏',
      score: '—',
      overs: '',
    },
    team2: {
      name: 'Mumbai',
      shortName: 'MUM',
      flag: '🏏',
      score: '—',
      overs: '',
    },
    status: 'upcoming',
  },
];

export const getCategoryColor = (category: string): string => {
  const categoryInfo = categories.find(c => c.id === category);
  return categoryInfo?.color || '#B45309';
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
