import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useRef, createContext, useContext, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { useLocation, Link, useParams, Routes, Route } from "react-router-dom";
import { ChevronRight, Search, ArrowRight, X, Menu, Send, Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Clock, ArrowUpRight, Flame, ChevronLeft, Radio, Compass, ArrowLeft, User, Share2, Calendar, Linkedin, MessageCircle, Check, Link2 } from "lucide-react";
const categories = [
  { id: "cricket", name: "Cricket", slug: "cricket", color: "#0F766E" },
  { id: "politics", name: "Politics", slug: "politics", color: "#1D4ED8" },
  { id: "health", name: "Health", slug: "health", color: "#DB2777" },
  { id: "bollywood", name: "Bollywood", slug: "bollywood", color: "#9333EA" },
  { id: "business", name: "Business", slug: "business", color: "#B45309" },
  { id: "education", name: "Education", slug: "education", color: "#0891B2" },
  { id: "technology", name: "Technology", slug: "technology", color: "#EA580C" }
];
const articles = [
  // 1 — Asia Cup Final (Featured Hero — Sep 11, 2026)
  {
    id: "india-asia-cup-2026-final-win",
    title: "India Clinch Asia Cup 2026 Title with Nerveless Chase in Dubai Final",
    excerpt: "Chasing 182 under the Dubai lights, India held their nerve through a pulsating final over to beat their arch-rivals and lift a record-extending Asia Cup crown, capping a flawless unbeaten campaign.",
    content: `<p>Dubai, September 11, 2026 — India were crowned champions of the <strong>Asia Cup 2026</strong> on Thursday night, chasing down 182 with two balls to spare in a final that swung on every delivery of the closing over at the Dubai International Stadium. The win extended India's record as the most successful side in the tournament's history and completed an unbeaten run through the competition.</p>
<h2>A Chase Built on Cool Heads</h2>
<p>Set a demanding target on a used surface, India lost an early wicket but were steadied by a composed half-century at the top and a match-defining cameo in the death overs. With 14 needed off the final over, the middle order held firm, picking gaps and running hard to seal a title that had looked out of reach at the halfway stage.</p>
<h2>Key Performers</h2>
<ul>
  <li><strong>Opening stand:</strong> A brisk 74-run partnership set the platform for the chase.</li>
  <li><strong>Death-overs finishing:</strong> Two clean strikes in the 19th over swung momentum decisively.</li>
  <li><strong>Spin in the middle:</strong> Three wickets through the middle phase kept the target within reach.</li>
  <li><strong>Fielding:</strong> Two direct-hit run-outs proved the difference on the night.</li>
</ul>
<h2>What It Means</h2>
<p>The triumph gives India valuable momentum heading into a packed home season and reaffirms the depth of a squad in transition. Selectors will take heart from the way younger players absorbed pressure on the biggest stage in the region.</p>
<blockquote>"We spoke about staying in the present, ball by ball. The boys were fearless when it mattered — that's what makes this group special." — India Captain, post-match presentation</blockquote>`,
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    author: "Rajesh Sharma",
    publishedAt: "Sep 11, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 2 — GST 2.0 (Featured — Sep 11)
  {
    id: "gst-2-simplified-slabs-rollout",
    title: "GST 2.0 Goes Live: Simplified Two-Slab Structure Cheers Households and Small Business",
    excerpt: "The next-generation Goods and Services Tax framework took effect this week, collapsing multiple rates into a cleaner structure the government says will cut prices on everyday essentials and ease compliance for MSMEs.",
    content: `<p>New Delhi, September 11, 2026 — The long-awaited overhaul of India's indirect tax system, popularly dubbed <strong>GST 2.0</strong>, came into force this week, rationalising a tangle of rates into a simpler structure aimed at lowering the burden on essentials and reducing paperwork for small businesses.</p>
<h2>What Changes for Consumers</h2>
<ul>
  <li><strong>Everyday essentials:</strong> A wide basket of daily-use goods moves to a lower slab.</li>
  <li><strong>Simpler rates:</strong> Fewer categories mean less confusion at the point of sale.</li>
  <li><strong>Faster refunds:</strong> A streamlined process promises quicker input-credit settlement.</li>
  <li><strong>Sin and luxury goods:</strong> A special rate keeps high-end and demerit items separate.</li>
</ul>
<h2>Relief for Small Business</h2>
<p>Trade bodies broadly welcomed the reform, saying the simplified filing requirements and clearer classification will cut compliance costs for micro, small and medium enterprises. Economists said the timing — just ahead of the festive season — could give consumption a meaningful lift.</p>
<h2>The Fiscal Balance</h2>
<p>Officials acknowledged a short-term hit to collections but argued that wider compliance and stronger demand would offset it over the medium term. Analysts will watch the first full month of data closely for early signals.</p>`,
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80",
    author: "Amit Verma",
    publishedAt: "Sep 11, 2026",
    readTime: "4 min read",
    isFeatured: true,
    isTrending: true
  },
  // 3 — ISRO Gaganyaan (Sep 11)
  {
    id: "isro-gaganyaan-crewed-window-confirmed",
    title: "ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review",
    excerpt: "India's space agency cleared a major integrated systems review this week, locking in a target window for the first crewed Gaganyaan mission and outlining the final uncrewed test that precedes it.",
    content: `<p>Bengaluru, September 11, 2026 — The Indian Space Research Organisation confirmed a target window for its first crewed <strong>Gaganyaan</strong> mission after clearing a comprehensive integrated systems review, calling the milestone a decisive step toward putting Indian astronauts into low-Earth orbit aboard an indigenous vehicle.</p>
<h2>The Road to Launch</h2>
<p>Officials said one final uncrewed qualification flight — carrying a humanoid test payload — will validate life-support, abort and re-entry systems before crew are cleared to fly. The crew module, service module and human-rated launch vehicle have all completed their respective acceptance milestones.</p>
<h2>Why It Matters</h2>
<ul>
  <li><strong>Sovereign capability:</strong> Gaganyaan would make India the fourth nation to independently fly humans to orbit.</li>
  <li><strong>Ecosystem lift:</strong> Hundreds of domestic suppliers and startups feed the programme.</li>
  <li><strong>Next steps:</strong> The mission is a building block toward a planned Indian space station later in the decade.</li>
</ul>
<h2>The Crew</h2>
<p>The astronaut-designates have completed simulator and centrifuge training and are now in mission-specific rehearsals. ISRO said final crew assignment will be announced closer to the uncrewed test.</p>`,
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Neha Kulkarni",
    publishedAt: "Sep 11, 2026",
    readTime: "5 min read",
    isTrending: true
  },
  // 4 — Monsoon Session concludes (Sep 10)
  {
    id: "monsoon-session-concludes-2026",
    title: "Monsoon Session Wraps Up: Data Rules, Skilling Push and Jobs Debate Dominate",
    excerpt: "Parliament concluded its Monsoon Session with the government clearing a clutch of economic bills, even as the Opposition pressed hard on employment and price rise in a series of sharp exchanges.",
    content: `<p>New Delhi, September 10, 2026 — The Monsoon Session of Parliament drew to a close on Wednesday, with the treasury benches claiming a productive stretch of legislative business while the Opposition insisted key concerns on jobs and household budgets remained unanswered.</p>
<h2>On the Statute Book</h2>
<ul>
  <li><strong>Digital data rules:</strong> Fresh regulations operationalising data protection and cross-border flows.</li>
  <li><strong>Skilling and apprenticeships:</strong> A package to widen formal training and gig-worker protections.</li>
  <li><strong>Infrastructure spending:</strong> Supplementary allocations for highways, railways and urban transit.</li>
</ul>
<h2>The Opposition's Case</h2>
<p>Floor leaders said they had used every available instrument to force debates on employment, rural distress and inflation. The government countered that its reform agenda — including this month's tax rationalisation — was already easing pressure on households.</p>
<p>The Chair thanked members for a largely orderly session and noted a long list of committee referrals would carry the work forward before the Winter Session.</p>`,
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop&q=80",
    author: "Priya Nair",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 5 — RBI holds repo rate (Sep 10)
  {
    id: "rbi-holds-repo-rate-growth-outlook",
    title: "RBI Holds Repo Rate, Lifts Growth Outlook as Inflation Stays Benign",
    excerpt: "The Monetary Policy Committee kept the policy rate unchanged for a fourth straight meeting and nudged up its GDP forecast, citing resilient demand, easing food prices and a stable rupee.",
    content: `<p>Mumbai, September 10, 2026 — The Reserve Bank of India held its benchmark repo rate steady for a fourth consecutive review and raised its growth projection for the year, striking an optimistic tone on an economy it described as running "close to trend with inflation firmly anchored."</p>
<h2>The Decision</h2>
<p>The Monetary Policy Committee voted to keep the policy stance neutral, signalling comfort with the current level of rates. The Governor said the bar for further easing would be a durable undershoot of the inflation target, while any renewed price pressure would be watched closely.</p>
<h2>Reading the Forecasts</h2>
<ul>
  <li><strong>Growth:</strong> The GDP estimate was revised modestly higher on strong investment and services.</li>
  <li><strong>Inflation:</strong> Headline prices are seen staying inside the tolerance band, aided by a good monsoon.</li>
  <li><strong>Rupee:</strong> Reserves near record highs give the central bank room to smooth volatility.</li>
</ul>
<h2>Market Reaction</h2>
<p>Bond yields eased slightly and equities held gains after the announcement, with economists reading the commentary as a signal that rates will stay on hold well into next year barring a shock.</p>`,
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80",
    author: "Amit Verma",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 6 — India-EU FTA (Sep 9)
  {
    id: "india-eu-fta-ratified-exports",
    title: "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
    excerpt: "A landmark trade pact between India and the European Union has cleared its final ratification hurdle, promising lower tariffs across textiles, autos, pharma and services once it enters into force.",
    content: `<p>New Delhi, September 9, 2026 — The comprehensive free trade agreement between India and the European Union has completed ratification on both sides, clearing the way for one of the most consequential trade deals of the decade to take effect in phases.</p>
<h2>What the Deal Covers</h2>
<ul>
  <li><strong>Goods:</strong> Phased elimination of duties on a large share of tariff lines, from textiles to engineering goods.</li>
  <li><strong>Services and mobility:</strong> Easier movement for skilled professionals and mutual recognition provisions.</li>
  <li><strong>Standards:</strong> A framework to align on sustainability, digital trade and food safety norms.</li>
</ul>
<h2>Winners at Home</h2>
<p>Exporters in labour-intensive sectors — apparel, leather, gems and jewellery — are expected to gain the most, while consumers could see cheaper European automobiles and wines over time. Industry groups urged firms to prepare for tighter quality and traceability requirements.</p>
<h2>The Bigger Picture</h2>
<p>Officials framed the agreement as an anchor for supply-chain diversification, positioning India as a trusted manufacturing partner as global firms rebalance away from concentrated sourcing.</p>`,
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop&q=80",
    author: "Sanjay Mehta",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 7 — Women's cricket (Sep 10)
  {
    id: "india-women-series-win-australia",
    title: "India Women Seal ODI Series Against Australia with Dominant Bengaluru Show",
    excerpt: "A century stand up top and a disciplined spell in the middle overs powered India Women to a series-clinching win over Australia, underlining their credentials ahead of a home World Cup season.",
    content: `<p>Bengaluru, September 10, 2026 — India Women wrapped up their ODI series against Australia with a commanding performance at the M. Chinnaswamy Stadium, blending top-order aggression with control in the field to beat one of the game's benchmark sides.</p>
<h2>Building the Total</h2>
<p>A fluent opening partnership laid the foundation before the middle order accelerated, posting a total that always looked beyond the visitors on a slowing surface. Two batters crossed fifty, with one converting into a composed hundred.</p>
<h2>Squeezing in the Field</h2>
<ul>
  <li><strong>Spin control:</strong> Tight lines through overs 20–40 choked the run rate.</li>
  <li><strong>Sharp catching:</strong> Two outstanding boundary grabs turned the innings.</li>
  <li><strong>Death bowling:</strong> Yorkers at the end sealed a comfortable margin.</li>
</ul>
<h2>Eyes on the Prize</h2>
<p>The result reinforces India's rise as genuine contenders in a home season packed with marquee fixtures. The captain praised the group's "clarity and calm" and said the bench strength on show was a healthy selection headache.</p>`,
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80",
    author: "Rajesh Sharma",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 8 — Health: dengue / monsoon health (Sep 9)
  {
    id: "dengue-surveillance-monsoon-2026",
    title: "Health Ministry Steps Up Dengue Surveillance as Post-Monsoon Cases Rise",
    excerpt: "With the retreating monsoon fuelling a seasonal spike, authorities have expanded fever clinics, ramped up mosquito-control drives and issued fresh advisories on early testing and hydration.",
    content: `<p>New Delhi, September 9, 2026 — The Union Health Ministry has intensified surveillance and vector-control measures across several states as post-monsoon dengue cases climb, urging citizens to eliminate stagnant water and seek early testing at the first sign of high fever.</p>
<h2>What Is Being Done</h2>
<ul>
  <li><strong>Fever clinics:</strong> Additional screening points opened in high-burden urban wards.</li>
  <li><strong>Source reduction:</strong> Intensified fogging and larvae-control drives in hotspots.</li>
  <li><strong>Testing capacity:</strong> More labs equipped for rapid antigen and confirmatory tests.</li>
</ul>
<h2>Advice for Households</h2>
<p>Doctors stressed that most dengue cases are mild and manageable with rest and fluids, but warned against self-medicating with certain painkillers. Warning signs such as persistent vomiting, abdominal pain or bleeding warrant immediate hospital care.</p>
<h2>The Outlook</h2>
<p>Officials expect cases to peak over the coming weeks before tapering as temperatures fall, and appealed for continued community participation in weekly "dry day" clean-up efforts.</p>`,
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Meera Iyer",
    publishedAt: "Sep 9, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 9 — Bollywood box office (Sep 10)
  {
    id: "festive-box-office-2026-lineup",
    title: "Bollywood Bets Big on Festive Season with a Blockbuster-Heavy Release Calendar",
    excerpt: "Studios have lined up a stacked slate of tentpole films for the festive window, betting that a return of the family audience and premium formats will drive one of the strongest box-office runs in years.",
    content: `<p>Mumbai, September 10, 2026 — Bollywood is heading into its most important stretch of the year with a densely packed festive release calendar, as producers wager that big-screen spectacle and star power will pull audiences back to theatres in force.</p>
<h2>The Slate</h2>
<p>The lineup spans a period epic, a high-concept action thriller, a heartfelt family drama and an animated feature aimed at younger viewers — a spread designed to cover every demographic across the long holiday weekends.</p>
<h2>What's Driving Optimism</h2>
<ul>
  <li><strong>Premium formats:</strong> Large-format and premium screens are commanding higher ticket yields.</li>
  <li><strong>Music revival:</strong> Chart-topping soundtracks are fuelling pre-release buzz.</li>
  <li><strong>Regional crossover:</strong> Dubbed and multilingual releases are widening the addressable audience.</li>
</ul>
<h2>The Caveat</h2>
<p>Trade analysts cautioned that quality — not quantity — will decide the season, noting that word of mouth now travels faster than ever and unforgiving audiences reward only the films that deliver.</p>`,
    category: "bollywood",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    author: "Karan Malhotra",
    publishedAt: "Sep 10, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 10 — Technology: India AI mission (Sep 9)
  {
    id: "india-ai-mission-compute-expansion",
    title: "India Expands National AI Compute Grid, Opens Access for Startups and Researchers",
    excerpt: "A major expansion of subsidised GPU capacity under the national AI programme is opening affordable compute to startups, universities and public-interest projects, aiming to close the gap with global labs.",
    content: `<p>New Delhi, September 9, 2026 — The government announced a sizeable expansion of its national AI compute grid, adding thousands of high-end accelerators and widening subsidised access for startups, academic labs and social-sector projects under a common cloud framework.</p>
<h2>Lowering the Barrier</h2>
<p>The programme offers pooled GPU capacity at concessional rates, along with curated Indian-language datasets and evaluation tooling. Officials said the goal is to let small teams train and fine-tune competitive models without prohibitive infrastructure costs.</p>
<h2>Where It Will Be Used</h2>
<ul>
  <li><strong>Indian-language models:</strong> Speech and text systems spanning two dozen languages.</li>
  <li><strong>Public services:</strong> Tools for healthcare triage, agriculture advisories and education.</li>
  <li><strong>Deep-tech startups:</strong> Priority allocations for early-stage founders.</li>
</ul>
<h2>Guardrails</h2>
<p>The framework pairs access with responsible-use commitments, including safety evaluation, transparency reporting and content-provenance requirements for generative systems.</p>`,
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Neha Kulkarni",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 11 — Politics: state polls (Sep 8)
  {
    id: "assembly-elections-schedule-2026",
    title: "Poll Panel Announces Assembly Election Schedule as Parties Shift Into Campaign Mode",
    excerpt: "The Election Commission unveiled the multi-phase schedule for upcoming state assembly polls, triggering the model code of conduct and setting off a frenetic round of alliance-building and manifesto drafting.",
    content: `<p>New Delhi, September 8, 2026 — The Election Commission announced the schedule for a fresh round of state assembly elections, immediately bringing the model code of conduct into force and firing the starting gun on an intense campaign season.</p>
<h2>The Contest Ahead</h2>
<p>Polling will be held in multiple phases, with counting on a single day. The Commission promised expanded accessibility measures, tighter monitoring of expenditure and a renewed push against misinformation during the campaign.</p>
<h2>The Battle Lines</h2>
<ul>
  <li><strong>Jobs and welfare:</strong> Employment and direct-benefit schemes dominate early messaging.</li>
  <li><strong>Local issues:</strong> Water, power and farm incomes are shaping constituency-level narratives.</li>
  <li><strong>Alliances:</strong> Seat-sharing talks are testing the cohesion of rival coalitions.</li>
</ul>
<h2>What to Watch</h2>
<p>Analysts said turnout among first-time voters and women could prove decisive, while the outcome will be read closely as a barometer ahead of the next general election cycle.</p>`,
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80",
    author: "Priya Nair",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read"
  },
  // 12 — Education: NEP / exam reform (Sep 8)
  {
    id: "board-exam-twice-a-year-reform",
    title: "Twice-a-Year Board Exams Roll Out Nationwide as Reform Push Gathers Pace",
    excerpt: "Students will now sit board examinations in two sittings a year and keep their best score, part of a broader shift toward reducing exam pressure and moving to competency-based assessment.",
    content: `<p>New Delhi, September 8, 2026 — A flagship school-education reform took effect this academic year, allowing students to appear for board examinations twice annually and retain their better result, in a move officials say will lower the stakes attached to a single high-pressure exam.</p>
<h2>How It Works</h2>
<ul>
  <li><strong>Two attempts:</strong> Students can sit exams in two windows and keep the higher score.</li>
  <li><strong>Competency focus:</strong> Question papers lean toward application and reasoning over rote recall.</li>
  <li><strong>Flexible subjects:</strong> Wider choice combinations blur the old streams divide.</li>
</ul>
<h2>The Reaction</h2>
<p>Educators broadly welcomed the flexibility but flagged the need for teacher training, question-bank quality and logistical readiness in smaller districts. Parent groups urged clear communication so families understand the new scoring rules.</p>
<h2>What Comes Next</h2>
<p>The board said it will publish sample papers and a detailed assessment framework, and will review the first cycle's data before extending the model further.</p>`,
    category: "education",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    author: "Anjali Desai",
    publishedAt: "Sep 8, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 13 — Health: heart health study (Sep 8)
  {
    id: "indian-heart-health-study-2026",
    title: "Large Indian Study Links Everyday Habits to Sharp Drop in Heart Risk",
    excerpt: "A multi-city study tracking tens of thousands of adults finds that modest, sustained changes to diet, sleep and daily movement can cut cardiovascular risk substantially — even without medication.",
    content: `<p>New Delhi, September 8, 2026 — One of the largest Indian cohort studies on cardiovascular health has reported that simple, sustained lifestyle changes are associated with a marked reduction in heart-disease risk, offering an accessible playbook for a country facing a rising burden of early heart attacks.</p>
<h2>The Findings</h2>
<ul>
  <li><strong>Daily movement:</strong> Even short, regular walks were tied to meaningfully lower risk.</li>
  <li><strong>Sleep:</strong> Consistent seven-to-eight-hour sleep correlated with better metabolic markers.</li>
  <li><strong>Diet:</strong> Cutting ultra-processed foods and added sugar improved key indicators within months.</li>
</ul>
<h2>Why It Resonates</h2>
<p>Cardiologists said the results are especially relevant for younger adults, among whom heart events are rising. The message, they stressed, is empowering: much of the risk is modifiable through everyday choices.</p>
<h2>A Word of Caution</h2>
<p>Researchers emphasised that lifestyle change complements — but does not replace — screening and prescribed treatment for those with existing conditions or strong family history.</p>`,
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80",
    author: "Dr. Meera Iyer",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read"
  },
  // 14 — Cricket: Test squad / Australia tour (Sep 8)
  {
    id: "india-squad-australia-tour-2026",
    title: "Selectors Name a Youthful Squad for India's Tour of Australia",
    excerpt: "A blend of experience and fresh faces headlines the squad for the marquee tour Down Under, with selectors rewarding a strong domestic season and backing pace-bowling depth for testing conditions.",
    content: `<p>Mumbai, September 8, 2026 — Selectors unveiled a youthful, well-balanced squad for India's upcoming tour of Australia, signalling faith in a new generation of players while retaining a core of senior campaigners for one of the toughest assignments in the sport.</p>
<h2>The Big Calls</h2>
<ul>
  <li><strong>Pace depth:</strong> Multiple quicks capable of exploiting bounce and carry were included.</li>
  <li><strong>Batting reshuffle:</strong> A domestic run-scorer earns a maiden call-up.</li>
  <li><strong>All-round balance:</strong> Flexible options give the captain room to adapt to conditions.</li>
</ul>
<h2>The Reasoning</h2>
<p>The chief selector said the group reflected both current form and long-term planning, adding that the tour would be a proving ground for players expected to anchor the side over the next cycle.</p>
<h2>Fixtures</h2>
<p>The tour opens with a white-ball leg before the red-ball series, giving the squad time to acclimatise. The captain welcomed the challenge, calling Australia "the ultimate test of a team's character."</p>`,
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=1200&auto=format&fit=crop&q=80",
    author: "Rajesh Sharma",
    publishedAt: "Sep 8, 2026",
    readTime: "3 min read"
  },
  // 15 — Technology: EV / battery (Sep 9)
  {
    id: "india-ev-battery-gigafactory-2026",
    title: "India's First Large-Scale Cell Gigafactory Begins Commercial Output",
    excerpt: "A domestically built battery gigafactory has started commercial production, a milestone in the push to localise the EV supply chain, cut import dependence and bring down the cost of electric mobility.",
    content: `<p>Bengaluru, September 9, 2026 — India took a significant step toward energy self-reliance as its first large-scale lithium-cell gigafactory began commercial output, promising to anchor a domestic supply chain for electric vehicles and grid storage.</p>
<h2>Why It Matters</h2>
<p>Cells are the single most expensive component of an electric vehicle, and localising their manufacture is central to lowering prices and reducing exposure to imports. The facility will scale output in phases as it qualifies customers across automotive and stationary storage.</p>
<h2>The Ripple Effects</h2>
<ul>
  <li><strong>Cheaper EVs:</strong> Local cells could narrow the price gap with petrol models.</li>
  <li><strong>Jobs:</strong> A cluster of component suppliers is expected to grow around the plant.</li>
  <li><strong>Grid storage:</strong> Domestic cells will support renewable-energy firming.</li>
</ul>
<h2>The Road Ahead</h2>
<p>Executives said the next challenge is securing raw materials and recycling capacity, and called for continued policy stability to attract the long-horizon investment the sector demands.</p>`,
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&auto=format&fit=crop&q=80",
    author: "Sanjay Mehta",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read"
  },
  // 16 — Bollywood: OTT / streaming (Sep 8)
  {
    id: "ott-regional-content-surge-2026",
    title: "Streaming Platforms Double Down on Regional Originals as Audiences Fragment",
    excerpt: "Streamers are pouring investment into regional-language originals, betting that authentic local storytelling — not big-budget spectacle alone — is what keeps subscribers hooked in a crowded market.",
    content: `<p>Mumbai, September 8, 2026 — India's streaming platforms are sharply increasing their commissioning of regional-language originals, a strategic pivot that reflects how a maturing market rewards distinctive local voices over one-size-fits-all blockbusters.</p>
<h2>The Shift</h2>
<p>Executives said data consistently shows strong engagement and lower churn for well-crafted regional series, prompting a rebalancing of budgets toward stories rooted in specific cultures and dialects.</p>
<h2>What's Fuelling It</h2>
<ul>
  <li><strong>Cheaper data:</strong> Deep smartphone penetration has expanded the small-town audience.</li>
  <li><strong>Talent pipelines:</strong> Regional film industries are supplying fresh writers and directors.</li>
  <li><strong>Discovery:</strong> Better recommendation systems surface niche hits to wide audiences.</li>
</ul>
<h2>The Takeaway</h2>
<p>For creators, the trend opens doors long guarded by mainstream gatekeepers. For platforms, it is increasingly the difference between a subscriber who stays and one who cancels.</p>`,
    category: "bollywood",
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&auto=format&fit=crop&q=80",
    author: "Karan Malhotra",
    publishedAt: "Sep 8, 2026",
    readTime: "3 min read"
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
  "RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign",
  "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
  "India Expands National AI Compute Grid, Opens Access for Startups"
];
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    ...categories.map((cat) => ({ name: cat.name, path: `/category/${cat.slug}` }))
  ];
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (!isScrolled && y > 60) setIsScrolled(true);
      else if (isScrolled && y < 12) setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-secondary text-white overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0 pr-4 py-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full breaking-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary whitespace-nowrap", children: "Breaking" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "ticker-track overflow-hidden flex-1 border-l border-white/10 pl-4", children: /* @__PURE__ */ jsx("div", { className: "ticker-scroll flex items-center gap-10 py-2.5 whitespace-nowrap", children: [...breakingHeadlines, ...breakingHeadlines].map((headline, i) => /* @__PURE__ */ jsxs("span", { className: "text-[12.5px] font-medium flex items-center gap-2.5 text-white/80", children: [
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-3 h-3 text-primary" }),
            headline
          ] }, i)) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `bg-white/90 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "shadow-[0_8px_30px_-14px_rgba(10,14,20,0.25)] border-b border-neutral-200" : "border-b border-neutral-200"}`, children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between gap-6 transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`, children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/2.png",
          alt: "The Fista",
          className: `w-auto transition-all duration-300 ${isScrolled ? "h-8" : "h-9 md:h-11"}`
        }
      ) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1 mx-auto", children: navItems.map((item) => {
        const active = location.pathname === item.path;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: item.path,
            className: `relative px-3.5 py-2 text-[13.5px] font-semibold rounded-full transition-all duration-200 ${active ? "text-primary" : "text-neutral-600 hover:text-secondary hover:bg-neutral-100"}`,
            children: [
              item.name,
              active && /* @__PURE__ */ jsx("span", { className: "absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-primary rounded-full" })
            ]
          },
          item.path
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx("button", { "aria-label": "Search", className: "p-2.5 hover:bg-neutral-100 rounded-full transition-colors", children: /* @__PURE__ */ jsx(Search, { className: "w-4.5 h-4.5 text-neutral-600" }) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#newsletter",
            className: "hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-[0_8px_20px_-8px_rgba(240,38,60,0.6)]",
            children: [
              "Subscribe ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Menu",
            className: "lg:hidden p-2.5 hover:bg-neutral-100 rounded-full transition-colors",
            onClick: () => setIsMenuOpen(!isMenuOpen),
            children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-neutral-700" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5 text-neutral-700" })
          }
        )
      ] })
    ] }) }) }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-white border-t border-neutral-200 shadow-xl", children: /* @__PURE__ */ jsxs("nav", { className: "container-page py-4 flex flex-col", children: [
      navItems.map((item) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.path,
          onClick: () => setIsMenuOpen(false),
          className: `py-3.5 text-[15px] font-bold border-b border-neutral-100 last:border-0 flex items-center justify-between transition-colors ${location.pathname === item.path ? "text-primary" : "text-neutral-700 hover:text-primary"}`,
          children: [
            item.name,
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-neutral-300" })
          ]
        },
        item.path
      )),
      /* @__PURE__ */ jsxs("a", { href: "#newsletter", onClick: () => setIsMenuOpen(false), className: "btn-primary mt-4 w-full", children: [
        "Subscribe ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-secondary text-white", children: [
    /* @__PURE__ */ jsx("div", { id: "newsletter", className: "container-page pt-16 pb-14 lg:pt-20 lg:pb-16 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-linear-to-br from-primary to-primary-dark px-6 py-12 sm:px-12 lg:px-16 lg:py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-white/5" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-white/80 text-[11px] font-extrabold uppercase tracking-[0.18em]", children: [
            /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }),
            " The Fista Briefing"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] mt-3", children: "India's biggest stories, in your inbox by 8 AM." }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 text-[15px] mt-3", children: "Join thousands of readers. Sharp, credible, and free — every morning." })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "w-full lg:w-auto shrink-0", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 lg:w-96", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                required: true,
                placeholder: "Enter your email",
                "aria-label": "Email address",
                className: "flex-1 px-5 py-3.5 rounded-full bg-white text-secondary placeholder-neutral-400 text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              }
            ),
            /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white text-sm font-bold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap", children: [
              "Subscribe ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-[11px] mt-3 sm:pl-2", children: "No spam. Unsubscribe anytime." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page pb-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-12 gap-10 pt-6 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center mb-5", children: /* @__PURE__ */ jsx("img", { src: "/2.png", alt: "The Fista", className: "h-11 w-auto -ml-6" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm leading-relaxed mb-6 max-w-xs", children: "India's trusted news platform — credible, in-depth coverage across cricket, politics, business, health, Bollywood, education and technology." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "YouTube" }
          ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200",
              "aria-label": label,
              children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40 mb-5", children: "Sections" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: categories.map((cat) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/category/${cat.slug}`, className: "text-white/60 hover:text-white text-sm transition-colors", children: cat.name }) }, cat.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40 mb-5", children: "Company" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: ["About Us", "Contact", "Careers", "Advertise"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white text-sm transition-colors", children: item }) }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40 mb-5", children: "Legal" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white text-sm transition-colors", children: item }) }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40 mb-5", children: "Reach Us" }),
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [featuredArticle, ...recentArticles.filter((a) => a.id !== featuredArticle.id).slice(0, 2)];
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);
  useEffect(() => {
    const interval = setInterval(nextSlide, 6e3);
    return () => clearInterval(interval);
  }, [nextSlide]);
  const current = slides[currentSlide];
  const railArticles = recentArticles.filter((a) => a.id !== current.id).slice(0, 5);
  return /* @__PURE__ */ jsx("section", { className: "container-page pt-8 pb-12 lg:pt-10 lg:pb-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-6 lg:gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
      /* @__PURE__ */ jsx(Link, { to: `/article/${current.id}`, className: "block group rise-in", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-16/10 lg:aspect-video overflow-hidden rounded-3xl bg-neutral-100", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: current.imageUrl,
            alt: current.title,
            className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-900 ease-out",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/25 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "chip", children: current.category }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-white/70 text-xs font-medium", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: current.publishedAt })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-white text-2xl sm:text-4xl lg:text-[3.25rem] leading-[1.02] max-w-3xl", children: current.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/80 text-[15px] leading-relaxed max-w-2xl mt-4 line-clamp-2 hidden sm:block", children: current.excerpt }),
          /* @__PURE__ */ jsxs("span", { className: "mt-6 inline-flex items-center gap-2 bg-primary text-white text-[13px] font-bold px-5 py-3 rounded-full group-hover:bg-white group-hover:text-secondary transition-all duration-200", children: [
            "Read the story ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) }, current.id),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mt-5", children: slides.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": `Slide ${i + 1}`,
          onClick: () => setCurrentSlide(i),
          className: `h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary w-10" : "bg-neutral-300 hover:bg-neutral-400 w-5"}`
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "section-eyebrow", children: "Top Stories" }),
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary breaking-pulse" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden flex-1", children: railArticles.map((article, idx) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/article/${article.id}`,
          className: "flex gap-4 p-4 lg:p-[1.1rem] group hover:bg-white transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-neutral-300 group-hover:text-primary transition-colors leading-none pt-0.5", children: String(idx + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("span", { className: "category-badge", children: article.category }),
              /* @__PURE__ */ jsx("h3", { className: "text-[14.5px] font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1", children: article.title }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] text-neutral-400 mt-1.5 block", children: article.publishedAt })
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors shrink-0" })
          ]
        },
        article.id
      )) }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/category/cricket",
          className: "mt-3 flex items-center justify-center gap-2 py-3 rounded-full border border-neutral-200 text-[12px] font-bold uppercase tracking-[0.12em] text-secondary hover:bg-secondary hover:text-white transition-colors",
          children: [
            "View all stories ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] }) })
  ] }) });
}
function useItemsPerSlide() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerSlide(3);
      else if (window.innerWidth >= 768) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return itemsPerSlide;
}
function TrendingNewsSection({ articles: articles2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayArticles = articles2.slice(0, 9);
  const itemsPerSlide = useItemsPerSlide();
  const totalSlides = Math.max(1, Math.ceil(displayArticles.length / itemsPerSlide));
  const intervalRef = useRef(null);
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
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
  const activeIndex = Math.min(currentIndex, totalSlides - 1);
  return /* @__PURE__ */ jsxs("section", { className: "py-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-7", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "section-eyebrow", children: [
          /* @__PURE__ */ jsx(Flame, { className: "w-4 h-4" }),
          " Trending Now"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "section-heading mt-2", children: "What's Hot" }),
        /* @__PURE__ */ jsx("div", { className: "section-rule" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex gap-1.5", children: Array.from({ length: totalSlides }).map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": `Slide ${i + 1}`,
            onClick: () => goToSlide(i),
            className: `h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-primary w-8" : "bg-neutral-300 hover:bg-neutral-400 w-3"}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("button", { onClick: prevSlide, "aria-label": "Previous", className: "w-10 h-10 rounded-full border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-200", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("button", { onClick: nextSlide, "aria-label": "Next", className: "w-10 h-10 rounded-full border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-200", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-700 ease-out",
        style: { transform: `translateX(-${activeIndex * 100}%)` },
        children: Array.from({ length: totalSlides }).map((_, slideIndex) => /* @__PURE__ */ jsx("div", { className: "w-full shrink-0", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: displayArticles.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((article) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/article/${article.id}`,
            className: "card group flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-16/10 overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: article.imageUrl,
                    alt: article.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx("span", { className: "chip", children: article.category }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: article.title }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm line-clamp-2 mt-2 mb-4", children: article.excerpt }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-neutral-100 mt-auto", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-neutral-400 text-xs font-medium", children: [
                    article.publishedAt,
                    " · ",
                    article.readTime
                  ] }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors" })
                ] })
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
        "aria-label": `Slide ${i + 1}`,
        onClick: () => goToSlide(i),
        className: `h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-primary w-8" : "bg-neutral-300 w-3"}`
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
  const lead = filteredArticles[0];
  const side = filteredArticles.slice(1, 4);
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-14 lg:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "section-eyebrow", children: "Editor's Picks" }),
        /* @__PURE__ */ jsx("h2", { className: "section-heading mt-2", children: "The Stories That Matter" }),
        /* @__PURE__ */ jsx("div", { className: "section-rule" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide", children: categoryTabs.slice(0, 6).map((cat) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveCategory(cat.id),
          className: `px-4 py-2 text-[12.5px] font-bold rounded-full whitespace-nowrap transition-all duration-200 ${activeCategory === cat.id ? "bg-secondary text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`,
          children: cat.name
        },
        cat.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-6", children: [
      lead && /* @__PURE__ */ jsxs(Link, { to: `/article/${lead.id}`, className: "lg:col-span-6 group flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: lead.imageUrl,
              alt: lead.title,
              loading: "lazy",
              className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "chip", children: lead.category }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl lg:text-3xl text-secondary leading-tight group-hover:text-primary transition-colors", children: lead.title }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-[15px] line-clamp-2 mt-3 leading-relaxed", children: lead.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-neutral-400 text-xs mt-4 font-medium", children: [
            /* @__PURE__ */ jsx("span", { children: lead.author }),
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-300" }),
            /* @__PURE__ */ jsx("span", { children: lead.publishedAt }),
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-300" }),
            /* @__PURE__ */ jsx("span", { children: lead.readTime })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col gap-4", children: [
        side.map((article) => /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "flex gap-5 group rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-[0_18px_40px_-28px_rgba(10,14,20,0.35)] p-3 transition-all bg-white", children: [
          /* @__PURE__ */ jsx("div", { className: "w-32 sm:w-40 aspect-4/3 shrink-0 overflow-hidden rounded-xl bg-neutral-100", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: article.imageUrl,
              alt: article.title,
              loading: "lazy",
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 flex flex-col justify-center py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "category-badge", children: article.category }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-base sm:text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug mt-1", children: article.title }),
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-neutral-400 mt-2 font-medium", children: [
              article.publishedAt,
              " · ",
              article.readTime
            ] })
          ] }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-neutral-300 group-hover:text-primary transition-colors shrink-0 self-center" })
        ] }, article.id)),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ jsxs(Link, { to: "/category/politics", className: "inline-flex items-center gap-2 text-[13px] font-bold text-secondary hover:text-primary transition-colors", children: [
          "More stories ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] })
  ] });
}
function LiveScoreWidget({ matches }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxs("span", { className: "live-badge", children: [
        /* @__PURE__ */ jsx(Radio, { className: "w-3 h-3 breaking-pulse" }),
        "Live"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-500", children: "Scoreboard" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "divide-y divide-neutral-100", children: matches.map((match) => /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 hover:bg-neutral-50 transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-wider mb-3 font-semibold", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: match.sport }),
        /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "·" }),
        /* @__PURE__ */ jsx("span", { className: "truncate", children: match.tournament }),
        match.status === "live" && /* @__PURE__ */ jsxs("span", { className: "ml-auto flex items-center gap-1 shrink-0", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full breaking-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary font-extrabold", children: "LIVE" })
        ] }),
        match.status === "upcoming" && /* @__PURE__ */ jsx("span", { className: "ml-auto text-neutral-300 font-extrabold shrink-0", children: "UPCOMING" }),
        match.status === "completed" && /* @__PURE__ */ jsx("span", { className: "ml-auto text-neutral-400 font-extrabold shrink-0", children: "RESULT" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: [match.team1, match.team2].map((team, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base", children: team.flag }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-sm text-secondary", children: team.shortName })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-400", children: team.overs }),
          /* @__PURE__ */ jsx("span", { className: "font-extrabold text-secondary text-sm min-w-12.5 text-right", children: team.score })
        ] })
      ] }, i)) })
    ] }, match.id)) }),
    /* @__PURE__ */ jsxs("button", { className: "w-full px-5 py-3.5 bg-neutral-50 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-500", children: [
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
  const recentArticles = articles.slice(0, 6);
  const trendingArticles = getTrendingArticles();
  return /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildHomeSeo() }),
    /* @__PURE__ */ jsx(HeroSection, { featuredArticle, recentArticles }),
    /* @__PURE__ */ jsx("div", { className: "border-y border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 shrink-0", children: "Explore" }),
      categories.map((cat) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/category/${cat.slug}`,
          className: "group flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full border border-neutral-200 bg-white text-[13px] font-bold text-secondary hover:border-secondary hover:bg-secondary hover:text-white transition-all",
          children: [
            cat.name,
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors" })
          ]
        },
        cat.id
      ))
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page py-14 lg:py-16", "aria-label": "Trending stories", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsx(TrendingNewsSection, { articles: trendingArticles }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx("div", { className: "sticky top-28", children: /* @__PURE__ */ jsx(LiveScoreWidget, { matches: liveMatches }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-neutral-50 border-t border-neutral-200", children: /* @__PURE__ */ jsx(FeaturedNewsSection, { articles }) })
  ] });
}
function NotFoundPage() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-6 py-28 text-center", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildNotFoundSeo(pathname) }),
    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 section-eyebrow", children: [
      /* @__PURE__ */ jsx(Compass, { className: "w-4 h-4" }),
      " Lost the trail"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "font-display text-[8rem] leading-none text-secondary mt-4", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl text-secondary mt-2 mb-3", children: "This page went off the record" }),
    /* @__PURE__ */ jsx("p", { className: "text-neutral-500 mb-8", children: "The page you're looking for doesn't exist or may have been moved." }),
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-primary inline-flex", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
      "Back to Home"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-2", children: categories.map((cat) => /* @__PURE__ */ jsx(
      Link,
      {
        to: `/category/${cat.slug}`,
        className: "px-4 py-2 rounded-full border border-neutral-200 bg-white text-[13px] font-bold text-secondary hover:border-secondary hover:bg-secondary hover:text-white transition-all",
        children: cat.name
      },
      cat.id
    )) })
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
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildCategorySeo(category, categoryArticles) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex items-center gap-2 text-[12px]", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-400 hover:text-primary transition-colors font-medium", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary capitalize", children: category.name })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-secondary overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: `radial-gradient(circle at 15% 20%, ${category.color}55, transparent 45%), radial-gradient(circle at 85% 80%, ${category.color}33, transparent 40%)`
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page py-14 lg:py-20 relative z-10", children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-4",
            style: { color: category.color },
            children: [
              /* @__PURE__ */ jsx("span", { className: "w-6 h-0.5 rounded-full", style: { backgroundColor: category.color } }),
              "Section"
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl lg:text-6xl text-white leading-[1.02] mb-4", children: category.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/60 text-sm lg:text-base max-w-xl", children: [
          "Stay updated with the latest ",
          category.name.toLowerCase(),
          " news from India and around the world."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-6 text-white/40 text-xs font-medium", children: [
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
    ] }),
    featuredArticle && /* @__PURE__ */ jsx("div", { className: "container-page -mt-8 relative z-10 mb-12", children: /* @__PURE__ */ jsx(Link, { to: `/article/${featuredArticle.id}`, className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(10,14,20,0.4)] transition-all duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 relative h-64 lg:h-[26rem] overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: featuredArticle.imageUrl,
            alt: featuredArticle.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "chip", children: "Featured" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx("span", { className: "category-badge", children: featuredArticle.category }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl lg:text-3xl text-secondary group-hover:text-primary transition-colors leading-tight mt-2 mb-4", children: featuredArticle.title }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3", children: featuredArticle.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-neutral-400 font-medium", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: featuredArticle.author })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-300" }),
          /* @__PURE__ */ jsx("span", { children: featuredArticle.publishedAt }),
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-300" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: featuredArticle.readTime })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "btn-primary mt-6 self-start", children: [
          "Read Full Story ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container-page pb-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: restArticles.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "section-eyebrow", children: "Latest" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl text-secondary mt-1", children: [
            "More ",
            category.name,
            " Stories"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "section-rule" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: restArticles.map((article) => /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "card group flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-16/10 overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: article.imageUrl,
                alt: article.title,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx("span", { className: "chip", children: article.category }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: article.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 line-clamp-2 mt-2 mb-4", children: article.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-neutral-100 mt-auto", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-neutral-400 font-medium", children: [
                article.publishedAt,
                " · ",
                article.readTime
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("button", { "aria-label": "Share on Facebook", onClick: (e) => handleShare(e, "facebook", article), className: "p-1.5 rounded-full bg-neutral-50 hover:bg-blue-50 hover:text-blue-600 text-neutral-400 transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-3 h-3" }) }),
                /* @__PURE__ */ jsx("button", { "aria-label": "Share on Twitter", onClick: (e) => handleShare(e, "twitter", article), className: "p-1.5 rounded-full bg-neutral-50 hover:bg-sky-50 hover:text-sky-500 text-neutral-400 transition-colors", children: /* @__PURE__ */ jsx(Twitter, { className: "w-3 h-3" }) }),
                /* @__PURE__ */ jsx("button", { "aria-label": "Share on WhatsApp", onClick: (e) => handleShare(e, "whatsapp", article), className: "p-1.5 rounded-full bg-neutral-50 hover:bg-green-50 hover:text-green-600 text-neutral-400 transition-colors", children: /* @__PURE__ */ jsx(Share2, { className: "w-3 h-3" }) })
              ] })
            ] })
          ] })
        ] }, article.id)) })
      ] }) : /* @__PURE__ */ jsx("div", { className: "text-center py-20 rounded-2xl bg-neutral-50 border border-neutral-200", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-lg font-display", children: "No more articles in this section." }) }) }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-28 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-200 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary", children: "Browse Sections" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 grid grid-cols-2 gap-2", children: categories.filter((c) => c.slug !== categorySlug).map((cat) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/category/${cat.slug}`,
              className: "px-3 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-200 hover:border-secondary hover:bg-secondary hover:text-white text-center transition-all",
              children: cat.name
            },
            cat.slug
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-200 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ jsx("h3", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary", children: "From Other Sections" }) }),
          /* @__PURE__ */ jsx("div", { className: "divide-y divide-neutral-100", children: otherCategoryArticles.map((article) => /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "flex gap-3 p-4 group hover:bg-neutral-50 transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-14 shrink-0 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx("img", { src: article.imageUrl, alt: article.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("span", { className: "category-badge block mb-1", children: article.category }),
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: article.title })
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-neutral-300 group-hover:text-primary transition-colors shrink-0" })
          ] }, article.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-secondary p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-white mb-2", children: "Stay Updated" }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm mb-4", children: [
            "Get the latest ",
            category.name.toLowerCase(),
            " stories in your inbox."
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              "aria-label": "Email address",
              placeholder: "Your email",
              className: "w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "w-full py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors", children: "Subscribe" })
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildArticleSeo(article, category) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex items-center gap-2 text-[12px]", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-400 hover:text-primary transition-colors font-medium", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx(Link, { to: `/category/${category?.slug || article.category}`, className: "text-neutral-400 hover:text-primary transition-colors font-medium capitalize", children: category?.name || article.category }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-600 font-semibold truncate max-w-xs", children: article.title })
    ] }) }),
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: article.imageUrl,
            alt: article.title,
            className: "w-full h-full object-cover",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/30 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxs("div", { className: "container-page pb-9 lg:pb-14", children: [
          /* @__PURE__ */ jsx("span", { className: "chip mb-4", children: category?.name || article.category }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-white text-[1.9rem] md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.04] max-w-4xl mt-4", children: article.title })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white/90 backdrop-blur-xl border-b border-neutral-200 sticky top-0 z-30", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-3 flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-secondary text-sm leading-tight", children: article.author }),
              /* @__PURE__ */ jsx("span", { className: "block text-[11px] text-neutral-400", children: "The Fista" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-4 text-xs text-neutral-400 font-medium", children: [
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
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-300 hidden sm:block", children: "Share" }),
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
              className: `w-9 h-9 bg-neutral-100 ${hoverBg} hover:text-white text-neutral-500 rounded-full flex items-center justify-center transition-all duration-200`,
              children: /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5" })
            },
            platform
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Copy link",
              onClick: copyToClipboard,
              className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${copySuccess ? "bg-green-500 text-white" : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"}`,
              children: copySuccess ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx(Link2, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container-page py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl lg:text-[1.6rem] text-secondary leading-snug mb-10 border-l-4 border-primary pl-6", children: article.excerpt }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "article-prose max-w-[68ch]",
              dangerouslySetInnerHTML: { __html: article.content }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400", children: "Tags" }),
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-primary-light text-primary", children: category?.name }),
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white border border-neutral-200 text-neutral-500 rounded-full", children: "India" }),
              /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white border border-neutral-200 text-neutral-500 rounded-full", children: "2026" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: [
              { platform: "facebook", label: "Facebook", bg: "bg-blue-600 hover:bg-blue-700" },
              { platform: "twitter", label: "Twitter", bg: "bg-sky-500 hover:bg-sky-600" },
              { platform: "whatsapp", label: "WhatsApp", bg: "bg-green-500 hover:bg-green-600" }
            ].map(({ platform, label, bg }) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleShare(platform),
                className: `px-4 py-2 rounded-full ${bg} text-white text-[11px] font-bold uppercase tracking-wider transition-colors`,
                children: label
              },
              platform
            )) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
            prevArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${prevArticle.id}`, className: "group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary/40 hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 flex items-center gap-1 mb-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3 h-3" }),
                " Previous"
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: prevArticle.title })
            ] }) : /* @__PURE__ */ jsx("div", {}),
            nextArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${nextArticle.id}`, className: "group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary/40 hover:shadow-sm transition-all text-right", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-extrabold uppercase tracking-[0.16em] text-neutral-400 flex items-center gap-1 justify-end mb-2", children: [
                "Next ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-sm text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: nextArticle.title })
            ] }) : /* @__PURE__ */ jsx("div", {})
          ] })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-200 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary", children: "Related Stories" }) }),
            /* @__PURE__ */ jsx("div", { className: "divide-y divide-neutral-100", children: relatedArticles.map((related) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/article/${related.id}`,
                className: "flex gap-4 p-4 group hover:bg-neutral-50 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-20 h-16 shrink-0 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx("img", { src: related.imageUrl, alt: related.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: related.title }),
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
                className: "flex items-center justify-center gap-2 py-3 border-t border-neutral-200 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary hover:bg-primary-light transition-colors",
                children: [
                  "More ",
                  category.name,
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-secondary p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-lg text-white mb-2", children: "Stay Updated" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm mb-4", children: "Get the latest stories delivered to your inbox." }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                "aria-label": "Email address",
                placeholder: "Your email",
                className: "w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-primary transition-colors"
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "w-full py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors", children: "Subscribe" })
          ] })
        ] }) })
      ] }) })
    ] }),
    relatedArticles.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-neutral-50 border-t border-neutral-200", "aria-label": `More in ${category?.name}`, children: /* @__PURE__ */ jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "section-eyebrow", children: [
            "More in ",
            category?.name
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "section-heading mt-2", children: "Keep Reading" }),
          /* @__PURE__ */ jsx("div", { className: "section-rule" })
        ] }),
        category && /* @__PURE__ */ jsxs(Link, { to: `/category/${category.slug}`, className: "text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5", children: [
          "View All ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: relatedArticles.map((related) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/article/${related.id}`,
          className: "card group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-16/10 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: related.imageUrl,
                  alt: related.title,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "chip", children: related.category }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors leading-snug", children: related.title }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm mt-2 line-clamp-2", children: related.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400 font-medium", children: [
                /* @__PURE__ */ jsx("span", { children: related.publishedAt }),
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-300" }),
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-white", children: [
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
