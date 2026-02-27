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
  // 1 — India Innovates 2026 (Featured Hero)
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
    publishedAt: 'Feb 27, 2026',
    readTime: '6 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 2 — T20 World Cup: India Beat Zimbabwe
  {
    id: 'india-beat-zimbabwe-t20-wc',
    title: 'T20 World Cup: Abhishek Sharma Shines as India Thrash Zimbabwe by 72 Runs, Set Up Virtual QF vs West Indies',
    excerpt: 'India posted a record 256/4 — their highest T20 World Cup total — to demolish Zimbabwe at Chepauk. Abhishek Sharma, Hardik Pandya, and Brian Bennett star in a run-fest.',
    content: `<p class="text-lg leading-relaxed mb-6">Chennai, February 26, 2026 — India produced a blistering batting performance to post 256/4, their highest-ever T20 World Cup total, before bowling Zimbabwe out for 184/6 at the MA Chidambaram Stadium. The 72-run victory sets up a virtual quarter-final against West Indies in Kolkata.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">India Rack Up Records</h2>
<p class="mb-6">Abhishek Sharma smashed a quickfire fifty to set the tone, while Hardik Pandya blasted his way to a half-century in just 22 balls. Sanju Samson continued his red-hot form bringing flair in the middle overs. The 256-run total is the second-highest in T20 World Cup history and the combined 440 runs from both sides is the second-most in any T20 WC match ever.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Performances</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Abhishek Sharma:</strong> Explosive start, silencing critics with rare defensive and attacking play</li>
  <li><strong>Hardik Pandya:</strong> Quickfire 50 anchoring the middle overs</li>
  <li><strong>Brian Bennett (ZIM):</strong> Fought valiantly but Zimbabwe fell well short</li>
  <li><strong>Arshdeep Singh:</strong> Key breakthroughs with the new ball</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Super 8 Equation</h2>
<p class="mb-6">With South Africa sealing a semi-final spot after beating West Indies by 9 wickets in Ahmedabad, India now need to beat West Indies in their final Super 8 game in Kolkata to progress. England vs New Zealand on Feb 27 could decide Pakistan's fate too.</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"We want to show fear to the opposition. When we bat, we want to dominate."<br/><span class="text-sm not-italic font-semibold">— Tilak Varma, after India's victory</span></blockquote>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80',
    author: 'Rajesh Sharma',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 3 — Ranji Trophy Final: J&K Dominating Karnataka
  {
    id: 'ranji-final-jk-karnataka',
    title: 'Ranji Trophy Final: Jammu & Kashmir Seize Control, Lead Karnataka by 477 Runs on Day 4',
    excerpt: 'J&K continue their fairytale Ranji run, amassing 584 in the first innings and 186/4 in the second to build a massive 477-run lead. Sourav Ganguly urges selectors to take Auqib Nabi to England.',
    content: `<p class="text-lg leading-relaxed mb-6">Hubballi, February 27, 2026 — Jammu & Kashmir are on the verge of creating the biggest upset in Indian domestic cricket history. On Day 4 of the Ranji Trophy final against Karnataka, J&K extended their lead to a mammoth 477 runs with six second-innings wickets still in hand.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Dominance at Every Level</h2>
<p class="mb-6">After bowling Karnataka out for 293 in response to their colossal first-innings total of 584, J&K batters continued their dominance with Shubham Pundir and KV Aneesh adding crucial runs. The game has been one-way traffic since Yawer Hassan's composed 88 and Pundir's century set the tone in the first innings.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Auqib Nabi's Star Rises</h2>
<p class="mb-6">Former India captain Sourav Ganguly has backed J&K's pace spearhead Auqib Nabi for India selection, stating "Take Auqib Nabi to England." The Baramulla-born fast bowler has taken 67+ wickets this season and has been the standout bowler in the tournament.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Drama on the Field</h2>
<p class="mb-6">The final has also been marred by a controversial head-butt incident — J&K captain Paras Dogra clashed helmets with a Karnataka fielder, but it was later brushed aside as "heat of the moment."</p>
<blockquote class="border-l-4 border-primary pl-6 italic my-8 text-lg text-neutral-600">"This is not just about cricket for us. It's about representing a region that has faced immense challenges."<br/><span class="text-sm not-italic font-semibold">— Paras Dogra, J&K Captain</span></blockquote>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop&q=80',
    author: 'Ravi Kumar',
    publishedAt: 'Feb 27, 2026',
    readTime: '7 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 4 — Kejriwal Excise Case
  {
    id: 'kejriwal-excise-cleared',
    title: "'No Overarching Conspiracy': Court Clears Arvind Kejriwal, Manish Sisodia in Delhi Excise Case",
    excerpt: 'In a landmark judgment, a Delhi court has discharged AAP leaders Arvind Kejriwal and Manish Sisodia in the Delhi excise policy case. CBI has moved Delhi HC to challenge the order.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — In what is being seen as one of the most significant political-legal developments this year, a Delhi court has discharged AAP national convenor Arvind Kejriwal and former Deputy CM Manish Sisodia in the Delhi excise policy case, ruling that there was "no overarching conspiracy or criminal intent."</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Verdict</h2>
<p class="mb-6">The court found insufficient evidence of a wider conspiracy in the now-scrapped 2021-22 excise policy. Kejriwal, who spent over five months in judicial custody in 2024, broke down in tears after the judgment, declaring "I am kattar imaandaar" (deeply honest).</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Political Fallout</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Kejriwal's Response:</strong> "You need to kill me to stop me" — launched blistering attack on PM Modi and Amit Shah</li>
  <li><strong>CBI Challenge:</strong> The CBI has moved Delhi High Court to challenge the lower court's discharge order</li>
  <li><strong>BJP's Reaction:</strong> The ruling party maintains the policy was corrupt and promises to pursue legal remedies</li>
  <li><strong>Congress:</strong> Called it "vindication of judiciary" while noting its own stance on the case</li>
</ul>
<p class="mb-6">Kejriwal has now challenged PM Modi to hold fresh Delhi elections, citing the court relief as proof of his innocence. The case had been a major political flashpoint between AAP and BJP throughout 2024 and 2025.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop&q=80',
    author: 'Sanjay Das',
    publishedAt: 'Feb 27, 2026',
    readTime: '6 min read',
    isTrending: true,
  },

  // 5 — PM Modi Israel Visit
  {
    id: 'modi-israel-visit',
    title: "PM Modi's Historic Israel Visit: India-Israel Ink Several Key MoUs, Upgrade Strategic Ties",
    excerpt: 'PM Modi addresses Knesset, signs defence and tech agreements with Netanyahu. "Not good sign for Gandhi\'s India," say critics as PM visits Jewish state.',
    content: `<p class="text-lg leading-relaxed mb-6">Jerusalem, February 27, 2026 — Prime Minister Narendra Modi concluded a landmark two-day visit to Israel, signing multiple Memoranda of Understanding with Israeli PM Benjamin Netanyahu across defence, agriculture, water technology, and artificial intelligence.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Agreements</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Defence Cooperation:</strong> Enhanced joint development of advanced weaponry and cyber security systems</li>
  <li><strong>Agricultural Tech:</strong> Israel to set up 10 new Centers of Excellence in Indian states</li>
  <li><strong>Water Innovation:</strong> ₹5,000 crore collaboration on desalination and drip irrigation</li>
  <li><strong>AI Partnership:</strong> Joint AI research labs in both countries</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Lighter Moments</h2>
<p class="mb-6">PM Modi also met members of the popular Israeli TV series 'Fauda' cast, posting a selfie with the message "No undercover work!" — a reference to the show's Mossad storylines. Netanyahu linked his love story to India, recalling his first date at an Indian restaurant.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Domestic Criticism</h2>
<p class="mb-6">The visit drew criticism from PDP leader Mehbooba Mufti, who called it "not a good sign for Gandhi's India," while opposition leaders Mehbooba and Tarigami formally opposed the visit in Parliament.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=80',
    author: 'Rakesh Mehta',
    publishedAt: 'Feb 27, 2026',
    readTime: '6 min read',
    isFeatured: true,
    isTrending: true,
  },

  // 6 — India GDP Q3 FY26
  {
    id: 'india-gdp-q3-fy26',
    title: "India's GDP Surges 7.8% in Q3 FY26, Among World's Fastest Growing Economies",
    excerpt: 'Robust consumption growth and manufacturing rebound drive India\'s third-quarter GDP to 7.8%, beating economists\' consensus estimates of 7.2%.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — India's gross domestic product grew at a robust 7.8% in the October-December quarter of FY26, beating market expectations and cementing India's position as the world's fastest-growing major economy.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Growth Drivers</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Manufacturing:</strong> Grew 9.1%, powered by the PLI scheme and Make in India push</li>
  <li><strong>Private Consumption:</strong> Urban and rural demand both showed strong recovery</li>
  <li><strong>Services:</strong> IT and financial services maintained double-digit momentum</li>
  <li><strong>Agriculture:</strong> Normal monsoon boosted kharif output, rabi season looking strong</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Global Comparison</h2>
<p class="mb-6">At 7.8%, India outpaces China (4.9%), the US (2.3%), and the EU (0.8%) for the quarter. The IMF had projected India's full-year growth at 7.0% — the Q3 number suggests potential upward revision.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Market Reaction</h2>
<p class="mb-6">Sensex rallied 450 points on the data release. CEA V. Anantha Nageswaran credited the government's infrastructure push and said India is ready for 270 GW peak power demand, with discoms urged to ensure reliable supply.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 7 — HPV Vaccination Drive
  {
    id: 'hpv-vaccination-drive',
    title: "PM Modi to Launch Nationwide HPV Vaccination Drive from Ajmer on February 28",
    excerpt: 'The Health Ministry announces India\'s largest cervical cancer prevention programme, with PM Modi set to inaugurate it from Ajmer. 90 lakh girls to be vaccinated in Phase 1.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — The Union Health Ministry announced that Prime Minister Narendra Modi will launch the nationwide HPV (Human Papillomavirus) vaccination drive from Ajmer, Rajasthan on February 28, 2026 — marking India's most ambitious cervical cancer prevention programme.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Programme Details</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Target:</strong> 90 lakh adolescent girls aged 9-14 in Phase 1</li>
  <li><strong>Vaccine:</strong> India's indigenously developed quadrivalent HPV vaccine</li>
  <li><strong>Coverage:</strong> All government schools and anganwadis nationwide</li>
  <li><strong>Cost:</strong> Completely free under the Universal Immunisation Programme</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Why It Matters</h2>
<p class="mb-6">India accounts for nearly one-quarter of global cervical cancer deaths, with 1.25 lakh cases and 75,000 deaths annually. HPV vaccination can prevent over 90% of cervical cancers when administered before exposure to the virus. Health experts have hailed the move as potentially saving lakhs of lives over the coming decades.</p>
<p class="mb-6">Health Secretary Apurva Chandra said the campaign would be supported by an extensive awareness drive across social media and grassroots health workers.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    author: 'Dr. Anita Singh',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 8 — Rashmika-Vijay Wedding
  {
    id: 'rashmika-vijay-wedding',
    title: "Rashmika Mandanna & Vijay Deverakonda Tie the Knot: Inside the Dreamy Celebration",
    excerpt: 'Bollywood and Tollywood unite as Rashmika Mandanna and Vijay Deverakonda exchange vows in a private ceremony. Ananya Panday shares her favourite photo.',
    content: `<p class="text-lg leading-relaxed mb-6">Hyderabad, February 27, 2026 — In one of the most-awaited celebrity weddings of the year, actors Rashmika Mandanna and Vijay Deverakonda exchanged vows in a private ceremony at a luxury resort in Hyderabad, surrounded by close family and friends.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Dreamy Affair</h2>
<p class="mb-6">The multi-day celebration combined South Indian traditions with modern elegance. Rashmika wore a breathtaking gold Kanjeevaram saree by Sabyasachi while Vijay opted for a classic off-white sherwani. The sangeet night featured surprise performances from industry friends.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Celebrity Reactions</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Ananya Panday:</strong> Shared her favourite photo, "can't stop gushing" over the couple</li>
  <li><strong>Samantha Ruth Prabhu:</strong> "Couldn't be happier for you two"</li>
  <li><strong>Allu Arjun:</strong> "Wishing you a lifetime of love and happiness"</li>
</ul>
<p class="mb-6">The couple, who starred together in Geetha Govindam (2018) and Dear Comrade (2019), had kept their relationship private for years despite persistent rumours. #RashmikaVijayWedding trended at #1 across all social media platforms.</p>`,
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    author: 'Pooja Sharma',
    publishedAt: 'Feb 27, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 9 — INS Anjadip Commissioned
  {
    id: 'ins-anjadip-commissioned',
    title: "India Commissions INS Anjadip: The Shallow-Water Warship Built to Hunt Submarines",
    excerpt: 'Indian Navy commissions INS Anjadip, a state-of-the-art Anti-Submarine Warfare Shallow Water Craft, strengthening coastal defence capabilities against adversaries.',
    content: `<p class="text-lg leading-relaxed mb-6">Visakhapatnam, February 27, 2026 — The Indian Navy commissioned INS Anjadip, the latest Anti-Submarine Warfare Shallow Water Craft (ASW SWC) built by Garden Reach Shipbuilders & Engineers (GRSE) in Kolkata, bolstering India's coastal defence capabilities.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Strategic Significance</h2>
<p class="mb-6">INS Anjadip is specifically designed for submarine detection and neutralisation in shallow waters along the Indian coastline and Exclusive Economic Zone. The vessel is equipped with advanced sonar systems, lightweight torpedoes, and rocket launchers for anti-submarine operations.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Specifications</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Displacement:</strong> 900 tonnes</li>
  <li><strong>Length:</strong> 77.6 meters</li>
  <li><strong>Speed:</strong> 25 knots</li>
  <li><strong>Armament:</strong> Hull-mounted sonar, lightweight torpedoes, rocket launchers</li>
  <li><strong>Built by:</strong> GRSE, Kolkata — under Atmanirbhar Bharat</li>
</ul>
<p class="mb-6">Earlier this week, President Droupadi Murmu flew in an indigenous Prachand Light Combat Helicopter near the India-Pakistan border, further underscoring the government's emphasis on self-reliance in defence manufacturing.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&auto=format&fit=crop&q=80',
    author: 'Neha Gupta',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
    isTrending: true,
  },

  // 10 — The Kerala Story 2
  {
    id: 'kerala-story-2-hc',
    title: "'The Kerala Story 2' Gets Relief: Kerala HC Lifts Stay, Green-Lights Film Release",
    excerpt: 'In a dramatic legal twist, the Kerala High Court division bench overturns the single judge\'s stay order on The Kerala Story 2, allowing the film\'s release to proceed.',
    content: `<p class="text-lg leading-relaxed mb-6">Kochi, February 27, 2026 — In a dramatic reversal, the Kerala High Court division bench has paused the single judge's order that stayed the release of Vipul Shah's 'The Kerala Story 2' for 15 days, effectively allowing the controversial film's release to proceed.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Legal Timeline</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Feb 26:</strong> Single judge stayed the film's release for 15 days citing potential communal tensions</li>
  <li><strong>Feb 27 (Morning):</strong> Producers appealed to division bench</li>
  <li><strong>Feb 27 (Evening):</strong> Division bench paused the single judge's order for two weeks</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Debate Rages On</h2>
<p class="mb-6">Kerala has been sharply divided over the sequel. While critics see it as propaganda, supporters argue it raises legitimate concerns. The phrase "Is it propaganda? What Malayalis think of The Kerala Story 2" has been trending, with views divided along political and communal lines.</p>
<p class="mb-6">The film's first part was a massive commercial success in 2023, earning over ₹300 crore. The sequel is expected to open big at the box office despite the controversy.</p>`,
    category: 'bollywood',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80',
    author: 'Simran Kaur',
    publishedAt: 'Feb 27, 2026',
    readTime: '4 min read',
    isTrending: true,
  },

  // 11 — DGCA Refund Rules
  {
    id: 'dgca-refund-rules',
    title: "DGCA Issues New Refund Rules: Airlines Must Offer 48-Hour Look-In Period for Changes",
    excerpt: 'India\'s aviation regulator mandates a 48-hour free change window for airline tickets and requires refunds to be processed within 14 days — a win for passenger rights.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — The Directorate General of Civil Aviation (DGCA) has issued sweeping new regulations aimed at protecting airline passengers, including a mandatory 48-hour look-in period and 14-day refund timelines.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key New Rules</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>48-Hour Window:</strong> Passengers can make changes or cancel tickets free of charge within 48 hours of booking</li>
  <li><strong>14-Day Refund:</strong> Airlines must process all eligible refunds within 14 calendar days</li>
  <li><strong>Transparent Pricing:</strong> All additional charges must be disclosed at the time of booking</li>
  <li><strong>Compensation:</strong> Enhanced compensation for flight delays beyond 3 hours</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">Industry Impact</h2>
<p class="mb-6">The rules apply to all domestic and international airlines operating in India. IndiGo, Air India, and SpiceJet have acknowledged the new regulations and are updating their booking systems accordingly. Consumer rights activists have praised the move as long overdue.</p>`,
    category: 'business',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&auto=format&fit=crop&q=80',
    author: 'Amit Verma',
    publishedAt: 'Feb 27, 2026',
    readTime: '4 min read',
  },

  // 12 — SC Remarks on NCERT
  {
    id: 'sc-ncert-graft-chapter',
    title: "'They Fired the Gun & Judiciary is Bleeding': SC's Sharp Remarks on NCERT Over Graft Chapter",
    excerpt: 'Supreme Court delivers scathing observations on NCERT for removing an anti-corruption chapter from textbooks, as Education Minister promises action.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — The Supreme Court delivered stinging remarks aimed at NCERT over the removal of a chapter on corruption from school textbooks, saying "They fired the gun and the judiciary is bleeding."</p>
<h2 class="text-2xl font-bold mt-8 mb-4">The Controversy</h2>
<p class="mb-6">NCERT had quietly dropped a chapter covering the concepts of corruption and governance reforms from its Class 12 Political Science textbook during a recent syllabus revision. The move came to light after teachers and civil society groups flagged it.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Court's Strong Words</h2>
<p class="mb-6">A bench led by the Chief Justice questioned the rationale behind removing anti-corruption content from educational material, saying it sent the wrong signal to young citizens. The court asked NCERT to explain within four weeks.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Government Response</h2>
<p class="mb-6">PM Modi questioned the NCERT lapse directly, while Education Minister Dharmendra Pradhan declared "We have utmost respect for the judiciary" and vowed swift corrective action. The episode has reignited debates about academic autonomy and political interference in education.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    author: 'Kavita Reddy',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
  },

  // 13 — Afghanistan-Pakistan Conflict
  {
    id: 'afghanistan-pakistan-conflict',
    title: "Afghanistan-Pakistan Conflict Escalates: Airstrikes, Guerrilla Warfare, and a Regional Spiral",
    excerpt: 'Pakistan\'s airstrikes on Afghan cities deepen the crisis along the Durand Line, with militants, missed diplomacy, and retaliatory attacks raising fears of a broader conflict.',
    content: `<p class="text-lg leading-relaxed mb-6">Islamabad/Kabul, February 27, 2026 — Tensions between Pakistan and Taliban-ruled Afghanistan have reached a dangerous flashpoint, with Pakistan launching airstrikes on multiple Afghan cities in what Islamabad called "counter-terrorism operations."</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Escalation Timeline</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Feb 23:</strong> TTP militants attacked a Pakistan Army convoy in Waziristan, killing 12 soldiers</li>
  <li><strong>Feb 25:</strong> Pakistan Air Force struck targets across the Durand Line in Paktika, Khost</li>
  <li><strong>Feb 26:</strong> Afghan Taliban retaliated with cross-border shelling into Balochistan</li>
  <li><strong>Feb 27:</strong> Diplomatic channels remain frozen; both sides reject mediation offers</li>
</ul>
<h2 class="text-2xl font-bold mt-8 mb-4">India's Stance</h2>
<p class="mb-6">At the UN, India slammed Pakistan's "incessant propaganda," calling Islamabad's claims "living in la-la land." India's permanent representative reiterated that Pakistan-based terror infrastructure remains the primary obstacle to regional peace.</p>
<p class="mb-6">Indian Army's Northern Command also issued a stern warning: "They will be forced to accept defeat — Pakistan's nuclear rhetoric won't save it next time."</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1580086319619-3ed498161c77?w=800&auto=format&fit=crop&q=80',
    author: 'Harpreet Singh',
    publishedAt: 'Feb 27, 2026',
    readTime: '7 min read',
    isTrending: true,
  },

  // 14 — Rinku Singh's Father Passes Away
  {
    id: 'rinku-singh-father',
    title: "Rinku Singh's Father Passes Away: Virat Kohli, Cricket Fraternity Pour in Condolences",
    excerpt: 'Indian cricketer Rinku Singh loses his father to cancer during the T20 World Cup. Virat Kohli pens emotional tribute; Rinku heads home from tournament.',
    content: `<p class="text-lg leading-relaxed mb-6">Greater Noida, February 27, 2026 — Indian cricketer Rinku Singh's father breathed his last on Friday morning at Yatharth Hospital in Greater Noida, where he had been undergoing cancer treatment. The all-rounder has left the T20 World Cup squad to be with his family.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Cricket World Mourns</h2>
<p class="mb-6">Virat Kohli penned a heartfelt tribute: "May you always find strength in his eternal blessings." The entire cricket community rallied behind Rinku, with former and current players sharing condolences.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Tributes Pour In</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Rohit Sharma:</strong> "Stay strong brother, we are all with you"</li>
  <li><strong>Sunil Gavaskar:</strong> "No words feel enough at such times"</li>
  <li><strong>BCCI:</strong> Extended full support and offered Rinku compassionate leave</li>
</ul>
<p class="mb-6">Rinku's father had been battling cancer since 2024 and the young cricketer had been managing his tournament commitments while keeping a close eye on his father's condition. The BCCI arranged a special flight for Rinku to return to Greater Noida.</p>`,
    category: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80',
    author: 'Suresh Nair',
    publishedAt: 'Feb 27, 2026',
    readTime: '4 min read',
    isFeatured: true,
  },

  // 15 — Social Media Must Pay Creators: Vaishnaw
  {
    id: 'social-media-pay-creators',
    title: "Social Media Companies Must Pay Creators Fairly: Ashwini Vaishnaw at DNPA Conclave 2026",
    excerpt: 'IT Minister Ashwini Vaishnaw calls out Big Tech at the DNPA Conclave, demanding fair revenue sharing for content creators and news publishers in India.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — Union IT Minister Ashwini Vaishnaw made a powerful case for creator compensation at the DNPA (Digital News Publishers Association) Conclave 2026, saying social media companies must pay Indian content creators and news publishers fairly for the value they generate.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Key Remarks</h2>
<p class="mb-6">"These platforms make billions from content created by Indian publishers and creators. It is only fair they share that revenue," Vaishnaw said, hinting at upcoming regulatory measures similar to Australia's News Media Bargaining Code.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">DNPA Conclave Highlights</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Prasoon Joshi:</strong> Reflected on the intersection of AI, creativity, and human imagination</li>
  <li><strong>S. Krishnan (IT Secretary):</strong> Outlined India's digital regulatory framework in the AI era</li>
  <li><strong>Sudhir Chaudhary:</strong> Called for "rewriting the news playbook with purpose and clarity"</li>
  <li><strong>Vineet Nayyar:</strong> Urged publishers to embrace AI as an opportunity</li>
</ul>
<p class="mb-6">The conclave also emphasized that India's digital public infrastructure positions media companies at the heart of civic innovation and sustainable journalism.</p>`,
    category: 'technology',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=80',
    author: 'Dr. Priya Sharma',
    publishedAt: 'Feb 27, 2026',
    readTime: '5 min read',
  },

  // 16 — Maharashtra Digital Addiction Task Force
  {
    id: 'maharashtra-digital-addiction',
    title: "Maharashtra Forms Task Force to Study Digital Addiction's Impact on Children",
    excerpt: 'The Maharashtra government constitutes an expert panel to study the adverse effects of screen time and social media on children\'s mental health and academic performance.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, February 27, 2026 — The Maharashtra government has constituted a task force of health experts, educators, and technology specialists to study the adverse impact of digital addiction on children and recommend policy measures.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Growing Concerns</h2>
<p class="mb-6">The move comes after multiple studies showed Indian children spend an average of 4.5 hours daily on screens — up from 2 hours pre-pandemic. Paediatricians have reported a sharp rise in anxiety, sleep disorders, and attention deficits among school-age children.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Task Force Mandate</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Study correlation between screen time and academic performance</li>
  <li>Assess mental health impact of social media on adolescents</li>
  <li>Recommend age-appropriate digital usage guidelines</li>
  <li>Propose school-level interventions and parental awareness programmes</li>
</ul>
<p class="mb-6">The task force will submit its report within 90 days. Meanwhile, Maharashtra's pollution crackdown saw 88% of construction sites receive stop-work notices, as the state tackles both environmental and digital health challenges simultaneously.</p>`,
    category: 'health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    author: 'Dr. Maya Iyer',
    publishedAt: 'Feb 27, 2026',
    readTime: '4 min read',
  },

  // 17 — Sunetra Pawar NCP President
  {
    id: 'sunetra-pawar-ncp',
    title: "Sunetra Pawar Elected NCP National President, Succeeds Late Husband Ajit Pawar",
    excerpt: 'Sunetra Pawar unanimously elected as NCP national president, vowing to fulfil Ajit Pawar\'s unfinished dreams for Maharashtra\'s development.',
    content: `<p class="text-lg leading-relaxed mb-6">Mumbai, February 27, 2026 — Sunetra Pawar was unanimously elected as the national president of the Nationalist Congress Party (NCP), succeeding her late husband Ajit Pawar. In an emotional address, she pledged to continue his legacy and work for Maharashtra's development.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Leadership Transition</h2>
<p class="mb-6">"Will work to fulfil Ajit dada's dreams," Sunetra said during the election ceremony attended by NDA allies and senior party leaders. The BJP expressed confidence in the new leadership, terming it "continuity with strength."</p>
<h2 class="text-2xl font-bold mt-8 mb-4">Political Significance</h2>
<p class="mb-6">The move strengthens the NCP's alliance within the ruling Mahayuti coalition in Maharashtra. Sunetra Pawar, a Rajya Sabha MP, is seen as a unifying figure in the party. Her elevation also makes NCP one of the few major Indian parties led by a woman.</p>`,
    category: 'politics',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop&q=80',
    author: 'Meera Joshi',
    publishedAt: 'Feb 27, 2026',
    readTime: '3 min read',
  },

  // 18 — SBI Clerk Mains Result
  {
    id: 'sbi-clerk-mains-result',
    title: "SBI Clerk Mains Result 2026 Out: Direct Link to Download Merit List PDF",
    excerpt: 'State Bank of India has released the SBI Clerk Mains 2026 results at sbi.co.in. Candidates can check their scores and download the merit list PDF.',
    content: `<p class="text-lg leading-relaxed mb-6">New Delhi, February 27, 2026 — The State Bank of India has released the SBI Clerk Mains 2026 examination results on its official website sbi.co.in. Candidates who appeared for the exam can check their scores and download the merit list PDF.</p>
<h2 class="text-2xl font-bold mt-8 mb-4">How to Check Results</h2>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Visit the official SBI website at sbi.co.in</li>
  <li>Click on 'Recruitment' under the Careers section</li>
  <li>Look for 'SBI Clerk Mains Result 2026'</li>
  <li>Enter your registration number and date of birth</li>
  <li>Download the scorecard for future reference</li>
</ul>
<p class="mb-6">REET Mains 2026 answer keys for Primary and Upper Primary Teachers have also been released. Education remains a top focus as recruitment across banking, teaching, and government sectors accelerates in 2026.</p>`,
    category: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
    author: 'Kavita Reddy',
    publishedAt: 'Feb 27, 2026',
    readTime: '3 min read',
  },
];

export const liveMatches: LiveMatch[] = [
  {
    id: '1',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026 — Super 8',
    venue: 'R. Premadasa Stadium, Colombo',
    team1: {
      name: 'England',
      shortName: 'ENG',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      score: '—',
      overs: '',
    },
    team2: {
      name: 'New Zealand',
      shortName: 'NZ',
      flag: '🇳🇿',
      score: '—',
      overs: '',
    },
    status: 'upcoming',
  },
  {
    id: '2',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026 — Super 8',
    venue: 'MA Chidambaram Stadium, Chennai',
    team1: {
      name: 'India',
      shortName: 'IND',
      flag: '🇮🇳',
      score: '256/4',
      overs: '(20 ov)',
    },
    team2: {
      name: 'Zimbabwe',
      shortName: 'ZIM',
      flag: '🇿🇼',
      score: '184/6',
      overs: '(20 ov)',
    },
    status: 'completed',
  },
  {
    id: '3',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026 — Super 8',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    team1: {
      name: 'South Africa',
      shortName: 'SA',
      flag: '🇿🇦',
      score: '177/1',
      overs: '(16.1 ov)',
    },
    team2: {
      name: 'West Indies',
      shortName: 'WI',
      flag: '🏴‍☠️',
      score: '176/8',
      overs: '(20 ov)',
    },
    status: 'completed',
  },
  {
    id: '4',
    sport: 'Cricket',
    tournament: 'Ranji Trophy Final — Day 4',
    venue: 'KSCA Ground, Hubballi',
    team1: {
      name: 'J&K',
      shortName: 'J&K',
      flag: '🏔️',
      score: '584 & 186/4',
      overs: '(57 ov)',
    },
    team2: {
      name: 'Karnataka',
      shortName: 'KAR',
      flag: '🏏',
      score: '293',
      overs: '(All out)',
    },
    status: 'live',
  },
  {
    id: '5',
    sport: 'Cricket',
    tournament: 'Women\'s ODI — India in Australia',
    venue: 'Adelaide Oval',
    team1: {
      name: 'Australia',
      shortName: 'AUS-W',
      flag: '🇦🇺',
      score: '252/5',
      overs: '(36.1 ov)',
    },
    team2: {
      name: 'India',
      shortName: 'IND-W',
      flag: '🇮🇳',
      score: '251/9',
      overs: '(50 ov)',
    },
    status: 'completed',
  },
  {
    id: '6',
    sport: 'Cricket',
    tournament: 'T20 World Cup 2026 — Super 8',
    venue: 'Pallekele, Sri Lanka',
    team1: {
      name: 'Sri Lanka',
      shortName: 'SL',
      flag: '🇱🇰',
      score: '—',
      overs: '',
    },
    team2: {
      name: 'Pakistan',
      shortName: 'PAK',
      flag: '🇵🇰',
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
