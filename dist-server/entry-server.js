import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef, createContext, useContext, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { useLocation, Link, NavLink, useParams, Routes, Route } from "react-router-dom";
import { Menu, Search, X, ChevronRight, Facebook, Twitter, Instagram, Youtube, ArrowRight, ArrowLeft, MessageCircle, Linkedin, Mail, Check, Link2 } from "lucide-react";
const categories = [
  { id: "politics", name: "Politics", slug: "politics", color: "#1D4ED8", desk: "News", description: "Parliament, elections, policy and the people who shape them." },
  { id: "world", name: "World", slug: "world", color: "#0F766E", desk: "World", description: "Geopolitics, diplomacy, conflict and global affairs." },
  { id: "business", name: "Business", slug: "business", color: "#B45309", desk: "Business", description: "Markets, economy, trade and corporate India." },
  { id: "technology", name: "Technology", slug: "technology", color: "#EA580C", desk: "Science & Tech", description: "AI, space, startups and the digital economy." },
  { id: "science", name: "Science", slug: "science", color: "#4338CA", desk: "Science & Tech", description: "Research, climate, environment and discovery." },
  { id: "health", name: "Health", slug: "health", color: "#DB2777", desk: "Science & Tech", description: "Medicine, public health, research and wellbeing." },
  { id: "sports", name: "Sports", slug: "sports", color: "#15803D", desk: "Sport", description: "Football, tennis, Olympics and the wider sporting world." },
  { id: "cricket", name: "Cricket", slug: "cricket", color: "#0F766E", desk: "Sport", description: "Scores, analysis and reporting from every format of the game." },
  { id: "education", name: "Education", slug: "education", color: "#0891B2", desk: "News", description: "Schools, universities, exams and education policy." },
  { id: "bollywood", name: "Bollywood", slug: "bollywood", color: "#9333EA", desk: "Culture", description: "Film, streaming, music and the people behind them." }
];
const articles = [
  // 0 — Major Mohammed Ali Shah episode (Featured Hero — Nov 6, 2026)
  {
    id: "major-mohammed-ali-shah-saurabh-nigam-show",
    title: "Major Mohammed Ali Shah on The Saurabh Nigam Show: From the Indian Army to Bollywood",
    excerpt: "Former Indian Army officer, actor and Naseeruddin Shah’s nephew Major Mohammed Ali Shah joins host Saurabh Nigam for a conversation on courage, discipline and reinvention beyond the uniform.",
    content: `<p><strong>New Delhi:</strong> The latest episode of The Saurabh Nigam Show, featuring former Indian Army officer, actor and motivational speaker Major Mohammed Ali Shah, brings together two contrasting yet complementary personalities in a conversation about courage, discipline, personal identity and life beyond the uniform.</p>
<p>While Major Ali Shah’s remarkable transition from the Indian Army to Bollywood provides the narrative, it is host Saurabh Nigam’s calm energy, soft-spoken communication style and striking screen presence that give the episode its distinctive character.</p>
<p>At a time when Indian podcasts increasingly rely on dramatic exchanges and outspoken personalities, Nigam presents a refreshing alternative. His composed demeanour, measured questions and attentive listening create an atmosphere where meaningful conversations take precedence over unnecessary theatrics.</p>
<h2>Saurabh Nigam’s calm confidence and distinctive screen presence</h2>
<p>One of the most noticeable aspects of The Saurabh Nigam Show is its host’s understated approach to presenting.</p>
<p>Saurabh Nigam demonstrates that commanding attention does not always require dominating a conversation. His naturally gentle voice, thoughtful expressions and unhurried delivery bring a sense of sophistication to the podcast format.</p>
<p>Equally noteworthy is his camera presence. Nigam carries himself with an effortless confidence, combining a polished appearance with an engaging yet restrained personality.</p>
<p>Rather than attempting to become the centre of every discussion, he creates space for his guests to share their experiences.</p>
<p>His ability to listen patiently, ask relevant questions and maintain a comfortable conversational rhythm contributes significantly to the episode’s appeal.</p>
<p>It is this combination of quiet confidence, understated elegance and natural screen charisma that gives Saurabh Nigam a distinctive identity among emerging Indian podcast hosts.</p>
<h2>Major Mohammed Ali Shah: from Indian Army officer to Bollywood actor</h2>
<p>Major Mohammed Ali Shah’s professional journey is an unusual combination of military service, performing arts and public speaking.</p>
<p>Having served in the Indian Army, including postings in Jammu and Kashmir and Assam, Shah experienced the responsibilities and demanding realities of military life before pursuing a career in entertainment.</p>
<p>His transition from the armed forces to acting represents a significant personal reinvention, requiring him to navigate an industry far removed from the discipline and structure of military service.</p>
<p>Over the years, Major Ali Shah has established himself as an actor and motivational speaker, drawing upon his varied experiences to connect with audiences.</p>
<p>On The Saurabh Nigam Show, his journey provides an opportunity to explore the relationship between discipline, ambition, resilience and the willingness to embrace new professional challenges.</p>
<h2>Naseeruddin Shah’s nephew with a journey of his own</h2>
<p>Major Mohammed Ali Shah also comes from a family associated with two distinguished fields: the Indian armed forces and Indian cinema.</p>
<p>His uncle, Naseeruddin Shah, is among India’s most celebrated actors, known for his contribution to parallel cinema, theatre and mainstream Hindi films.</p>
<p>Major Ali Shah’s father served as Deputy Chief of the Army Staff, adding another significant dimension to the family’s professional legacy.</p>
<p>However, beyond these distinguished family connections, Major Ali Shah’s individual journey remains noteworthy.</p>
<p>His decision to move from military service into acting and public speaking reflects a determination to build a professional identity shaped by personal choices and experiences.</p>
<h2>A conversation defined by substance rather than spectacle</h2>
<p>The chemistry between Saurabh Nigam and Major Mohammed Ali Shah is one of the episode’s strengths.</p>
<p>Shah brings the intensity of a soldier’s experiences and the expressiveness of an actor, while Nigam complements these qualities with a calm temperament and thoughtful questioning.</p>
<p>The host’s soft-spoken style never diminishes his authority. Instead, it creates a comfortable environment in which the guest’s experiences can take centre stage.</p>
<p>Nigam’s strong screen presence remains evident throughout, yet it never overshadows the conversation.</p>
<p>This balance between an engaging host and an accomplished guest gives the episode a refined quality that distinguishes it from more confrontational podcast formats.</p>
<h2>The Saurabh Nigam Show builds its identity in India’s podcast landscape</h2>
<p>With conversations featuring personalities from different professional and personal backgrounds, The Saurabh Nigam Show is developing an identity centred on meaningful storytelling and thoughtful interaction.</p>
<p>The Major Mohammed Ali Shah episode reflects that approach, combining the appeal of a recognised public personality with the host’s increasingly distinctive presentation style.</p>
<p>For Saurabh Nigam, the strength of his hosting lies not merely in the questions he asks but also in his ability to make guests feel comfortable sharing their stories.</p>
<p>His composed personality, natural camera appeal and subtle conversational intelligence offer a different interpretation of what makes a compelling podcast host.</p>
<p>As Indian podcast audiences continue to explore long-form interviews and personality-driven conversations, The Saurabh Nigam Show presents an approach built around authenticity, preparation and understated confidence.</p>
<p>Ultimately, the episode leaves viewers with two compelling impressions: Major Mohammed Ali Shah’s extraordinary journey from the Indian Army to the world of cinema, and Saurabh Nigam’s quiet charisma, demonstrating that a powerful screen presence can be built not through volume, but through confidence, composure and the art of listening.</p>`,
    category: "bollywood",
    imageUrl: "/images/articles/major-mohammed-ali-shah-saurabh-nigam-show.jpg",
    imageWidth: 1440,
    imageHeight: 810,
    imageAlt: "Major Mohammed Ali Shah in uniform cap beside host Saurabh Nigam at the bar counter on the set of The Saurabh Nigam Show",
    imageCredit: "The Fista",
    author: "The Fista Desk",
    publishedAt: "Nov 6, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 1 — Rajan Yadav horror episode (Featured Hero — Oct 30, 2026)
  {
    id: "rajan-yadav-horror-stories-saurabh-nigam-show",
    title: "Rajan Yadav Brings Tales of the Unexplained to The Saurabh Nigam Show",
    excerpt: "Horror storyteller Rajan Yadav takes centre stage in a recent episode of The Saurabh Nigam Show, with the host’s restrained interviewing style leaving the spotlight on the guest.",
    content: `<p><strong>New Delhi:</strong> Horror storyteller Rajan Yadav takes centre stage in a recent episode of The Saurabh Nigam Show, bringing with him a series of unsettling stories and experiences centred around fear, the paranormal and the unexplained.</p>
<p>What stands out in the conversation, however, is not only the subject matter but also the manner in which host Saurabh Nigam approaches it.</p>
<p>At a time when podcast conversations can often see hosts becoming as prominent as their guests, Nigam adopts a noticeably restrained interviewing style. He allows Yadav’s narratives to unfold at length, stepping in primarily with questions that move the conversation forward rather than repeatedly interrupting the flow.</p>
<p>For a horror-led episode, the approach works particularly well. Suspense depends heavily on timing, pauses and uninterrupted narration, and Yadav is given enough room to establish each story before the conversation moves ahead.</p>
<h2>Letting the guest own the conversation</h2>
<p>Saurabh’s hosting style throughout the episode reflects a simple principle — the guest remains the focus.</p>
<p>There is little attempt to compete for screen time or turn every answer into an exchange of opinions. Instead, Nigam largely assumes the role of an attentive listener, using follow-up questions to explore details that may otherwise have remained unanswered.</p>
<p>The result is a conversation that feels less like a conventional interview and more like sitting across from a storyteller as he gradually reveals one disturbing experience after another.</p>
<p>Interestingly, Nigam’s presence is perhaps most noticeable in the moments when he chooses not to intervene.</p>
<p>His willingness to let silences remain, allow longer answers and resist exaggerated reactions gives Yadav’s storytelling space to create its own impact.</p>
<h2>A guest-first format</h2>
<p>As The Saurabh Nigam Show builds its presence in the long-form conversation space, its choice of guests from different backgrounds is beginning to shape the programme’s identity.</p>
<p>The Rajan Yadav episode also points towards another possible signature for the show — a hosting format where the interviewer facilitates the conversation without necessarily becoming its centre of attention.</p>
<p>It is an approach that requires a certain confidence. In an increasingly personality-driven podcast ecosystem, allowing the guest to walk away with the episode’s biggest moments can sometimes be the more effective choice.</p>
<p>With Rajan Yadav, Saurabh Nigam appears content to do precisely that.</p>
<p>The stories belong to Rajan Yadav. The questions belong to Saurabh Nigam. And for much of the episode, the spotlight remains exactly where it should — on the guest and the story.</p>`,
    category: "bollywood",
    imageUrl: "/images/articles/rajan-yadav-horror-stories-saurabh-nigam-show.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Horror storyteller Rajan Yadav in conversation with host Saurabh Nigam across studio microphones on The Saurabh Nigam Show",
    imageCredit: "The Fista",
    author: "The Fista Desk",
    publishedAt: "Oct 30, 2026",
    readTime: "3 min read",
    isFeatured: true,
    isTrending: true
  },
  // 2 — Saurabh Nigam Show podcast debut (Featured Hero — Oct 23, 2026)
  {
    id: "saurabh-nigam-show-podcast-debut",
    title: "Saurabh Nigam Makes His Podcast Debut, Lets Sensitivity Do the Talking",
    excerpt: "The Saurabh Nigam Show opens with Mahamandaleshwar Vaishnavi Maa, with the host’s measured interviewing style emerging as a talking point.",
    content: `<p><strong>New Delhi:</strong> India’s podcast space has a new entrant. The Saurabh Nigam Show, recently launched on YouTube, has begun its journey with Mahamandaleshwar Vaishnavi Maa as its first guest—and the debut appears to be as much about the host’s approach to conversation as the personality sitting across from him.</p>
<p>For a first episode, Nigam chose a subject that required a careful balance of curiosity and sensitivity. The conversation touches upon Vaishnavi Maa’s spiritual journey, identity, personal experiences and the realities surrounding the kinnar community.</p>
<p>What catches attention, however, is Saurabh Nigam’s restrained approach as a host.</p>
<p>Instead of turning sensitive subjects into provocative questions or repeatedly interrupting his guest in search of a viral moment, Nigam allows the conversation to breathe. His questions are direct, but rarely intrusive, while his follow-ups appear to emerge naturally from what his guest has just said.</p>
<p>In an increasingly crowded podcast landscape, where louder questions and shorter viral clips can often dictate conversations, Nigam seems to be experimenting with a simpler formula: ask, listen and let the guest tell the story.</p>
<p>That approach becomes particularly important with Vaishnavi Maa. Conversations around the kinnar community have often been framed through stereotypes or sensationalism. Here, the attempt is to bring the individual behind the identity to the forefront, allowing her to speak about spirituality, struggles, beliefs and lived experiences in her own words.</p>
<p>Interestingly, Nigam does not appear eager to establish himself as the most important person in the frame. There are moments when he steps back, listens and lets his guest take over—a seemingly small quality that can make a significant difference in long-form conversations.</p>
<p>His strength, at least from the first episode, may lie less in asking the loudest question and more in knowing how to ask a difficult one without making the guest uncomfortable.</p>
<p>For a debut, beginning with Mahamandaleshwar Vaishnavi Maa was an unconventional choice. It also offers an early glimpse into the direction Nigam may be planning for the show—bringing personalities from different worlds into conversations that can move between serious, emotional and lighter moments without following a predictable template.</p>
<p>With The Saurabh Nigam Show, Nigam is entering a space already populated by several established names. Building an audience will inevitably take time, but the first episode establishes one element that could help the show develop its own identity: the host appears interested in understanding his guest rather than simply extracting headlines from them.</p>
<p>And in the age of viral podcasting, perhaps knowing when to listen could prove just as valuable as knowing what to ask.</p>`,
    category: "bollywood",
    imageUrl: "/images/articles/saurabh-nigam-show-podcast-debut.jpg",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Saurabh Nigam in conversation with Mahamandaleshwar Vaishnavi Maa on the debut episode of The Saurabh Nigam Show",
    imageCredit: "The Fista",
    author: "The Fista Desk",
    publishedAt: "Oct 23, 2026",
    readTime: "4 min read",
    isFeatured: true,
    isTrending: true
  },
  // 3 — Asia Cup Final (Featured Hero — Sep 11, 2026)
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
    imageUrl: "/images/articles/india-asia-cup-2026-final-win.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Dubai International Cricket Stadium, venue of the Asia Cup final",
    imageCredit: "Dave Morton / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Dubai_Stadium_2019.jpg",
    author: "Rajesh Sharma",
    publishedAt: "Sep 11, 2026",
    readTime: "5 min read",
    isFeatured: true,
    isTrending: true
  },
  // 4 — GST 2.0 (Featured — Sep 11)
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
    imageUrl: "/images/articles/gst-2-simplified-slabs-rollout.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "A neighbourhood super mart in Vasai, Mumbai, with sacks of rice and groceries stacked at the entrance",
    imageCredit: "Renzilde / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Kirana_shop.jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    author: "Amit Verma",
    publishedAt: "Sep 11, 2026",
    readTime: "4 min read",
    isFeatured: true,
    isTrending: true
  },
  // 5 — ISRO Gaganyaan (Sep 11)
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
    imageUrl: "/images/articles/isro-gaganyaan-crewed-window-confirmed.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Hot test of the System Demonstration Model of the Gaganyaan service module propulsion system at an ISRO test bed",
    imageCredit: "ISRO / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:System_Demonstration_Model_(SDM)_at_test_bed.jpg",
    imageLicenseUrl: "https://www.data.gov.in/Godl",
    author: "Dr. Neha Kulkarni",
    publishedAt: "Sep 11, 2026",
    readTime: "5 min read",
    isTrending: true
  },
  // 6 — Monsoon Session concludes (Sep 10)
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
    imageUrl: "/images/articles/monsoon-session-concludes-2026.jpg",
    imageWidth: 1385,
    imageHeight: 779,
    imageAlt: "The Lok Sabha chamber in the new Parliament building, New Delhi",
    imageCredit: "Ministry of Parliamentary Affairs / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:View_of_Lok_Sabha_chamber_in_the_New_Parliament_building,_New_Delhi.jpg",
    imageLicenseUrl: "https://www.data.gov.in/Godl",
    author: "Priya Nair",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 7 — RBI holds repo rate (Sep 10)
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
    imageUrl: "/images/articles/rbi-holds-repo-rate-growth-outlook.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Indian ₹100 and ₹2,000 rupee banknotes",
    imageCredit: "Monito / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_100_and_2000_rupee_notes_(32190943222).jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    author: "Amit Verma",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 8 — India-EU FTA (Sep 9)
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
    imageUrl: "/images/articles/india-eu-fta-ratified-exports.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Container cranes at Jawaharlal Nehru Port (JNPT), India’s largest container port, near Mumbai",
    imageCredit: "Ccmarathe / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:JNPT_Port_container_handling.jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    author: "Sanjay Mehta",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 9 — Women's cricket (Sep 10)
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
    imageUrl: "/images/articles/india-women-series-win-australia.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Players during a match at the Women’s Cricket World Cup",
    imageCredit: "Robert Drummond / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:2017_Women%27s_Cricket_World_Cup_IMG_2716_(36007539511).jpg",
    imageLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    author: "Rajesh Sharma",
    publishedAt: "Sep 10, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 10 — Health: dengue / monsoon health (Sep 9)
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
    imageUrl: "/images/articles/dengue-surveillance-monsoon-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Magnified image of an Aedes aegypti mosquito, the species that spreads dengue, feeding on human skin",
    imageCredit: "NIAID / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Magnified_image_of_Aedes_aegypti_mosquito_taking_a_blood_meal.jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    author: "Dr. Meera Iyer",
    publishedAt: "Sep 9, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 11 — Bollywood box office (Sep 10)
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
    imageUrl: "/images/articles/festive-box-office-2026-lineup.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Alka Talkies, a single-screen cinema on Lal Bahadur Shastri Road in Pune",
    imageCredit: "DesiBoy101 / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Alka_Talkies_-_an_iconic_single_screen_cinema_in_Pune.jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    author: "Karan Malhotra",
    publishedAt: "Sep 10, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 12 — Technology: India AI mission (Sep 9)
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
    imageUrl: "/images/articles/india-ai-mission-compute-expansion.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Server racks with network cabling inside a data centre",
    imageCredit: "Unsplash",
    imageSourceUrl: "https://unsplash.com/",
    imageLicenseUrl: "https://unsplash.com/license",
    author: "Dr. Neha Kulkarni",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read",
    isTrending: true
  },
  // 13 — Politics: state polls (Sep 8)
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
    imageUrl: "/images/articles/assembly-elections-schedule-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Polling officers check the voters’ list alongside electronic voting machines (EVMs) before an Assembly election",
    imageCredit: "Election Commission of India / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Polling_officers_going_through_the_voters_list_collected_with_the_Electronic_Voting_Machines_(EVM%E2%80%99s)_and_other_necessary_imputes_required_for_the_Assembly_Election,_in_Assam_on_April_03,_2011.jpg",
    imageLicenseUrl: "https://www.data.gov.in/Godl",
    author: "Priya Nair",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read"
  },
  // 14 — Education: NEP / exam reform (Sep 8)
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
    imageUrl: "/images/articles/board-exam-twice-a-year-reform.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Students and parents outside an examination centre in Howrah, West Bengal",
    imageCredit: "Biswarup Ganguly / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:West_Bengal_Joint_Entrance_Examination_-_Howrah_2011-05-22_00280.jpg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    author: "Anjali Desai",
    publishedAt: "Sep 8, 2026",
    readTime: "3 min read",
    isTrending: true
  },
  // 15 — Health: heart health study (Sep 8)
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
    imageUrl: "/images/articles/indian-heart-health-study-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "People on a morning walk in Lodhi Garden, New Delhi",
    imageCredit: "Ravi Kumar / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Walk_In_The_Park_(76163825).jpeg",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    author: "Dr. Meera Iyer",
    publishedAt: "Sep 8, 2026",
    readTime: "4 min read"
  },
  // 16 — Cricket: Test squad / Australia tour (Sep 8)
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
    imageUrl: "/images/articles/india-squad-australia-tour-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Spectators fill the stands at Wankhede Stadium, Mumbai, during a match",
    imageCredit: "Unsplash",
    imageSourceUrl: "https://unsplash.com/",
    imageLicenseUrl: "https://unsplash.com/license",
    author: "Rajesh Sharma",
    publishedAt: "Sep 8, 2026",
    readTime: "3 min read"
  },
  // 17 — Technology: EV / battery (Sep 9)
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
    imageUrl: "/images/articles/india-ev-battery-gigafactory-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "Cylindrical 18650 and 21700 lithium-ion battery cells of the kind used in electric vehicles",
    imageCredit: "Sevenethics / Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:18650_and_21700_lithium_ion_battery_cell.jpg",
    imageLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    author: "Sanjay Mehta",
    publishedAt: "Sep 9, 2026",
    readTime: "4 min read"
  },
  // 18 — Bollywood: OTT / streaming (Sep 8)
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
    imageUrl: "/images/articles/ott-regional-content-surge-2026.jpg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "A viewer points a remote at a television showing a streaming service",
    imageCredit: "Unsplash",
    imageSourceUrl: "https://unsplash.com/",
    imageLicenseUrl: "https://unsplash.com/license",
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
const getTrendingArticles = () => {
  return articles.filter((article) => article.isTrending);
};
const getFeaturedArticles = () => {
  return articles.filter((article) => article.isFeatured);
};
const getActiveCategories = () => {
  return categories.filter((c) => articles.some((a) => a.category === c.id));
};
const getCategory = (id) => {
  return categories.find((c) => c.id === id);
};
const getLatestArticles = () => {
  return [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
};
const searchArticles = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getLatestArticles().filter(
    (a) => `${a.title} ${a.excerpt} ${a.category} ${a.author}`.toLowerCase().includes(q)
  );
};
const breakingHeadlines = [
  "India Clinch Asia Cup 2026 Title with Nerveless Chase in the Dubai Final",
  "GST 2.0 Goes Live: Simplified Two-Slab Structure Takes Effect Nationwide",
  "ISRO Confirms Gaganyaan Crewed Flight Window After Successful Systems Review",
  "RBI Holds Repo Rate and Lifts Growth Outlook as Inflation Stays Benign",
  "India–EU Free Trade Agreement Clears Ratification, Set to Boost Exports",
  "India Expands National AI Compute Grid, Opens Access for Startups"
];
const deskOrder$1 = ["News", "World", "Business", "Science & Tech", "Sport", "Culture"];
function groupByDesk(sections) {
  return deskOrder$1.map((desk) => ({ desk, sections: sections.filter((s) => s.desk === desk) })).filter((group) => group.sections.length > 0);
}
function SectionLinks({ sections, className = "" }) {
  const linkClass = ({ isActive }) => `relative shrink-0 px-3 py-2.5 text-[15px] whitespace-nowrap transition-colors ${isActive ? "font-bold text-secondary after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:bg-primary" : "text-neutral-700 hover:text-primary"}`;
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center overflow-x-auto scrollbar-hide ${className}`, children: [
    /* @__PURE__ */ jsx(NavLink, { to: "/", end: true, className: linkClass, children: "Home" }),
    sections.map((cat) => /* @__PURE__ */ jsx(NavLink, { to: `/category/${cat.slug}`, className: linkClass, children: cat.name }, cat.slug))
  ] });
}
function SearchPanel({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const results = searchArticles(query).slice(0, 8);
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[70] bg-white/98 backdrop-blur-sm overflow-y-auto fade-in", role: "dialog", "aria-label": "Search", children: /* @__PURE__ */ jsxs("div", { className: "container-page max-w-3xl py-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("button", { onClick: onClose, "aria-label": "Close search", className: "p-2 hover:bg-neutral-100", children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) }) }),
    /* @__PURE__ */ jsx("label", { htmlFor: "site-search", className: "kicker", children: "Search The Fista" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: "site-search",
        ref: inputRef,
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Politics, cricket, markets…",
        className: "w-full mt-3 pb-3 text-[1.75rem] sm:text-[2.25rem] font-bold border-b-2 border-secondary bg-transparent focus:outline-none placeholder-neutral-300"
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: "mt-4 divide-y divide-neutral-200", children: [
      results.map((a) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/article/${a.id}`, onClick: onClose, className: "story-link group block py-4", children: [
        /* @__PURE__ */ jsx("span", { className: "kicker", children: a.category }),
        /* @__PURE__ */ jsx("span", { className: "headline-md block mt-1.5", children: a.title }),
        /* @__PURE__ */ jsx("span", { className: "meta block mt-1", children: a.publishedAt })
      ] }) }, a.id)),
      query.trim() && results.length === 0 && /* @__PURE__ */ jsxs("li", { className: "py-6 text-neutral-500 italic", children: [
        "No stories match “",
        query,
        "”."
      ] })
    ] })
  ] }) });
}
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showCompact, setShowCompact] = useState(false);
  const [breakingIdx, setBreakingIdx] = useState(0);
  const location = useLocation();
  const sections = getActiveCategories();
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  useEffect(() => {
    const onScroll = () => setShowCompact(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setBreakingIdx((i) => (i + 1) % breakingHeadlines.length), 5e3);
    return () => clearInterval(id);
  }, []);
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isSearchOpen ? "hidden" : "";
  }, [isMenuOpen, isSearchOpen]);
  const iconButton = "p-2 text-secondary hover:bg-neutral-100 transition-colors";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center justify-between h-9 text-[13px]", children: [
        /* @__PURE__ */ jsx("span", { className: "text-neutral-600", suppressHydrationWarning: true, children: today }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsx("a", { href: "#newsletter", className: "hidden sm:inline text-neutral-600 hover:text-primary", children: "Newsletters" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-neutral-600", children: "India Edition" }),
          /* @__PURE__ */ jsx("a", { href: "#newsletter", className: "font-bold text-primary hover:text-primary-dark", children: "Subscribe" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4 lg:py-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("button", { "aria-label": "Open sections menu", onClick: () => setIsMenuOpen(true), className: iconButton, children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("button", { "aria-label": "Search", onClick: () => setIsSearchOpen(true), className: `${iconButton} hidden sm:block`, children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "justify-self-center text-center", "aria-label": "The Fista — Home", children: [
          /* @__PURE__ */ jsx("img", { src: "/fistaa.png", alt: "The Fista", width: 810, height: 360, className: "h-12 sm:h-16 lg:h-20 w-auto mx-auto" }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:block text-[13px] italic text-neutral-500 -mt-1", children: "News, analysis and opinion from India and the world" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 justify-self-end", children: [
          /* @__PURE__ */ jsx("button", { "aria-label": "Search", onClick: () => setIsSearchOpen(true), className: `${iconButton} sm:hidden`, children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#newsletter", className: "hidden sm:inline-flex btn-primary py-2 px-4 text-[14px]", children: "Sign up" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "Sections", className: "border-y border-secondary", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsx(SectionLinks, { sections, className: "lg:justify-center -mx-3" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "border-b border-neutral-200", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center gap-3 py-2.5 text-[15px]", children: [
        /* @__PURE__ */ jsxs("span", { className: "live-badge shrink-0", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white breaking-pulse" }),
          " Breaking"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "truncate text-secondary fade-in", children: breakingHeadlines[breakingIdx] }, breakingIdx)
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-0 inset-x-0 z-50 bg-white border-b border-secondary shadow-[0_2px_12px_-6px_rgba(0,0,0,0.25)] transition-transform duration-300 ${showCompact ? "translate-y-0" : "-translate-y-full"}`,
        "aria-hidden": !showCompact,
        inert: !showCompact,
        children: /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center gap-3 h-12", children: [
          /* @__PURE__ */ jsx("button", { "aria-label": "Open sections menu", onClick: () => setIsMenuOpen(true), className: iconButton, children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/", className: "shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/fistaa.png", alt: "The Fista", width: 810, height: 360, className: "h-8 w-auto" }) }),
          /* @__PURE__ */ jsx(SectionLinks, { sections, className: "flex-1 hidden md:flex" }),
          /* @__PURE__ */ jsx("button", { "aria-label": "Search", onClick: () => setIsSearchOpen(true), className: `${iconButton} ml-auto md:ml-0`, children: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" }) })
        ] })
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60]", role: "dialog", "aria-label": "Sections", children: [
      /* @__PURE__ */ jsx("button", { "aria-label": "Close menu", className: "absolute inset-0 bg-black/40 fade-in", onClick: () => setIsMenuOpen(false) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 w-[86%] max-w-sm bg-white overflow-y-auto shadow-2xl fade-in", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 h-14 border-b border-secondary", children: [
          /* @__PURE__ */ jsx("img", { src: "/fistaa.png", alt: "The Fista", width: 810, height: 360, className: "h-8 w-auto" }),
          /* @__PURE__ */ jsx("button", { "aria-label": "Close menu", onClick: () => setIsMenuOpen(false), className: iconButton, children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center justify-between py-3 text-[1.15rem] font-bold border-b border-neutral-200", children: [
            "Home ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-neutral-400" })
          ] }),
          groupByDesk(sections).map(({ desk, sections: deskSections }) => /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx("p", { className: "kicker text-neutral-500", children: desk }),
            /* @__PURE__ */ jsx("ul", { className: "mt-1", children: deskSections.map((cat) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/category/${cat.slug}`,
                className: `flex items-center justify-between py-2.5 text-[1.1rem] border-b border-neutral-200 ${location.pathname === `/category/${cat.slug}` ? "font-bold text-primary" : "text-secondary hover:text-primary"}`,
                children: [
                  cat.name,
                  " ",
                  /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-neutral-400" })
                ]
              }
            ) }, cat.slug)) })
          ] }, desk)),
          /* @__PURE__ */ jsx("a", { href: "#newsletter", onClick: () => setIsMenuOpen(false), className: "btn-primary w-full mt-8", children: "Sign up for newsletters" })
        ] })
      ] })
    ] }),
    isSearchOpen && /* @__PURE__ */ jsx(SearchPanel, { onClose: closeSearch })
  ] });
}
const deskOrder = ["News", "World", "Business", "Science & Tech", "Sport", "Culture"];
function Footer() {
  const sections = getActiveCategories();
  const desks = deskOrder.map((desk) => ({ desk, sections: sections.filter((s) => s.desk === desk) })).filter((d) => d.sections.length > 0);
  return /* @__PURE__ */ jsxs("footer", { className: "mt-16", children: [
    /* @__PURE__ */ jsx("div", { id: "newsletter", className: "bg-paper border-t border-neutral-200 scroll-mt-16", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-10 lg:py-12 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "kicker", children: "The Morning Briefing" }),
        /* @__PURE__ */ jsx("h2", { className: "text-[1.9rem] sm:text-[2.3rem] font-bold leading-[1.1] mt-3", children: "The stories that matter, explained — before your first cup of chai." }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-[1.05rem] mt-2", children: "A free daily newsletter from The Fista newsroom. Unsubscribe any time." })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "lg:col-span-5 flex flex-col sm:flex-row gap-2", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            placeholder: "Your email address",
            "aria-label": "Email address",
            className: "flex-1 min-w-0 px-4 py-3 bg-white border border-neutral-300 text-[16px] placeholder-neutral-400 focus:outline-none focus:border-secondary"
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary py-3 whitespace-nowrap", children: "Sign up" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page pt-10 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "double-rule pt-8 grid gap-8 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "The Fista — Home", children: /* @__PURE__ */ jsx("img", { src: "/fistaa.png", alt: "The Fista", width: 810, height: 360, className: "h-14 w-auto -ml-2" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-[15px] leading-relaxed mt-3 max-w-xs", children: "Independent reporting and analysis on politics, the world, business, science, sport and culture." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mt-4 -ml-2", children: [
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "X (Twitter)" },
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "YouTube" }
          ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsx("a", { href: "#", "aria-label": label, className: "p-2 text-neutral-600 hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-[18px] h-[18px]" }) }, label)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8", children: desks.map(({ desk, sections: deskSections }) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "kicker text-secondary", children: desk }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: deskSections.map((cat) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/category/${cat.slug}`, className: "text-[15px] text-neutral-700 hover:text-primary", children: cat.name }) }, cat.slug)) })
        ] }, desk)) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "kicker text-secondary", children: "The Fista" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: ["About Us", "Editorial Standards", "Contact", "Careers", "Advertise"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-[15px] text-neutral-700 hover:text-primary", children: item }) }, item)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "kicker text-secondary", children: "Legal" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Corrections"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-[15px] text-neutral-700 hover:text-primary", children: item }) }, item)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rule mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-neutral-500", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " The Fista Media Group. All rights reserved."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "New Delhi, India · info@fista.in" })
      ] })
    ] }) })
  ] });
}
const statusLabel = {
  live: "Live",
  completed: "Result",
  upcoming: "Upcoming"
};
function LiveScoreWidget({ matches }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "section-head mb-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-head-title", children: "Scores" }),
      matches.some((m) => m.status === "live") && /* @__PURE__ */ jsxs("span", { className: "live-badge", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white breaking-pulse" }),
        " Live"
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "divide-y divide-neutral-200", children: matches.map((match) => /* @__PURE__ */ jsxs("li", { className: "py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-3 mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[13px] italic text-neutral-500 truncate", children: match.tournament }),
        /* @__PURE__ */ jsx("span", { className: `text-[11px] font-bold uppercase tracking-[0.1em] shrink-0 ${match.status === "live" ? "text-primary" : "text-neutral-400"}`, children: statusLabel[match.status] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: [match.team1, match.team2].map((team, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[15px]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: team.flag }),
          /* @__PURE__ */ jsx("span", { className: "font-bold truncate", children: team.name })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "tabular-nums shrink-0", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: team.score }),
          team.overs && /* @__PURE__ */ jsx("span", { className: "text-[12px] text-neutral-500 ml-1.5", children: team.overs })
        ] })
      ] }, i)) })
    ] }, match.id)) })
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
const LOCAL_IMAGE = /^(\/images\/articles\/.+)\.jpg$/;
function imageVariant(article, variant) {
  const match = article.imageUrl.match(LOCAL_IMAGE);
  return match ? `${match[1]}-${variant}.jpg` : void 0;
}
function imageSrcSet(article) {
  const small = imageVariant(article, "800");
  if (!small || !article.imageWidth) return void 0;
  return `${small} 800w, ${article.imageUrl} ${article.imageWidth}w`;
}
function Kicker({ article, className = "" }) {
  return /* @__PURE__ */ jsx("span", { className: `kicker ${className}`, children: getCategory(article.category)?.name ?? article.category });
}
function StoryMeta({ article, author = true, readTime = false, className = "" }) {
  return /* @__PURE__ */ jsxs("p", { className: `meta ${className}`, children: [
    author && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "not-italic font-bold text-neutral-700", children: article.author }),
      /* @__PURE__ */ jsx("span", { className: "mx-1.5", children: "·" })
    ] }),
    /* @__PURE__ */ jsx("time", { dateTime: toISODate(article.publishedAt), children: article.publishedAt }),
    readTime && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "mx-1.5", children: "·" }),
      article.readTime
    ] })
  ] });
}
function StoryImage({ article, className = "aspect-[3/2]", priority = false, eager = false, sizes = "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" }) {
  const srcSet = imageSrcSet(article);
  return /* @__PURE__ */ jsx("div", { className: `overflow-hidden bg-neutral-100 ${className}`, children: /* @__PURE__ */ jsx(
    "img",
    {
      src: article.imageUrl,
      srcSet,
      sizes: srcSet ? sizes : void 0,
      alt: article.imageAlt || article.title,
      width: article.imageWidth,
      height: article.imageHeight,
      loading: priority || eager ? "eager" : "lazy",
      decoding: priority ? "sync" : "async",
      fetchPriority: priority ? "high" : void 0,
      className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    }
  ) });
}
function SectionHead({ title, to, as: Tag = "h2" }) {
  return /* @__PURE__ */ jsxs("div", { className: "section-head", children: [
    /* @__PURE__ */ jsx(Tag, { className: "section-head-title", children: to ? /* @__PURE__ */ jsx(Link, { to, className: "hover:text-primary transition-colors", children: title }) : title }),
    to && /* @__PURE__ */ jsxs(Link, { to, className: "text-[13px] font-bold text-neutral-600 hover:text-primary inline-flex items-center gap-0.5 shrink-0", children: [
      "More ",
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function StandardStory({ article, size = "md", excerpt = false, image = true, priority = false, eager = false }) {
  return /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "story-link group block", children: [
    image && /* @__PURE__ */ jsx(StoryImage, { article, priority, eager, className: "aspect-[3/2] mb-3" }),
    /* @__PURE__ */ jsx(Kicker, { article }),
    /* @__PURE__ */ jsx("h3", { className: `headline-${size} mt-2 transition-colors`, children: article.title }),
    excerpt && /* @__PURE__ */ jsx("p", { className: "standfirst mt-2 line-clamp-3", children: article.excerpt }),
    /* @__PURE__ */ jsx(StoryMeta, { article, className: "mt-2" })
  ] });
}
function CompactStory({ article, image = true }) {
  return /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "story-link group flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx(Kicker, { article }),
      /* @__PURE__ */ jsx("h3", { className: "headline-sm mt-1.5 transition-colors", children: article.title }),
      /* @__PURE__ */ jsx(StoryMeta, { article, author: false, className: "mt-1.5" })
    ] }),
    image && /* @__PURE__ */ jsx(StoryImage, { article, sizes: "112px", className: "w-24 sm:w-28 aspect-[3/2] shrink-0" })
  ] });
}
function RankedList({ articles: articles2 }) {
  return /* @__PURE__ */ jsx("ol", { className: "divide-y divide-neutral-200", children: articles2.map((article, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/article/${article.id}`, className: "story-link group flex gap-4 py-3.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[2rem] leading-[0.9] font-bold text-primary w-7 shrink-0 tabular-nums", children: idx + 1 }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "headline-sm transition-colors", children: article.title }),
      /* @__PURE__ */ jsx(StoryMeta, { article, author: false, className: "mt-1" })
    ] })
  ] }) }, article.id)) });
}
function NewsletterBox({ title = "The Morning Briefing", blurb = "The day’s essential stories and analysis, in your inbox before breakfast." }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-paper border-t-[3px] border-secondary p-5", children: [
    /* @__PURE__ */ jsx("p", { className: "kicker", children: "Newsletter" }),
    /* @__PURE__ */ jsx("h3", { className: "text-[1.35rem] font-bold leading-tight mt-2", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-[15px] text-neutral-600 leading-snug mt-1.5 mb-4", children: blurb }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          required: true,
          "aria-label": "Email address",
          placeholder: "Your email address",
          className: "w-full px-3 py-2.5 bg-white border border-neutral-300 text-[15px] placeholder-neutral-400 focus:outline-none focus:border-secondary"
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary w-full", children: "Sign up" })
    ] })
  ] });
}
function buildMetaTags(data) {
  const image = data.image || SITE.defaultImage;
  const ogType = data.ogType || "website";
  const imageType = image.endsWith(".png") ? "image/png" : image.endsWith(".webp") ? "image/webp" : "image/jpeg";
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
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: imageType },
    { property: "og:image:alt", content: data.imageAlt || data.title },
    ...data.imageWidth ? [{ property: "og:image:width", content: String(data.imageWidth) }] : [],
    ...data.imageHeight ? [{ property: "og:image:height", content: String(data.imageHeight) }] : [],
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE.twitter },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: data.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: data.imageAlt || data.title }
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
  if (data.preloadImage) {
    const srcset = data.preloadImageSrcSet ? ` imagesrcset="${escapeHtml(data.preloadImageSrcSet)}" imagesizes="${escapeHtml(data.preloadImageSizes || "100vw")}"` : "";
    parts.push(`<link rel="preload" as="image" href="${escapeHtml(data.preloadImage)}"${srcset} fetchpriority="high" />`);
  }
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
function articleImageNodes(article) {
  const credit = {
    ...article.imageAlt ? { caption: article.imageAlt } : {},
    ...article.imageCredit ? { creditText: article.imageCredit } : {},
    ...article.imageLicenseUrl ? { license: article.imageLicenseUrl } : {},
    ...article.imageSourceUrl ? { acquireLicensePage: article.imageSourceUrl } : {}
  };
  const wide = {
    "@type": "ImageObject",
    url: absoluteImage(article.imageUrl),
    ...article.imageWidth ? { width: article.imageWidth, height: article.imageHeight } : {},
    ...credit
  };
  const extra = ["4x3", "1x1"].flatMap((variant) => {
    const url = imageVariant(article, variant);
    return url ? [{ "@type": "ImageObject", url: absoluteImage(url), ...credit }] : [];
  });
  return [wide, ...extra];
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
    imageAlt: articles2[0]?.imageAlt,
    imageWidth: articles2[0]?.imageWidth,
    imageHeight: articles2[0]?.imageHeight,
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
    image: articleImageNodes(article),
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
    imageAlt: article.imageAlt || article.title,
    imageWidth: article.imageWidth,
    imageHeight: article.imageHeight,
    preloadImage: article.imageUrl,
    preloadImageSrcSet: imageSrcSet(article),
    preloadImageSizes: "(min-width: 1024px) 780px, 100vw",
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
  const latest = getLatestArticles();
  const used = /* @__PURE__ */ new Set();
  const take = (pool, n) => {
    const picked = [];
    for (const a of pool) {
      if (picked.length === n) break;
      if (used.has(a.id)) continue;
      used.add(a.id);
      picked.push(a);
    }
    return picked;
  };
  const featuredPool = [...getFeaturedArticles(), ...latest];
  const [lead] = take(featuredPool, 1);
  const leadRelated = take(latest.filter((a) => a.category === lead.category), 2);
  const [secondary, ...leftText] = take(featuredPool, 3);
  const latestRail = take(latest, 6);
  const topStories = take([...getTrendingArticles(), ...latest], 4);
  const [inDepth] = take(latest, 1);
  const mostRead = getTrendingArticles().slice(0, 5);
  const sectionBlocks = getActiveCategories().map((category) => {
    const inSection = latest.filter((a) => a.category === category.id);
    const ordered = [...inSection.filter((a) => !used.has(a.id)), ...inSection.filter((a) => used.has(a.id))];
    return { category, stories: ordered.slice(0, 4) };
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...buildHomeSeo() }),
    /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "The Fista — News, analysis and opinion from India and the world" }),
    /* @__PURE__ */ jsx("section", { className: "container-page pt-6 lg:pt-8", "aria-label": "Top news", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 lg:order-2 lg:px-6 pb-6 lg:pb-0", children: [
        /* @__PURE__ */ jsxs(Link, { to: `/article/${lead.id}`, className: "story-link group block", children: [
          /* @__PURE__ */ jsx(StoryImage, { article: lead, priority: true, sizes: "(min-width: 1024px) 560px, 100vw", className: "aspect-[3/2] mb-4" }),
          /* @__PURE__ */ jsx(Kicker, { article: lead }),
          /* @__PURE__ */ jsx("h2", { className: "headline-xl mt-2.5 transition-colors", children: lead.title }),
          /* @__PURE__ */ jsx("p", { className: "standfirst text-[1.15rem] mt-3", children: lead.excerpt }),
          /* @__PURE__ */ jsx(StoryMeta, { article: lead, readTime: true, className: "mt-3" })
        ] }),
        leadRelated.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-5 pt-4 rule grid sm:grid-cols-2 gap-4", children: leadRelated.map((a) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/article/${a.id}`, className: "story-link group block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500", children: "Related" }),
          /* @__PURE__ */ jsx("h3", { className: "headline-sm mt-1 transition-colors", children: a.title })
        ] }) }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 lg:order-1 lg:pr-6 lg:border-r border-neutral-200 border-t lg:border-t-0 pt-5 lg:pt-0 pb-6 lg:pb-0 divide-y divide-neutral-200", children: [
        secondary && /* @__PURE__ */ jsx("div", { className: "pb-5", children: /* @__PURE__ */ jsx(StandardStory, { article: secondary, size: "md", excerpt: true, eager: true }) }),
        leftText.map((a) => /* @__PURE__ */ jsx("div", { className: "py-5 last:pb-0", children: /* @__PURE__ */ jsx(StandardStory, { article: a, size: "sm", image: false, excerpt: true }) }, a.id))
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "lg:col-span-3 lg:order-3 lg:pl-6 lg:border-l border-neutral-200 border-t lg:border-t-0 pt-5 lg:pt-0", "aria-label": "Latest", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary breaking-pulse" }),
          /* @__PURE__ */ jsx("h2", { className: "text-[1.15rem] font-bold", children: "The Latest" })
        ] }),
        /* @__PURE__ */ jsx("ol", { className: "relative border-l border-neutral-200 ml-1 mt-3", children: latestRail.map((a) => /* @__PURE__ */ jsxs("li", { className: "relative pl-4 pb-4 last:pb-0", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-white border-2 border-primary" }),
          /* @__PURE__ */ jsxs(Link, { to: `/article/${a.id}`, className: "story-link group block", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-[12px] italic text-neutral-500", children: [
              a.publishedAt,
              " · ",
              /* @__PURE__ */ jsx("span", { className: "not-italic font-bold uppercase tracking-[0.1em] text-[10.5px] text-primary", children: a.category })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "headline-sm text-[1rem] mt-0.5 transition-colors", children: a.title })
          ] })
        ] }, a.id)) })
      ] })
    ] }) }),
    topStories.length > 0 && /* @__PURE__ */ jsxs("section", { className: "container-page mt-10 lg:mt-12", "aria-label": "Top stories", children: [
      /* @__PURE__ */ jsx(SectionHead, { title: "Top Stories" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8", children: topStories.map((a) => /* @__PURE__ */ jsx(StandardStory, { article: a, size: "sm", eager: true }, a.id)) })
    ] }),
    inDepth && /* @__PURE__ */ jsx("section", { className: "bg-paper mt-12 lg:mt-14", "aria-label": "In depth", children: /* @__PURE__ */ jsx("div", { className: "container-page py-10 lg:py-14", children: /* @__PURE__ */ jsxs(Link, { to: `/article/${inDepth.id}`, className: "story-link group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center", children: [
      /* @__PURE__ */ jsx(StoryImage, { article: inDepth, sizes: "(min-width: 1024px) 680px, 100vw", className: "lg:col-span-7 aspect-[16/10]" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxs("p", { className: "kicker", children: [
          "In Depth · ",
          /* @__PURE__ */ jsx("span", { className: "text-neutral-600", children: inDepth.category })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "headline-xl mt-3 transition-colors", children: inDepth.title }),
        /* @__PURE__ */ jsx("p", { className: "standfirst text-[1.15rem] mt-4", children: inDepth.excerpt }),
        /* @__PURE__ */ jsx(StoryMeta, { article: inDepth, readTime: true, className: "mt-4" }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 mt-5 font-bold text-[15px] border-b-2 border-secondary pb-0.5 group-hover:text-primary group-hover:border-primary transition-colors", children: [
          "Read the full story ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container-page mt-12 lg:mt-14", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 space-y-12", children: sectionBlocks.map(({ category, stories }) => {
        const [first, ...rest] = stories;
        if (!first) return null;
        return /* @__PURE__ */ jsxs("section", { "aria-label": category.name, children: [
          /* @__PURE__ */ jsx(SectionHead, { title: category.name, to: `/category/${category.slug}` }),
          rest.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(StandardStory, { article: first, size: "md", excerpt: true }),
            /* @__PURE__ */ jsx("ul", { className: "divide-y divide-neutral-200 -mt-4 sm:mt-0", children: rest.map((a) => /* @__PURE__ */ jsx("li", { className: "py-4 sm:first:pt-0", children: /* @__PURE__ */ jsx(CompactStory, { article: a }) }, a.id)) })
          ] }) : (
            // A lone story sits side by side so it doesn't balloon to full width.
            /* @__PURE__ */ jsxs(Link, { to: `/article/${first.id}`, className: "story-link group grid gap-5 sm:grid-cols-2 items-center", children: [
              /* @__PURE__ */ jsx(StoryImage, { article: first }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Kicker, { article: first }),
                /* @__PURE__ */ jsx("h3", { className: "headline-md mt-2 transition-colors", children: first.title }),
                /* @__PURE__ */ jsx("p", { className: "standfirst mt-2 line-clamp-3", children: first.excerpt }),
                /* @__PURE__ */ jsx(StoryMeta, { article: first, className: "mt-2" })
              ] })
            ] })
          )
        ] }, category.id);
      }) }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", "aria-label": "Most read and scores", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-16 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionHead, { title: "Most Read" }),
          /* @__PURE__ */ jsx("div", { className: "-mt-3.5", children: /* @__PURE__ */ jsx(RankedList, { articles: mostRead }) })
        ] }),
        /* @__PURE__ */ jsx(LiveScoreWidget, { matches: liveMatches }),
        /* @__PURE__ */ jsx(NewsletterBox, {})
      ] }) })
    ] }) })
  ] });
}
function NotFoundPage() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "container-page max-w-2xl py-20 lg:py-28 text-center", children: [
    /* @__PURE__ */ jsx(Seo, { ...buildNotFoundSeo(pathname) }),
    /* @__PURE__ */ jsx("p", { className: "kicker", children: "Error 404" }),
    /* @__PURE__ */ jsx("h1", { className: "text-[2.5rem] sm:text-[3.25rem] font-bold leading-[1.05] mt-4", children: "We couldn’t find that page." }),
    /* @__PURE__ */ jsx("p", { className: "text-[1.15rem] text-neutral-600 italic mt-4 mb-8", children: "It may have been moved, or the link may be out of date." }),
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-primary", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
      "Back to the front page"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "double-rule mt-12 pt-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[13px] italic text-neutral-500 mb-3", children: "Or browse a section" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: getActiveCategories().map((cat) => /* @__PURE__ */ jsx(
        Link,
        {
          to: `/category/${cat.slug}`,
          className: "px-3.5 py-1.5 text-[15px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors",
          children: cat.name
        },
        cat.id
      )) })
    ] })
  ] });
}
function CategoryPage() {
  const { categorySlug } = useParams();
  const sections = getActiveCategories();
  const category = sections.find((c) => c.slug === categorySlug);
  if (!category) {
    return /* @__PURE__ */ jsx(NotFoundPage, {});
  }
  const categoryArticles = getLatestArticles().filter((a) => a.category === category.id);
  const [lead, ...others] = categoryArticles;
  const secondary = others.slice(0, 2);
  const stream = others.slice(2);
  const deskSiblings = sections.filter((c) => c.desk === category.desk && c.id !== category.id);
  const mostRead = getTrendingArticles().filter((a) => a.category !== category.id).slice(0, 5);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...buildCategorySeo(category, categoryArticles) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page pt-8 lg:pt-10", children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-2 text-[13px]", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-500 hover:text-primary", children: "Home" }),
        /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-neutral-500", children: category.desk })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 pb-5 border-b-[3px] border-secondary flex flex-col md:flex-row md:items-end md:justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[2.75rem] sm:text-[3.5rem] font-bold leading-none tracking-[-0.01em]", children: category.name }),
          /* @__PURE__ */ jsx("p", { className: "text-[1.1rem] text-neutral-600 italic mt-2", children: category.description })
        ] }),
        deskSiblings.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[15px]", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-neutral-400 italic", children: [
            "Also in ",
            category.desk,
            ":"
          ] }),
          deskSiblings.map((c) => /* @__PURE__ */ jsx(NavLink, { to: `/category/${c.slug}`, className: "font-bold hover:text-primary", children: c.name }, c.slug))
        ] })
      ] })
    ] }),
    lead && /* @__PURE__ */ jsx("section", { className: "container-page mt-8", "aria-label": `Top ${category.name} stories`, children: /* @__PURE__ */ jsxs("div", { className: `grid gap-8 ${secondary.length ? "lg:grid-cols-12" : ""}`, children: [
      /* @__PURE__ */ jsxs(Link, { to: `/article/${lead.id}`, className: `story-link group grid gap-5 md:grid-cols-5 items-start ${secondary.length ? "lg:col-span-8" : ""}`, children: [
        /* @__PURE__ */ jsx(StoryImage, { article: lead, priority: true, sizes: "(min-width: 1024px) 480px, (min-width: 768px) 60vw, 100vw", className: "md:col-span-3 aspect-[3/2]" }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx(Kicker, { article: lead }),
          /* @__PURE__ */ jsx("h2", { className: "headline-lg mt-2.5 transition-colors", children: lead.title }),
          /* @__PURE__ */ jsx("p", { className: "standfirst mt-3", children: lead.excerpt }),
          /* @__PURE__ */ jsx(StoryMeta, { article: lead, readTime: true, className: "mt-3" })
        ] })
      ] }),
      secondary.length > 0 && /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 lg:pl-8 lg:border-l border-neutral-200 grid sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 lg:divide-y divide-neutral-200", children: secondary.map((a) => /* @__PURE__ */ jsx("div", { className: "lg:py-5 lg:first:pt-0", children: /* @__PURE__ */ jsx(StandardStory, { article: a, size: "sm", image: false, excerpt: true }) }, a.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container-page mt-12", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsx(SectionHead, { title: `Latest in ${category.name}` }),
        stream.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "divide-y divide-neutral-200 -mt-1", children: stream.map((a) => /* @__PURE__ */ jsx("li", { className: "py-5 first:pt-0", children: /* @__PURE__ */ jsxs(Link, { to: `/article/${a.id}`, className: "story-link group grid grid-cols-[1fr_auto] sm:grid-cols-[8rem_1fr_auto] gap-4 sm:gap-6 items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "hidden sm:block meta not-italic text-[13px] pt-0.5", children: a.publishedAt }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "headline-md transition-colors", children: a.title }),
            /* @__PURE__ */ jsx("p", { className: "standfirst text-[1rem] mt-1.5 line-clamp-2", children: a.excerpt }),
            /* @__PURE__ */ jsx(StoryMeta, { article: a, className: "mt-1.5 sm:hidden" }),
            /* @__PURE__ */ jsxs("p", { className: "meta mt-1.5 hidden sm:block", children: [
              "By ",
              a.author
            ] })
          ] }),
          /* @__PURE__ */ jsx(StoryImage, { article: a, sizes: "176px", className: "w-28 sm:w-44 aspect-[3/2]" })
        ] }) }, a.id)) }) : /* @__PURE__ */ jsxs("p", { className: "text-neutral-500 italic -mt-1", children: [
          "You're all caught up on ",
          category.name,
          " — the stories above are the latest."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
          /* @__PURE__ */ jsx(SectionHead, { title: "Explore other sections", as: "h3" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 -mt-1", children: sections.filter((c) => c.id !== category.id).map((c) => /* @__PURE__ */ jsx(Link, { to: `/category/${c.slug}`, className: "px-3.5 py-1.5 text-[15px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors", children: c.name }, c.slug)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", "aria-label": "Most read", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-16 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionHead, { title: "Most Read", as: "h3" }),
          /* @__PURE__ */ jsx("div", { className: "-mt-3.5", children: /* @__PURE__ */ jsx(RankedList, { articles: mostRead }) })
        ] }),
        /* @__PURE__ */ jsx(NewsletterBox, { blurb: `The best of ${category.name.toLowerCase()} and the day’s essential stories, in your inbox every morning.` })
      ] }) })
    ] }) })
  ] });
}
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed top-0 inset-x-0 h-[3px] z-[55] pointer-events-none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary origin-left", style: { transform: `scaleX(${progress})` } }) });
}
function initials(name) {
  return name.replace(/^Dr\.\s*/, "").split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
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
    if (platform === "email") {
      window.location.assign(shareLinks.email);
      return;
    }
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };
  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);
  const mostRead = getTrendingArticles().filter((a) => a.id !== article.id).slice(0, 5);
  const currentIdx = articles.findIndex((a) => a.id === articleId);
  const prevArticle = currentIdx > 0 ? articles[currentIdx - 1] : null;
  const nextArticle = currentIdx < articles.length - 1 ? articles[currentIdx + 1] : null;
  const imageCredit = article.imageCredit || "The Fista";
  const heroSrcSet = imageSrcSet(article);
  const sectionName = category?.name || article.category;
  const sectionPath = `/category/${category?.slug || article.category}`;
  const shareButtons = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
    [
      { platform: "facebook", icon: Facebook, label: "Facebook" },
      { platform: "twitter", icon: Twitter, label: "X (Twitter)" },
      { platform: "whatsapp", icon: MessageCircle, label: "WhatsApp" },
      { platform: "linkedin", icon: Linkedin, label: "LinkedIn" },
      { platform: "email", icon: Mail, label: "email" }
    ].map(({ platform, icon: Icon, label }) => /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": `Share on ${label}`,
        onClick: () => handleShare(platform),
        className: "w-9 h-9 border border-neutral-300 text-neutral-700 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center transition-colors",
        children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
      },
      platform
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Copy link",
        onClick: copyToClipboard,
        className: `w-9 h-9 border flex items-center justify-center transition-colors ${copySuccess ? "border-green-700 bg-green-700 text-white" : "border-neutral-300 text-neutral-700 hover:border-secondary hover:bg-secondary hover:text-white"}`,
        children: copySuccess ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Link2, { className: "w-4 h-4" })
      }
    )
  ] });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Seo, { ...buildArticleSeo(article, category) }),
    /* @__PURE__ */ jsx(ReadingProgress, {}),
    /* @__PURE__ */ jsx("div", { className: "container-page pt-6 lg:pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("article", { className: "lg:col-span-8 min-w-0", children: [
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-2 text-[13px]", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-neutral-500 hover:text-primary", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: sectionPath, className: "kicker hover:text-primary-dark", children: sectionName })
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold text-secondary leading-[1.08] tracking-[-0.01em] text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem]", children: article.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[1.25rem] sm:text-[1.35rem] leading-[1.45] text-neutral-600 mt-4", children: article.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 py-4 border-y border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-11 h-11 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-[15px] shrink-0", "aria-hidden": "true", children: initials(article.author) }),
              /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-[15px]", children: [
                  "By ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: article.author })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "meta mt-1", children: [
                  /* @__PURE__ */ jsx("time", { dateTime: toISODate(article.publishedAt), children: article.publishedAt }),
                  /* @__PURE__ */ jsx("span", { className: "mx-1.5", children: "·" }),
                  article.readTime
                ] })
              ] })
            ] }),
            shareButtons
          ] })
        ] }),
        /* @__PURE__ */ jsxs("figure", { className: "mt-6 -mx-4 sm:mx-0", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] bg-neutral-100 overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: article.imageUrl,
              srcSet: heroSrcSet,
              sizes: heroSrcSet ? "(min-width: 1024px) 780px, 100vw" : void 0,
              alt: article.imageAlt || article.title,
              width: article.imageWidth,
              height: article.imageHeight,
              className: "w-full h-full object-cover",
              fetchPriority: "high",
              decoding: "sync"
            }
          ) }),
          /* @__PURE__ */ jsxs("figcaption", { className: "px-4 sm:px-0 mt-2 text-[13px] text-neutral-500 leading-snug", children: [
            article.imageAlt && /* @__PURE__ */ jsxs("span", { className: "text-neutral-700", children: [
              article.imageAlt,
              ". "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "italic", children: [
              "Photograph:",
              " ",
              article.imageSourceUrl ? /* @__PURE__ */ jsx("a", { href: article.imageSourceUrl, target: "_blank", rel: "noopener nofollow", className: "underline decoration-neutral-300 underline-offset-2 hover:text-primary", children: imageCredit }) : imageCredit,
              article.imageLicenseUrl && /* @__PURE__ */ jsxs(Fragment, { children: [
                " ",
                "(",
                /* @__PURE__ */ jsx("a", { href: article.imageLicenseUrl, target: "_blank", rel: "noopener nofollow license", className: "underline decoration-neutral-300 underline-offset-2 hover:text-primary", children: "licence" }),
                ")"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "article-prose max-w-[680px] mt-8",
            dangerouslySetInnerHTML: { __html: article.content }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "max-w-[680px] mt-10 pt-5 border-t-[3px] border-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-wrap gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[13px] italic text-neutral-500 mr-1", children: "Topics" }),
            /* @__PURE__ */ jsx(Link, { to: sectionPath, className: "px-3 py-1 text-[13px] border border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white transition-colors", children: sectionName })
          ] }),
          shareButtons
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-[680px] mt-8 grid sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200", children: [
          prevArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${prevArticle.id}`, className: "story-link group bg-white p-5", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-500 flex items-center gap-1 mb-2", children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
              " Previous"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "headline-sm block transition-colors", children: prevArticle.title })
          ] }) : /* @__PURE__ */ jsx("div", { className: "bg-white hidden sm:block" }),
          nextArticle ? /* @__PURE__ */ jsxs(Link, { to: `/article/${nextArticle.id}`, className: "story-link group bg-white p-5 sm:text-right", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-500 flex items-center gap-1 sm:justify-end mb-2", children: [
              "Next ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "headline-sm block transition-colors", children: nextArticle.title })
          ] }) : /* @__PURE__ */ jsx("div", { className: "bg-white hidden sm:block" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-4", "aria-label": "More stories", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-16 space-y-10", children: [
        relatedArticles.length > 0 && /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
          /* @__PURE__ */ jsx(SectionHead, { title: `More in ${sectionName}`, to: sectionPath, as: "h3" }),
          /* @__PURE__ */ jsx("ul", { className: "divide-y divide-neutral-200 -mt-1", children: relatedArticles.map((related) => /* @__PURE__ */ jsx("li", { className: "py-4 first:pt-0", children: /* @__PURE__ */ jsx(CompactStory, { article: related }) }, related.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionHead, { title: "Most Read", as: "h3" }),
          /* @__PURE__ */ jsx("div", { className: "-mt-3.5", children: /* @__PURE__ */ jsx(RankedList, { articles: mostRead }) })
        ] }),
        /* @__PURE__ */ jsx(NewsletterBox, {})
      ] }) })
    ] }) }),
    relatedArticles.length > 0 && /* @__PURE__ */ jsxs("section", { className: "container-page mt-16", "aria-label": `More in ${sectionName}`, children: [
      /* @__PURE__ */ jsx(SectionHead, { title: `More from ${sectionName}`, to: sectionPath }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8", children: relatedArticles.map((related) => /* @__PURE__ */ jsx(StandardStory, { article: related, size: "md", excerpt: true }, related.id)) })
    ] })
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
    ...getActiveCategories().map((c) => `/category/${c.slug}`),
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
    ...getActiveCategories().map((c) => ({
      path: `/category/${c.slug}`,
      lastmod: articles.find((a) => a.category === c.id)?.publishedAt ?? "",
      priority: 0.8,
      changefreq: "daily"
    })),
    ...articles.map((a) => ({
      path: `/article/${a.id}`,
      lastmod: a.publishedAt,
      priority: 0.7,
      changefreq: "weekly",
      images: [absoluteImage(a.imageUrl)]
    }))
  ];
}
export {
  getNewsEntries,
  getRoutes,
  getSitemapEntries,
  render
};
