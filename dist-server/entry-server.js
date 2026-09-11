import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, createContext, useContext, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { useLocation, Link, useParams, Routes, Route } from "react-router-dom";
import { ChevronRight, Search, X, Menu, ArrowRight, Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Clock, ChevronLeft, TrendingUp, Radio, ArrowLeft, User, Share2, Calendar, Linkedin, MessageCircle, Link2 } from "lucide-react";
const categories = [
  { id: "cricket", name: "Cricket", slug: "cricket", color: "#0F766E" },
  { id: "politics", name: "Politics", slug: "politics", color: "#1D4ED8" },
  { id: "health", name: "Health", slug: "health", color: "#B91C1C" },
  { id: "bollywood", name: "Bollywood", slug: "bollywood", color: "#BE185D" },
  { id: "business", name: "Business", slug: "business", color: "#B45309" },
  { id: "education", name: "Education", slug: "education", color: "#6D28D9" },
  { id: "technology", name: "Technology", slug: "technology", color: "#0E7490" }
];
const articles = [
  // 1 — Asia Cup Final (Featured Hero — Sep 11, 2026)
  {
    id: "india-asia-cup-2026-final-win",
    title: "India Clinch Asia Cup 2026 Title with Nerveless Chase in Dubai Final",
    excerpt: "Chasing 182 under the Dubai lights, India held their composure through a tense final over to beat their arch-rivals and lift a record-extending Asia Cup crown, capping a flawless unbeaten campaign.",
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
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    author: "Rajesh Sharma",
    publishedAt: "Sep 11, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 2 — GST 2.0 (Sep 11)
  {
    id: "gst-2-simplified-slabs-rollout",
    title: "GST 2.0 Goes Live: Simplified Two-Slab Structure Cheers Households and Small Business",
    excerpt: "The next-generation Goods and Services Tax framework took effect this week, collapsing multiple rates into a cleaner structure that the government says will cut prices on everyday essentials and ease compliance for MSMEs.",
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
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80",
    author: "Amit Verma",
    publishedAt: "Sep 11, 2026",
    readTime: "4 min read",
    isFeatured: true,
    isTrending: true
  },
  // 3 — Monsoon Session concludes (Sep 10)
  {
    id: "monsoon-session-concludes-2026",
    title: "Monsoon Session Wraps Up: Data Rules, Skilling Push and Jobs Debate Dominate",
    excerpt: "Parliament concluded its Monsoon Session with the government clearing a clutch of economic bills, even as the Opposition pressed hard on employment and price rise in a series of sharp exchanges.",
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
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop&q=80",
    author: "Sanjay Das",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isFeatured: true,
    isTrending: true
  },
  // 4 — ISRO Gaganyaan crewed timeline (Sep 10)
  {
    id: "isro-gaganyaan-crew-timeline",
    title: "ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review",
    excerpt: "India moved a decisive step closer to its first human spaceflight as ISRO announced a firm window for the crewed Gaganyaan mission, following a clean bill of health from its final major systems review.",
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
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&auto=format&fit=crop&q=80",
    author: "Neha Gupta",
    publishedAt: "Sep 10, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 5 — Post-monsoon dengue (Sep 9)
  {
    id: "post-monsoon-dengue-advisory",
    title: "Post-Monsoon Health Watch: Dengue Cases Peak as North India Steps Up Fogging",
    excerpt: "With the monsoon retreating, health departments have flagged the seasonal peak in dengue and chikungunya, urging citizens to clear stagnant water and watch for warning symptoms.",
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
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Anita Singh",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 6 — Bollywood festive release (Sep 9)
  {
    id: "bollywood-festive-season-blockbuster",
    title: "Festive Season Roars In as Big Bollywood Release Posts Year-Best Opening",
    excerpt: "The Hindi film industry kicked off the festive stretch in style, with a much-anticipated release drawing packed houses across the country and delivering the biggest opening weekend of 2026 so far.",
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
    category: "bollywood",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    author: "Pooja Sharma",
    publishedAt: "Sep 9, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 7 — CBSE two board exams (Sep 8)
  {
    id: "cbse-two-board-exams-rollout",
    title: "CBSE Releases Guidelines for Twice-a-Year Class 10 Board Exams",
    excerpt: "The board has published detailed guidelines for its landmark reform allowing Class 10 students two exam attempts a year, spelling out the exam windows, syllabus coverage and the best-of-two scoring rule.",
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
    category: "education",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80",
    author: "Kavita Reddy",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 8 — Women's cricket (Sep 8)
  {
    id: "india-women-series-win-momentum",
    title: "Smriti Mandhana Masterclass Powers India Women to Commanding Series Win",
    excerpt: "A sublime century from Smriti Mandhana and a disciplined bowling effort handed India Women a series victory, sharpening their credentials ahead of a marquee home season.",
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
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80",
    author: "Suresh Nair",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 9 — RBI policy (Sep 7)
  {
    id: "rbi-policy-holds-rate-growth",
    title: "RBI Holds Repo Rate, Lifts Growth Outlook as Inflation Stays Benign",
    excerpt: "The Reserve Bank of India kept its benchmark rate unchanged and nudged up its growth forecast, striking an upbeat tone as a good monsoon and cooling prices brightened the outlook.",
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
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80",
    author: "Amit Verma",
    publishedAt: "Sep 7, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 10 — Prajwal Jha profile (evergreen, re-dated Sep 7)
  {
    id: "prajwal-jha-young-innovator",
    title: "Prajwal Jha: The Young Innovator Redefining Student Entrepreneurship in Delhi",
    excerpt: "Delhi Technological University student Prajwal Jha has been named among the Top 60 most innovative students in India by Delhi CM Rekha Gupta — capping a journey spanning solar-dryer research, youth governance, and organising one of the world’s biggest hackathons.",
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
    category: "technology",
    imageUrl: "/prj.png",
    author: "The Fista Desk",
    publishedAt: "Sep 7, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 11 — India-EU FTA ratification (Sep 6)
  {
    id: "india-eu-fta-ratification",
    title: "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
    excerpt: "The landmark India–European Union free trade agreement moved through its final ratification steps, opening one of the world’s largest markets to Indian exporters across textiles, pharma and IT services.",
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
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80",
    author: "Meera Joshi",
    publishedAt: "Sep 6, 2026",
    readTime: "5 min read",
    isTrending: true
  },
  // 12 — India semiconductor (Sep 6)
  {
    id: "india-semiconductor-scale-up",
    title: "India's Chip Mission Scales Up as Second Packaging Line Comes Online",
    excerpt: "India’s semiconductor ambitions gathered pace as a second domestic packaging line began commercial output, a key step towards cutting import dependence and anchoring a homegrown electronics ecosystem.",
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
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Priya Sharma",
    publishedAt: "Sep 6, 2026",
    readTime: "5 min read",
    isTrending: true
  },
  // 13 — Preventive health / lifestyle (Sep 5)
  {
    id: "preventive-health-screening-push",
    title: "Doctors Urge Annual Health Screening as Lifestyle Diseases Rise Among Young Indians",
    excerpt: "Health experts are calling for wider adoption of preventive check-ups, warning that early screening and simple lifestyle changes can sharply cut the burden of diabetes, hypertension and heart disease.",
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
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Anita Singh",
    publishedAt: "Sep 5, 2026",
    readTime: "4 min read"
  },
  // 14 — India AI Mission (Sep 5)
  {
    id: "india-ai-mission-compute-push",
    title: "India AI Mission Expands Public Compute Access for Startups and Researchers",
    excerpt: "The government widened access to subsidised GPU compute under the India AI Mission, aiming to lower the entry barrier for startups, universities and researchers building homegrown AI models.",
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
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80",
    author: "Neha Gupta",
    publishedAt: "Sep 5, 2026",
    readTime: "5 min read"
  }
];
const liveMatches = [
  {
    id: "1",
    sport: "Cricket",
    tournament: "Asia Cup 2026 — Final",
    venue: "Dubai International Stadium",
    team1: {
      name: "India",
      shortName: "IND",
      flag: "🇮🇳",
      score: "182/6",
      overs: "(19.4 ov)"
    },
    team2: {
      name: "Pakistan",
      shortName: "PAK",
      flag: "🇵🇰",
      score: "181/7",
      overs: "(20 ov)"
    },
    status: "completed"
  },
  {
    id: "2",
    sport: "Cricket",
    tournament: "Women's ODI Series — India",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    team1: {
      name: "India Women",
      shortName: "IND-W",
      flag: "🇮🇳",
      score: "289/4",
      overs: "(50 ov)"
    },
    team2: {
      name: "Australia Women",
      shortName: "AUS-W",
      flag: "🇦🇺",
      score: "246/9",
      overs: "(50 ov)"
    },
    status: "completed"
  },
  {
    id: "3",
    sport: "Cricket",
    tournament: "Duleep Trophy 2026 — Semi-Final",
    venue: "M. A. Chidambaram Stadium, Chennai",
    team1: {
      name: "South Zone",
      shortName: "SZ",
      flag: "🏏",
      score: "312/6",
      overs: "(Day 2)"
    },
    team2: {
      name: "West Zone",
      shortName: "WZ",
      flag: "🏏",
      score: "—",
      overs: ""
    },
    status: "live"
  },
  {
    id: "4",
    sport: "Cricket",
    tournament: "India tour of Australia 2026 — 1st T20I",
    venue: "MCG, Melbourne",
    team1: {
      name: "Australia",
      shortName: "AUS",
      flag: "🇦🇺",
      score: "—",
      overs: ""
    },
    team2: {
      name: "India",
      shortName: "IND",
      flag: "🇮🇳",
      score: "—",
      overs: ""
    },
    status: "upcoming"
  },
  {
    id: "5",
    sport: "Cricket",
    tournament: "Ranji Trophy 2026-27 — Round 1",
    venue: "Arun Jaitley Stadium, Delhi",
    team1: {
      name: "Delhi",
      shortName: "DEL",
      flag: "🏏",
      score: "—",
      overs: ""
    },
    team2: {
      name: "Mumbai",
      shortName: "MUM",
      flag: "🏏",
      score: "—",
      overs: ""
    },
    status: "upcoming"
  }
];
const getArticlesByCategory = (category) => {
  return articles.filter((article) => article.category === category);
};
const getTrendingArticles = () => {
  return articles.filter((article) => article.isTrending);
};
const breakingHeadlines = [
  "India Clinch Asia Cup 2026 Title with Nerveless Chase in the Dubai Final",
  "GST 2.0 Goes Live: Simplified Two-Slab Structure Takes Effect Nationwide",
  "ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review",
  "Monsoon Session Wraps Up: Data Rules and Skilling Push Cleared in Parliament",
  "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
  "RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign"
];
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const navItems = [
    { name: "Home", path: "/" },
    ...categories.map((cat) => ({ name: cat.name, path: `/category/${cat.slug}` }))
  ];
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (!isScrolled && y > 80) setIsScrolled(true);
      else if (isScrolled && y < 20) setIsScrolled(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-primary text-white overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-350 mx-auto flex items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-primary-dark px-4 py-2 flex items-center gap-2 shrink-0 z-10", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full breaking-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest whitespace-nowrap", children: "Breaking" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden flex-1", children: /* @__PURE__ */ jsx("div", { className: "ticker-scroll flex items-center gap-12 py-2 px-4 whitespace-nowrap", children: [...breakingHeadlines, ...breakingHeadlines].map((headline, i) => /* @__PURE__ */ jsxs("span", { className: "text-[12px] font-medium flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 opacity-60" }),
            headline
          ] }, i)) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: `bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : "border-b border-neutral-200"}`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `border-b border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "max-h-0 opacity-0 border-transparent" : "max-h-12 opacity-100"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "container-page py-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[11px] text-neutral-500 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
              }) }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "|" }),
              /* @__PURE__ */ jsx("span", { children: "New Delhi, India" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@fista.in", className: "text-[11px] text-neutral-500 hover:text-primary transition-colors uppercase tracking-wider font-medium", children: "info@fista.in" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-5"}`, children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/1.png",
            alt: "The Fista",
            className: `w-auto transition-all duration-300 ${isScrolled ? "h-8" : "h-10 md:h-12"}`
          }
        ) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.path,
            className: `px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-all duration-200 border-b-2 ${location.pathname === item.path ? "text-primary border-primary" : "text-neutral-700 border-transparent hover:text-primary hover:border-primary/30"}`,
            children: item.name
          },
          item.path
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("button", { className: "p-2.5 hover:bg-neutral-100 rounded-md transition-colors", children: /* @__PURE__ */ jsx(Search, { className: "w-4.5 h-4.5 text-neutral-600" }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden p-2.5 hover:bg-neutral-100 rounded-md transition-colors",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-neutral-700" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5 text-neutral-700" })
            }
          )
        ] })
      ] }) })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-white border-t border-neutral-200 shadow-xl", children: /* @__PURE__ */ jsx("nav", { className: "container-page py-6 flex flex-col", children: navItems.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        to: item.path,
        onClick: () => setIsMenuOpen(false),
        className: `py-3 text-sm font-semibold uppercase tracking-wider border-b border-neutral-100 last:border-0 transition-colors ${location.pathname === item.path ? "text-primary" : "text-neutral-700 hover:text-primary"}`,
        children: item.name
      },
      item.path
    )) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-secondary text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white", children: "Stay Informed" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mt-1", children: "Get breaking news delivered to your inbox" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full md:w-auto", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "Enter your email",
            className: "flex-1 md:w-72 px-5 py-3 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 text-sm border border-white/30 focus:outline-none focus:border-white focus:bg-white/25 transition-all"
          }
        ),
        /* @__PURE__ */ jsxs("button", { className: "px-6 py-3 bg-secondary hover:bg-secondary-light text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2", children: [
          "Subscribe ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page py-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center mb-5", children: /* @__PURE__ */ jsx("img", { src: "/2.png", alt: "The Fista", className: "h-12 w-auto -ml-6" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm leading-relaxed mb-6 max-w-xs", children: "India's trusted news platform delivering credible journalism across cricket, politics, health, business, and more." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "YouTube" }
          ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200",
              "aria-label": label,
              children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5", children: "Sections" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: categories.map((cat) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: `/category/${cat.slug}`,
              className: "text-white/60 hover:text-white text-sm transition-colors",
              children: cat.name
            }
          ) }, cat.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5", children: "Company" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: ["About Us", "Contact", "Careers", "Advertise"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white text-sm transition-colors", children: item }) }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5", children: "Legal" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white text-sm transition-colors", children: item }) }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5", children: "Reach Us" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-white/60 text-sm", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 shrink-0 text-primary mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "New Delhi, India" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-white/60 text-sm", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "info@fista.in" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-white/30 text-xs uppercase tracking-wider", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " The Fista Media Group. All rights reserved."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/20 text-xs", children: "Crafted with precision in India" })
      ] })
    ] })
  ] });
}
function HeroSection({ featuredArticle, recentArticles }) {
  const [activeTab, setActiveTab] = useState("recent");
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredArticles = [featuredArticle, ...recentArticles.slice(0, 2)];
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  }, [featuredArticles.length]);
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  }, [featuredArticles.length]);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5e3);
    return () => clearInterval(interval);
  }, [nextSlide]);
  const currentArticle = featuredArticles[currentSlide];
  return /* @__PURE__ */ jsx("section", { className: "container-page py-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: `/article/${currentArticle.id}`, className: "block group", children: [
        /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/9] overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: currentArticle.imageUrl,
            alt: currentArticle.title,
            className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-widest text-primary", children: currentArticle.category }),
            /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "·" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-neutral-400 text-xs", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: currentArticle.publishedAt })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-secondary leading-tight mb-3 group-hover:text-primary transition-colors", children: currentArticle.title }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-[15px] leading-relaxed max-w-2xl line-clamp-2 hidden md:block", children: currentArticle.excerpt })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-5 pt-5 border-t border-neutral-200", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: prevSlide,
            className: "w-9 h-9 border border-neutral-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: featuredArticles.map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setCurrentSlide(i),
            className: `h-1 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-8" : "bg-neutral-300 hover:bg-neutral-400 w-4"}`
          },
          i
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: nextSlide,
            className: "w-9 h-9 border border-neutral-300 hover:border-primary hover:text-primary flex items-center justify-center transition-all",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200 h-full flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex border-b border-neutral-200", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab("recent"),
            className: `flex-1 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === "recent" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-neutral-500 hover:text-secondary"}`,
            children: "Recent"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab("top"),
            className: `flex-1 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === "top" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-neutral-500 hover:text-secondary"}`,
            children: "Top Stories"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 divide-y divide-neutral-100", children: recentArticles.slice(0, 5).map((article, idx) => /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "flex gap-4 p-4 group hover:bg-neutral-50 transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-display font-bold text-neutral-200 group-hover:text-primary/30 transition-colors leading-none mt-0.5", children: String(idx + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-primary", children: article.category }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1", children: article.title }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-neutral-400 mt-1.5 block", children: article.publishedAt })
        ] })
      ] }, article.id)) }),
      /* @__PURE__ */ jsxs(Link, { to: "/category/cricket", className: "flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5 transition-colors", children: [
        "View All Stories ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
      ] })
    ] }) })
  ] }) });
}
function useItemsPerSlide() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);
  return itemsPerSlide;
}
function TrendingNewsSection({ articles: articles2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayArticles = articles2.slice(0, 9);
  const itemsPerSlide = useItemsPerSlide();
  const totalSlides = Math.ceil(displayArticles.length / itemsPerSlide);
  const intervalRef = useRef(null);
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5e3);
  }, [totalSlides]);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    startAutoSlide();
  }, [totalSlides, startAutoSlide]);
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAutoSlide();
  }, [totalSlides, startAutoSlide]);
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    startAutoSlide();
  }, [startAutoSlide]);
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide]);
  return /* @__PURE__ */ jsxs("section", { className: "py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest text-primary", children: "Trending Now" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold text-secondary", children: "What's Hot" }),
        /* @__PURE__ */ jsx("div", { className: "section-rule" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex gap-1.5", children: Array.from({ length: totalSlides }).map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => goToSlide(i),
            className: `h-1 transition-all duration-500 ${i === currentIndex ? "bg-primary w-8" : "bg-neutral-300 hover:bg-neutral-400 w-3"}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: prevSlide,
              className: "w-9 h-9 border border-neutral-300 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: nextSlide,
              className: "w-9 h-9 border border-neutral-300 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-700 ease-out",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: Array.from({ length: totalSlides }).map((_, slideIndex) => /* @__PURE__ */ jsx("div", { className: "w-full shrink-0", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: displayArticles.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((article) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/article/${article.id}`,
            className: "bg-white border border-neutral-200 overflow-hidden group hover:border-neutral-300 hover:shadow-lg transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: article.imageUrl,
                  alt: article.title,
                  className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] text-neutral-400 mb-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary uppercase tracking-wider", children: article.category }),
                  /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "·" }),
                  /* @__PURE__ */ jsx("span", { children: article.publishedAt })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mb-3", children: article.title }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm line-clamp-2 mb-4", children: article.excerpt }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between pt-3 border-t border-neutral-100", children: /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: article.readTime }) })
              ] })
            ]
          },
          article.id
        )) }) }, slideIndex))
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex sm:hidden justify-center gap-1.5 mt-6", children: Array.from({ length: totalSlides }).map((_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => goToSlide(i),
        className: `h-1 transition-all duration-500 ${i === currentIndex ? "bg-primary w-8" : "bg-neutral-300 w-3"}`
      },
      i
    )) })
  ] });
}
function FeaturedNewsSection({ articles: articles2 }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredArticles = activeCategory === "all" ? articles2 : articles2.filter((a) => a.category === activeCategory);
  const categoryTabs = [
    { id: "all", name: "All" },
    ...categories.map((c) => ({ id: c.id, name: c.name }))
  ];
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold text-secondary", children: "Editor's Picks" }),
        /* @__PURE__ */ jsx("div", { className: "section-rule" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide", children: categoryTabs.slice(0, 5).map((cat) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveCategory(cat.id),
          className: `px-4 py-2 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-200 border-b-2 ${activeCategory === cat.id ? "text-primary border-primary" : "text-neutral-500 border-transparent hover:text-secondary hover:border-neutral-300"}`,
          children: cat.name
        },
        cat.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-6", children: [
      filteredArticles[0] && /* @__PURE__ */ jsxs(Link, { to: `/article/${filteredArticles[0].id}`, className: "lg:col-span-5 lg:row-span-2 group flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: filteredArticles[0].imageUrl,
            alt: filteredArticles[0].title,
            className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-widest text-primary", children: filteredArticles[0].category }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl lg:text-2xl font-bold text-secondary leading-snug mt-2 mb-2 group-hover:text-primary transition-colors", children: filteredArticles[0].title }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm line-clamp-2 hidden lg:block leading-relaxed", children: filteredArticles[0].excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-400 text-xs mt-3", children: [
            /* @__PURE__ */ jsx("span", { children: filteredArticles[0].publishedAt }),
            /* @__PURE__ */ jsx("span", { children: "·" }),
            /* @__PURE__ */ jsx("span", { children: filteredArticles[0].readTime })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-4", children: [
        filteredArticles.slice(1, 4).map((article) => /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "flex gap-5 group bg-white border border-neutral-100 hover:border-neutral-200 p-4 transition-all", children: [
          /* @__PURE__ */ jsx("div", { className: "w-32 h-24 shrink-0 overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: article.imageUrl,
              alt: article.title,
              className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold uppercase tracking-widest text-primary", children: article.category }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "·" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: article.publishedAt })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug text-base", children: article.title })
          ] })
        ] }, article.id)),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxs(Link, { to: "/category/politics", className: "flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors", children: [
          "More Stories ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] }) })
      ] })
    ] })
  ] });
}
function LiveScoreWidget({ matches }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-secondary text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "px-5 pt-5 pb-4 border-b border-white/10", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "live-badge bg-primary! animate-none!", children: [
        /* @__PURE__ */ jsx(Radio, { className: "w-3 h-3 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { children: "Live" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-widest text-white/60", children: "Scoreboard" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "divide-y divide-white/5", children: matches.map((match) => /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 hover:bg-white/5 transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-primary", children: match.sport }),
        /* @__PURE__ */ jsx("span", { children: "·" }),
        /* @__PURE__ */ jsx("span", { children: match.tournament }),
        match.status === "live" && /* @__PURE__ */ jsxs("span", { className: "ml-auto flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "LIVE" })
        ] }),
        match.status === "upcoming" && /* @__PURE__ */ jsx("span", { className: "ml-auto text-white/30 font-bold", children: "UPCOMING" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base", children: match.team1.flag }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-white/90", children: match.team1.shortName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/30", children: match.team1.overs }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-sm min-w-12.5 text-right", children: match.team1.score })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base", children: match.team2.flag }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-white/90", children: match.team2.shortName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/30", children: match.team2.overs }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-sm min-w-12.5 text-right", children: match.team2.score })
          ] })
        ] })
      ] })
    ] }, match.id)) }),
    /* @__PURE__ */ jsxs("button", { className: "w-full px-5 py-3.5 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-white", children: [
      "All Scores ",
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
const SITE = {
  name: "The Fista",
  url: "https://thefista.in",
  // Trailing-slash-free base. All canonical URLs are built from this.
  locale: "en_IN",
  language: "en",
  twitter: "@thefista",
  logo: "https://thefista.in/1.png",
  defaultImage: "https://thefista.in/1.png",
  description: "The Fista is India's trusted news platform — credible, in-depth coverage of cricket, politics, business, health, Bollywood, education and technology."
};
function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}
function absoluteImage(src) {
  if (!src) return SITE.defaultImage;
  if (src.startsWith("http")) return src;
  return `${SITE.url}${src.startsWith("/") ? src : `/${src}`}`;
}
function toISODate(display) {
  const parsed = /* @__PURE__ */ new Date(`${display} 09:00:00 GMT+0530`);
  if (isNaN(parsed.getTime())) return (/* @__PURE__ */ new Date()).toISOString();
  return parsed.toISOString();
}
function buildMetaTags(data) {
  const image = data.image || SITE.defaultImage;
  const ogType = data.ogType || "website";
  const tags = [
    { name: "description", content: data.description },
    { name: "robots", content: data.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    // Open Graph
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:title", content: data.title },
    { property: "og:description", content: data.description },
    { property: "og:url", content: data.canonical },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: data.imageAlt || data.title },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE.twitter },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: data.description },
    { name: "twitter:image", content: image }
  ];
  if (data.keywords) tags.push({ name: "keywords", content: data.keywords });
  if (ogType === "article") {
    if (data.publishedTime) tags.push({ property: "article:published_time", content: data.publishedTime });
    tags.push({ property: "article:modified_time", content: data.modifiedTime || data.publishedTime || "" });
    if (data.author) tags.push({ property: "article:author", content: data.author });
    if (data.section) tags.push({ property: "article:section", content: data.section });
    tags.push({ property: "article:publisher", content: SITE.url });
  }
  return tags.filter((t) => t.content);
}
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderHeadToString(data) {
  const parts = [];
  parts.push(`<title>${escapeHtml(data.title)}</title>`);
  parts.push(`<link rel="canonical" href="${escapeHtml(data.canonical)}" />`);
  for (const tag of buildMetaTags(data)) {
    const attr = tag.name ? `name="${escapeHtml(tag.name)}"` : `property="${escapeHtml(tag.property)}"`;
    parts.push(`<meta ${attr} content="${escapeHtml(tag.content)}" />`);
  }
  for (const block of data.jsonLd || []) {
    const json = JSON.stringify(block).replace(/</g, "\\u003c");
    parts.push(`<script type="application/ld+json">${json}<\/script>`);
  }
  return parts.join("\n    ");
}
const SeoCollectorContext = createContext(null);
const MANAGED = "data-fista-seo";
function applyToDocument(data) {
  document.title = data.title;
  document.querySelectorAll(`[${MANAGED}]`).forEach((el) => el.parentElement?.removeChild(el));
  const head = document.head;
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = data.canonical;
  canonical.setAttribute(MANAGED, "");
  head.appendChild(canonical);
  for (const tag of buildMetaTags(data)) {
    const meta = document.createElement("meta");
    if (tag.name) meta.setAttribute("name", tag.name);
    if (tag.property) meta.setAttribute("property", tag.property);
    meta.setAttribute("content", tag.content);
    meta.setAttribute(MANAGED, "");
    head.appendChild(meta);
  }
  for (const block of data.jsonLd || []) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(block);
    script.setAttribute(MANAGED, "");
    head.appendChild(script);
  }
}
function Seo(data) {
  const collector = useContext(SeoCollectorContext);
  if (collector) collector.data = data;
  useEffect(() => {
    applyToDocument(data);
  }, [data.canonical, data.title, data.description]);
  return null;
}
function organizationNode() {
  return {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo
    },
    sameAs: [
      "https://twitter.com/thefista",
      "https://www.facebook.com/thefista",
      "https://www.instagram.com/thefista"
    ]
  };
}
function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language
  };
}
function breadcrumbNode(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function buildHomeSeo() {
  const title = `${SITE.name} — India's Trusted News Platform`;
  return {
    title,
    description: SITE.description,
    canonical: absoluteUrl("/"),
    image: SITE.defaultImage,
    ogType: "website",
    keywords: "India news, cricket news, politics, business, health, Bollywood, education, technology, breaking news India",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [organizationNode(), websiteNode()]
      }
    ]
  };
}
function buildCategorySeo(category, articles2) {
  const url = absoluteUrl(`/category/${category.slug}`);
  const title = `${category.name} News — Latest ${category.name} Updates | ${SITE.name}`;
  const description = `Latest ${category.name.toLowerCase()} news, analysis and updates from India and around the world, curated by ${SITE.name}.`;
  return {
    title,
    description,
    canonical: url,
    image: absoluteImage(articles2[0]?.imageUrl),
    ogType: "website",
    keywords: `${category.name} news, India ${category.name.toLowerCase()}, latest ${category.name.toLowerCase()}`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: SITE.language,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: articles2.slice(0, 15).map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/article/${a.id}`),
            name: a.title
          }))
        }
      },
      {
        "@context": "https://schema.org",
        ...breadcrumbNode([
          { name: "Home", url: `${SITE.url}/` },
          { name: category.name, url }
        ])
      }
    ]
  };
}
function buildArticleSeo(article, category) {
  const url = absoluteUrl(`/article/${article.id}`);
  const image = absoluteImage(article.imageUrl);
  const published = toISODate(article.publishedAt);
  const sectionName = category?.name || article.category;
  const newsArticle = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    image: [image],
    datePublished: published,
    dateModified: published,
    articleSection: sectionName,
    inLanguage: SITE.language,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo }
    },
    isAccessibleForFree: true
  };
  return {
    title: `${article.title} | ${SITE.name}`,
    description: article.excerpt,
    canonical: url,
    image,
    imageAlt: article.title,
    ogType: "article",
    publishedTime: published,
    modifiedTime: published,
    author: article.author,
    section: sectionName,
    keywords: `${sectionName}, ${article.title}, India news, ${SITE.name}`,
    jsonLd: [
      newsArticle,
      {
        "@context": "https://schema.org",
        ...breadcrumbNode([
          { name: "Home", url: `${SITE.url}/` },
          { name: sectionName, url: absoluteUrl(`/category/${category?.slug || article.category}`) },
          { name: article.title, url }
        ])
      }
    ]
  };
}
function buildNotFoundSeo(path) {
  return {
    title: `Page Not Found | ${SITE.name}`,
    description: "The page you are looking for could not be found.",
    canonical: absoluteUrl(path),
    ogType: "website",
    robots: "noindex, follow"
  };
}
function HomePage() {
  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];
  const recentArticles = articles.slice(0, 5);
  const trendingArticles = getTrendingArticles();
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-50", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildHomeSeo() }),
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ jsx(
      HeroSection,
      {
        featuredArticle,
        recentArticles
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-14 lg:py-16", "aria-label": "Trending stories", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsx(TrendingNewsSection, { articles: trendingArticles }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx("div", { className: "sticky top-32", children: /* @__PURE__ */ jsx(LiveScoreWidget, { matches: liveMatches }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white border-y border-neutral-200", children: /* @__PURE__ */ jsx(FeaturedNewsSection, { articles }) })
  ] });
}
function NotFoundPage() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-6 py-28 text-center", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildNotFoundSeo(pathname) }),
    /* @__PURE__ */ jsx("span", { className: "font-display text-7xl font-bold text-neutral-200", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold text-secondary mt-4 mb-3", children: "Page Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "text-neutral-500 mb-8", children: "The page you're looking for doesn't exist or may have been moved." }),
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-primary inline-flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
      "Back to Home"
    ] })
  ] });
}
function CategoryPage() {
  const { categorySlug } = useParams();
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryArticles = categorySlug ? getArticlesByCategory(categorySlug) : [];
  const handleShare = (e, platform, article) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/article/${article.id}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(article.title);
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
        break;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };
  if (!category) {
    return /* @__PURE__ */ jsx(NotFoundPage, {});
  }
  const featuredArticle = categoryArticles[0];
  const restArticles = categoryArticles.slice(1);
  const otherCategoryArticles = articles.filter((a) => a.category !== category.id).slice(0, 5);
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-50 min-h-screen", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildCategorySeo(category, categoryArticles) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex items-center gap-2 text-[12px]", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-400 hover:text-primary transition-colors font-medium", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary capitalize", children: category.name })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-secondary overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)`
      } }) }),
      /* @__PURE__ */ jsx("div", { className: "container-page py-12 lg:py-16 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-1.5 h-16 shrink-0 mt-1",
            style: { backgroundColor: category.color }
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] font-bold uppercase tracking-widest mb-2 block",
              style: { color: category.color },
              children: "Section"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-3", children: category.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm lg:text-base max-w-xl", children: [
            "Stay updated with the latest ",
            category.name.toLowerCase(),
            " news from India and around the world."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mt-5 text-white/30 text-xs", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              categoryArticles.length,
              " Articles"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/20" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "Updated ",
              categoryArticles[0]?.publishedAt || "Recently"
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    featuredArticle && /* @__PURE__ */ jsx("div", { className: "container-page -mt-6 relative z-10 mb-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: `/article/${featuredArticle.id}`,
        className: "block group",
        children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 relative h-64 lg:h-96 overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: featuredArticle.imageUrl,
                alt: featuredArticle.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-3 py-1.5 text-white text-[10px] font-bold uppercase tracking-widest",
                style: { backgroundColor: category.color },
                children: "Featured"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-[10px] font-bold uppercase tracking-widest mb-3",
                style: { color: category.color },
                children: featuredArticle.category
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl lg:text-3xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight mb-4", children: featuredArticle.title }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3", children: featuredArticle.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-neutral-400", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: featuredArticle.author })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-200", children: "|" }),
              /* @__PURE__ */ jsx("span", { children: featuredArticle.publishedAt }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-200", children: "|" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { children: featuredArticle.readTime })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 pt-5 border-t border-neutral-100 flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "text-[11px] font-bold uppercase tracking-widest text-primary group-hover:gap-3 flex items-center gap-1.5 transition-all", children: [
              "Read Full Story ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] }) })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "container-page pb-14", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: restArticles.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold text-secondary", children: "Latest Stories" }),
          /* @__PURE__ */ jsx("div", { className: "section-rule" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: restArticles.map((article) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/article/${article.id}`,
            className: "bg-white border border-neutral-200 overflow-hidden group hover:border-neutral-300 hover:shadow-lg transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: article.imageUrl,
                    alt: article.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "px-2.5 py-1 text-white text-[9px] font-bold uppercase tracking-widest",
                    style: { backgroundColor: category.color },
                    children: article.category
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors mb-2 leading-snug", children: article.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 line-clamp-2 mb-4", children: article.excerpt }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-neutral-100", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[11px] text-neutral-400", children: [
                    /* @__PURE__ */ jsx("span", { children: article.publishedAt }),
                    /* @__PURE__ */ jsx("span", { className: "text-neutral-200", children: "|" }),
                    /* @__PURE__ */ jsx("span", { children: article.readTime })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: (e) => handleShare(e, "facebook", article),
                        className: "p-1.5 bg-neutral-50 hover:bg-blue-50 hover:text-blue-600 text-neutral-400 transition-colors rounded-sm",
                        children: /* @__PURE__ */ jsx(Facebook, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: (e) => handleShare(e, "twitter", article),
                        className: "p-1.5 bg-neutral-50 hover:bg-sky-50 hover:text-sky-500 text-neutral-400 transition-colors rounded-sm",
                        children: /* @__PURE__ */ jsx(Twitter, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: (e) => handleShare(e, "whatsapp", article),
                        className: "p-1.5 bg-neutral-50 hover:bg-green-50 hover:text-green-600 text-neutral-400 transition-colors rounded-sm",
                        children: /* @__PURE__ */ jsx(Share2, { className: "w-3 h-3" })
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          },
          article.id
        )) })
      ] }) : /* @__PURE__ */ jsx("div", { className: "text-center py-20 bg-white border border-neutral-200", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-lg font-display", children: "No more articles in this section." }) }) }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-28 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200", children: [
          /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200", children: /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-primary", children: "Browse Sections" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 grid grid-cols-2 gap-2", children: categories.filter((c) => c.slug !== categorySlug).map((cat) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/category/${cat.slug}`,
              className: "px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-100 hover:border-neutral-300 hover:text-primary text-center transition-all",
              children: cat.name
            },
            cat.slug
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200", children: [
          /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200", children: /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-bold uppercase tracking-widest text-primary", children: "From Other Sections" }) }),
          /* @__PURE__ */ jsx("div", { className: "divide-y divide-neutral-100", children: otherCategoryArticles.map((article) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/article/${article.id}`,
              className: "flex gap-3 p-4 group hover:bg-neutral-50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-14 shrink-0 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: article.imageUrl, alt: article.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] font-bold uppercase tracking-widest text-primary block mb-1", children: article.category }),
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: article.title })
                ] })
              ]
            },
            article.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-white mb-2", children: "Stay Updated" }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm mb-4", children: [
            "Get the latest ",
            category.name.toLowerCase(),
            " stories in your inbox"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Your email",
              className: "w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-widest transition-colors", children: "Subscribe" })
        ] })
      ] }) })
    ] }) })
  ] });
}
function ArticlePage() {
  const { articleId } = useParams();
  const [copySuccess, setCopySuccess] = useState(false);
  const article = articles.find((a) => a.id === articleId);
  const category = categories.find((c) => c.id === article?.category);
  if (!article) {
    return /* @__PURE__ */ jsx(NotFoundPage, {});
  }
  const articleUrl = typeof window !== "undefined" ? window.location.href : `https://thefista.in/article/${article.id}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(article.title);
  const encodedExcerpt = encodeURIComponent(article.excerpt);
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0ARead more: ${encodedUrl}`
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleShare = (platform) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };
  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);
  const currentIdx = articles.findIndex((a) => a.id === articleId);
  const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
  const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-50", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildArticleSeo(article, category) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex items-center gap-2 text-[12px]", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-400 hover:text-primary transition-colors font-medium", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx(Link, { to: `/category/${category?.slug || article.category}`, className: "text-neutral-400 hover:text-primary transition-colors font-medium capitalize", children: category?.name || article.category }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-600 font-semibold truncate max-w-xs", children: article.title })
    ] }) }),
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[34rem] overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: article.imageUrl,
            alt: article.title,
            className: "w-full h-full object-cover",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxs("div", { className: "container-page pb-9 lg:pb-14", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "inline-block px-4 py-1.5 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4",
              style: { backgroundColor: category?.color || "#C8102E" },
              children: category?.name || article.category
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-[1.75rem] md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.08] max-w-4xl", children: article.title })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white border-b border-neutral-200 sticky top-0 z-30", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "block font-semibold text-secondary text-sm leading-tight", children: article.author }),
              /* @__PURE__ */ jsx("span", { className: "block text-[11px] text-neutral-400", children: "The Fista" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-4 text-xs text-neutral-400", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("time", { dateTime: toISODate(article.publishedAt), children: article.publishedAt })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: article.readTime })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 hidden sm:block", children: "Share" }),
          [
            { platform: "facebook", icon: Facebook, hoverBg: "hover:bg-blue-600" },
            { platform: "twitter", icon: Twitter, hoverBg: "hover:bg-sky-500" },
            { platform: "linkedin", icon: Linkedin, hoverBg: "hover:bg-blue-700" },
            { platform: "whatsapp", icon: MessageCircle, hoverBg: "hover:bg-green-500" }
          ].map(({ platform, icon: Icon, hoverBg }) => /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": `Share on ${platform}`,
              onClick: () => handleShare(platform),
              className: `w-8 h-8 bg-neutral-100 ${hoverBg} hover:text-white text-neutral-500 rounded-md flex items-center justify-center transition-all duration-200`,
              children: /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5" })
            },
            platform
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Copy link",
              onClick: copyToClipboard,
              className: `w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${copySuccess ? "bg-green-500 text-white" : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,
              children: /* @__PURE__ */ jsx(Link2, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container-page py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl lg:text-[1.6rem] text-neutral-700 leading-relaxed mb-10 border-l-4 border-primary pl-6", children: article.excerpt }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "article-prose max-w-[68ch]",
              dangerouslySetInnerHTML: { __html: article.content }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-12 p-6 bg-white border border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400", children: "Tags" }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm",
                  style: { backgroundColor: `${category?.color}15`, color: category?.color },
                  children: category?.name
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500 rounded-sm", children: "India" }),
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500 rounded-sm", children: "2026" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: [
              { platform: "facebook", label: "Facebook", bg: "bg-blue-600 hover:bg-blue-700" },
              { platform: "twitter", label: "Twitter", bg: "bg-sky-500 hover:bg-sky-600" },
              { platform: "whatsapp", label: "WhatsApp", bg: "bg-green-500 hover:bg-green-600" }
            ].map(({ platform, label, bg }) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleShare(platform),
                className: `px-4 py-2 ${bg} text-white text-[11px] font-bold uppercase tracking-wider transition-colors`,
                children: label
              },
              platform
            )) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
            prevArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${prevArticle.id}`, className: "group p-5 bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1 mb-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3 h-3" }),
                " Previous"
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: prevArticle.title })
            ] }) : /* @__PURE__ */ jsx("div", {}),
            nextArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${nextArticle.id}`, className: "group p-5 bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-sm transition-all text-right", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1 justify-end mb-2", children: [
                "Next ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: nextArticle.title })
            ] }) : /* @__PURE__ */ jsx("div", {})
          ] })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200", children: [
            /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200", children: /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold uppercase tracking-[0.2em] text-primary", children: "Related Stories" }) }),
            /* @__PURE__ */ jsx("div", { className: "divide-y divide-neutral-100", children: relatedArticles.map((related) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/article/${related.id}`,
                className: "flex gap-4 p-4 group hover:bg-neutral-50 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-20 h-16 shrink-0 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: related.imageUrl, alt: related.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: related.title }),
                    /* @__PURE__ */ jsx("span", { className: "text-[11px] text-neutral-400 mt-1 block", children: related.publishedAt })
                  ] })
                ]
              },
              related.id
            )) }),
            category && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/category/${category.slug}`,
                className: "flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary/5 transition-colors",
                children: [
                  "More ",
                  category.name,
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-white mb-2", children: "Stay Updated" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm mb-4", children: "Get the latest stories delivered to your inbox" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                "aria-label": "Email address",
                placeholder: "Your email",
                className: "w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-colors", children: "Subscribe" })
          ] })
        ] }) })
      ] }) })
    ] }),
    relatedArticles.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-white border-t border-neutral-200", "aria-label": `More in ${category?.name}`, children: /* @__PURE__ */ jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl lg:text-3xl font-bold text-secondary", children: [
            "More in ",
            category?.name
          ] }),
          /* @__PURE__ */ jsx("div", { className: "section-rule" })
        ] }),
        category && /* @__PURE__ */ jsxs(Link, { to: `/category/${category.slug}`, className: "text-[11px] font-bold uppercase tracking-[0.2em] text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5", children: [
          "View All ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: relatedArticles.map((related) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/article/${related.id}`,
          className: "group bg-white border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-[0_18px_40px_-24px_rgba(20,17,14,0.35)] transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-52 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: related.imageUrl,
                  alt: related.title,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 bg-white/90 backdrop-blur category-badge", children: related.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: related.title }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm mt-2 line-clamp-2", children: related.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400", children: [
                /* @__PURE__ */ jsx("span", { children: related.publishedAt }),
                /* @__PURE__ */ jsx("span", { className: "text-neutral-200", children: "|" }),
                /* @__PURE__ */ jsx("span", { children: related.readTime })
              ] })
            ] })
          ]
        },
        related.id
      )) })
    ] }) })
  ] });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-neutral-50", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/category/:categorySlug", element: /* @__PURE__ */ jsx(CategoryPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/article/:articleId", element: /* @__PURE__ */ jsx(ArticlePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render(url) {
  const collector = { data: null };
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(SeoCollectorContext.Provider, { value: collector, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  const seo = collector.data ?? buildNotFoundSeo(url);
  return { html, head: renderHeadToString(seo) };
}
function getRoutes() {
  return [
    "/",
    ...categories.map((c) => `/category/${c.slug}`),
    ...articles.map((a) => `/article/${a.id}`)
  ];
}
function getNewsEntries() {
  return articles.map((a) => ({
    path: `/article/${a.id}`,
    title: a.title,
    publishedAt: a.publishedAt
  }));
}
function getSitemapEntries() {
  return [
    { path: "/", lastmod: articles[0]?.publishedAt ?? "", priority: 1, changefreq: "hourly" },
    ...categories.map((c) => ({
      path: `/category/${c.slug}`,
      lastmod: articles.find((a) => a.category === c.id)?.publishedAt ?? "",
      priority: 0.8,
      changefreq: "daily"
    })),
    ...articles.map((a) => ({
      path: `/article/${a.id}`,
      lastmod: a.publishedAt,
      priority: 0.7,
      changefreq: "weekly"
    }))
  ];
}
export {
  getNewsEntries,
  getRoutes,
  getSitemapEntries,
  render
};
