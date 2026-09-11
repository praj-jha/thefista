import type { Article, CategoryInfo, LiveMatch } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'cricket', name: 'Cricket', slug: 'cricket', color: '#0F766E' },
  { id: 'politics', name: 'Politics', slug: 'politics', color: '#1D4ED8' },
  { id: 'health', name: 'Health', slug: 'health', color: '#DB2777' },
  { id: 'bollywood', name: 'Bollywood', slug: 'bollywood', color: '#9333EA' },
  { id: 'business', name: 'Business', slug: 'business', color: '#B45309' },
  { id: 'education', name: 'Education', slug: 'education', color: '#0891B2' },
  { id: 'technology', name: 'Technology', slug: 'technology', color: '#EA580C' },
];

export const articles: Article[] = [
  // 1 — Asia Cup Final (Featured Hero — Sep 11, 2026)
  {
    id: 'india-asia-cup-2026-final-win',
    title: 'India Clinch Asia Cup 2026 Title with Nerveless Chase in Dubai Final',
    excerpt:
      'Chasing 182 under the Dubai lights, India held their nerve through a pulsating final over to beat their arch-rivals and lift a record-extending Asia Cup crown, capping a flawless unbeaten campaign.',
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
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Sep 11, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 2 — GST 2.0 (Featured — Sep 11)
  {
    id: 'gst-2-simplified-slabs-rollout',
    title: 'GST 2.0 Goes Live: Simplified Two-Slab Structure Cheers Households and Small Business',
    excerpt:
      'The next-generation Goods and Services Tax framework took effect this week, collapsing multiple rates into a cleaner structure the government says will cut prices on everyday essentials and ease compliance for MSMEs.',
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
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Sep 11, 2026',
    readTime: '4 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 3 — ISRO Gaganyaan (Sep 11)
  {
    id: 'isro-gaganyaan-crewed-window-confirmed',
    title: 'ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review',
    excerpt:
      'India\'s space agency cleared a major integrated systems review this week, locking in a target window for the first crewed Gaganyaan mission and outlining the final uncrewed test that precedes it.',
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
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Neha Kulkarni',
    publishedAt: 'Sep 11, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 4 — Monsoon Session concludes (Sep 10)
  {
    id: 'monsoon-session-concludes-2026',
    title: 'Monsoon Session Wraps Up: Data Rules, Skilling Push and Jobs Debate Dominate',
    excerpt:
      'Parliament concluded its Monsoon Session with the government clearing a clutch of economic bills, even as the Opposition pressed hard on employment and price rise in a series of sharp exchanges.',
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
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop&q=80',
    author: 'Priya Nair',
    publishedAt: 'Sep 10, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 5 — RBI holds repo rate (Sep 10)
  {
    id: 'rbi-holds-repo-rate-growth-outlook',
    title: 'RBI Holds Repo Rate, Lifts Growth Outlook as Inflation Stays Benign',
    excerpt:
      'The Monetary Policy Committee kept the policy rate unchanged for a fourth straight meeting and nudged up its GDP forecast, citing resilient demand, easing food prices and a stable rupee.',
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
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Sep 10, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 6 — India-EU FTA (Sep 9)
  {
    id: 'india-eu-fta-ratified-exports',
    title: 'India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports',
    excerpt:
      'A landmark trade pact between India and the European Union has cleared its final ratification hurdle, promising lower tariffs across textiles, autos, pharma and services once it enters into force.',
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
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop&q=80',
    author: 'Sanjay Mehta',
    publishedAt: 'Sep 9, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 7 — Women's cricket (Sep 10)
  {
    id: 'india-women-series-win-australia',
    title: 'India Women Seal ODI Series Against Australia with Dominant Bengaluru Show',
    excerpt:
      'A century stand up top and a disciplined spell in the middle overs powered India Women to a series-clinching win over Australia, underlining their credentials ahead of a home World Cup season.',
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
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Sep 10, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 8 — Health: dengue / monsoon health (Sep 9)
  {
    id: 'dengue-surveillance-monsoon-2026',
    title: 'Health Ministry Steps Up Dengue Surveillance as Post-Monsoon Cases Rise',
    excerpt:
      'With the retreating monsoon fuelling a seasonal spike, authorities have expanded fever clinics, ramped up mosquito-control drives and issued fresh advisories on early testing and hydration.',
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
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Meera Iyer',
    publishedAt: 'Sep 9, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 9 — Bollywood box office (Sep 10)
  {
    id: 'festive-box-office-2026-lineup',
    title: 'Bollywood Bets Big on Festive Season with a Blockbuster-Heavy Release Calendar',
    excerpt:
      'Studios have lined up a stacked slate of tentpole films for the festive window, betting that a return of the family audience and premium formats will drive one of the strongest box-office runs in years.',
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
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    author: 'Karan Malhotra',
    publishedAt: 'Sep 10, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 10 — Technology: India AI mission (Sep 9)
  {
    id: 'india-ai-mission-compute-expansion',
    title: 'India Expands National AI Compute Grid, Opens Access for Startups and Researchers',
    excerpt:
      'A major expansion of subsidised GPU capacity under the national AI programme is opening affordable compute to startups, universities and public-interest projects, aiming to close the gap with global labs.',
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
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Neha Kulkarni',
    publishedAt: 'Sep 9, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 11 — Politics: state polls (Sep 8)
  {
    id: 'assembly-elections-schedule-2026',
    title: 'Poll Panel Announces Assembly Election Schedule as Parties Shift Into Campaign Mode',
    excerpt:
      'The Election Commission unveiled the multi-phase schedule for upcoming state assembly polls, triggering the model code of conduct and setting off a frenetic round of alliance-building and manifesto drafting.',
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
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80',
    author: 'Priya Nair',
    publishedAt: 'Sep 8, 2026',
    readTime: '4 min read',
  },

  // 12 — Education: NEP / exam reform (Sep 8)
  {
    id: 'board-exam-twice-a-year-reform',
    title: 'Twice-a-Year Board Exams Roll Out Nationwide as Reform Push Gathers Pace',
    excerpt:
      'Students will now sit board examinations in two sittings a year and keep their best score, part of a broader shift toward reducing exam pressure and moving to competency-based assessment.',
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
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    author: 'Anjali Desai',
    publishedAt: 'Sep 8, 2026',
    readTime: '3 min read',
    isTrending: true,
  },

  // 13 — Health: heart health study (Sep 8)
  {
    id: 'indian-heart-health-study-2026',
    title: 'Large Indian Study Links Everyday Habits to Sharp Drop in Heart Risk',
    excerpt:
      'A multi-city study tracking tens of thousands of adults finds that modest, sustained changes to diet, sleep and daily movement can cut cardiovascular risk substantially — even without medication.',
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
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80',
    author: 'Dr. Meera Iyer',
    publishedAt: 'Sep 8, 2026',
    readTime: '4 min read',
  },

  // 14 — Cricket: Test squad / Australia tour (Sep 8)
  {
    id: 'india-squad-australia-tour-2026',
    title: 'Selectors Name a Youthful Squad for India\'s Tour of Australia',
    excerpt:
      'A blend of experience and fresh faces headlines the squad for the marquee tour Down Under, with selectors rewarding a strong domestic season and backing pace-bowling depth for testing conditions.',
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
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=1200&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Sep 8, 2026',
    readTime: '3 min read',
  },

  // 15 — Technology: EV / battery (Sep 9)
  {
    id: 'india-ev-battery-gigafactory-2026',
    title: 'India\'s First Large-Scale Cell Gigafactory Begins Commercial Output',
    excerpt:
      'A domestically built battery gigafactory has started commercial production, a milestone in the push to localise the EV supply chain, cut import dependence and bring down the cost of electric mobility.',
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
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&auto=format&fit=crop&q=80',
    author: 'Sanjay Mehta',
    publishedAt: 'Sep 9, 2026',
    readTime: '4 min read',
  },

  // 16 — Bollywood: OTT / streaming (Sep 8)
  {
    id: 'ott-regional-content-surge-2026',
    title: 'Streaming Platforms Double Down on Regional Originals as Audiences Fragment',
    excerpt:
      'Streamers are pouring investment into regional-language originals, betting that authentic local storytelling — not big-budget spectacle alone — is what keeps subscribers hooked in a crowded market.',
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
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&auto=format&fit=crop&q=80',
    author: 'Karan Malhotra',
    publishedAt: 'Sep 8, 2026',
    readTime: '3 min read',
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
