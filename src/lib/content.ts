// Fortiv Solutions content master — sourced from PRD

export type SolutionId = "salesdrive" | "leadestate" | "leadiq" | "chatflow" | "eventsync";

export interface Solution {
  id: SolutionId;
  name: string;
  category: string;
  fullTitle: string;
  description: string;
  metrics: { value: string; label: string }[];
  features: { title: string; description: string }[];
  deploymentSteps: { title: string; description: string }[];
  workflow: { title: string; description: string; timing?: string }[];
  comparison: { dimension: string; without: string; with: string }[];
  featured?: boolean;
}

export const solutions: Solution[] = [
  {
    id: "salesdrive",
    name: "SalesDrive",
    category: "Sales & Lead Management",
    fullTitle: "Enterprise Multi-Channel Lead Automation & Autonomous Response Infrastructure",
    description:
      "SalesDrive replaces fragmented lead management with an autonomous AI conversion infrastructure. Capturing multi-channel enterprise leads in real-time, the system instantly qualifies, responds, and schedules meetings without human latency.",
    metrics: [
      { value: "3x", label: "More Test Drive Bookings" },
      { value: "70%", label: "Faster Lead Response" },
      { value: "24/7", label: "Always-On Coverage" },
    ],
    features: [
      { title: "Multi-Channel Lead Capture", description: "Capture leads from WhatsApp, Facebook Ads, Google Ads, website chatbot, and walk-ins into one unified AI-powered pipeline." },
      { title: "Instant AI Response", description: "Respond to every enquiry within seconds — 24/7 — with personalised, human-like messages that match your brand voice." },
      { title: "Automated Test Drive Booking", description: "AI qualifies the lead and books test drives directly into your team's calendar — without a single manual step." },
      { title: "AI Lead Scoring", description: "Every lead gets an intelligent score based on intent signals, engagement, and behaviour." },
      { title: "Smart Follow-Up Sequences", description: "Automated follow-ups over WhatsApp, SMS, and email keep prospects engaged until they convert." },
      { title: "CRM & Analytics Dashboard", description: "Real-time dashboards show lead volume, conversion rates, and booking stats — integrated with your CRM." },
    ],
    deploymentSteps: [
      { title: "Connect Your Channels", description: "We integrate SalesDrive with your WhatsApp Business, ad accounts, website form, and CRM in under 48 hours." },
      { title: "AI Qualifies & Responds", description: "The moment a lead comes in, AI captures details, scores their intent, and sends a personalised response — instantly." },
      { title: "Book & Track Conversions", description: "Test drives get booked automatically. Your team only sees qualified, high-intent leads ready to close." },
    ],
    workflow: [
      { title: "Lead Arrives", description: "Lead arrives via WhatsApp, Facebook Ads, Google Ads, website chatbot, or walk-in.", timing: "Instant" },
      { title: "AI Reads Intent", description: "AI extracts key signals — model of interest, budget, urgency.", timing: "< 2 sec" },
      { title: "Scoring", description: "Lead is scored 0–100 based on intent, engagement and behaviour patterns.", timing: "< 3 sec" },
      { title: "Personalised Response", description: "AI sends a personalised reply matching brand voice on the original channel.", timing: "< 5 sec" },
      { title: "Qualifying Conversation", description: "AI asks model preference, budget range, test-drive preference and captures responses.", timing: "1–5 min" },
      { title: "Auto Booking", description: "If lead score above threshold, test drive is booked directly into the calendar.", timing: "< 60 sec" },
      { title: "CRM Sync", description: "CRM is updated with full lead context. Sales rep notified only for high-intent leads.", timing: "Real-time" },
    ],
    comparison: [
      { dimension: "Lead Response Time", without: "2–4 hours", with: "< 60 seconds" },
      { dimension: "Lead Sources Managed", without: "1–2 manually", with: "5+ channels, unified" },
      { dimension: "Follow-Up Consistency", without: "Manual, irregular", with: "100% automated" },
      { dimension: "After-Hours Coverage", without: "None", with: "24/7" },
      { dimension: "Test Drive Booking", without: "Manual phone/WhatsApp", with: "Fully automated" },
      { dimension: "Sales Team Time on Admin", without: "~60%", with: "< 10%" },
    ],
  },
  {
    id: "leadestate",
    name: "LeadEstate",
    category: "Sales & Lead Management",
    fullTitle: "Real Estate & Hospitality Autonomous Funnel Orchestration",
    description:
      "LeadEstate orchestrates the complex property buying cycle autonomously. Purpose-built for high-volume enterprise developers and hospitality groups, it captures leads across all digital channels, qualifies intent instantaneously, and nurtures long-cycle prospects.",
    metrics: [
      { value: "80%", label: "Lead Response Rate" },
      { value: "5x", label: "Faster Follow-Up" },
      { value: "40%", label: "More Conversions" },
    ],
    features: [
      { title: "Property Portal Integration", description: "Capture leads from 99acres, MagicBricks, Housing.com, and your website automatically." },
      { title: "Instant AI Qualification", description: "AI asks the right questions — budget, timeline, location — and scores each lead." },
      { title: "Virtual Tour Integration", description: "AI dispatches virtual property tours via WhatsApp or email to warm up leads." },
      { title: "Long-Cycle Nurture", description: "AI follows up over weeks and months with relevant content and personalised messages." },
      { title: "Hotel Lead Management", description: "For hospitality brands — capture MICE, wedding, and room booking enquiries instantly." },
      { title: "Pipeline Analytics", description: "Track every lead's journey from first enquiry to site visit to booking." },
    ],
    deploymentSteps: [
      { title: "Connect Your Lead Sources", description: "We integrate with property portals, your website, WhatsApp, and ad platforms automatically." },
      { title: "AI Qualifies & Nurtures", description: "AI responds instantly, asks qualifying questions, and schedules follow-up touchpoints." },
      { title: "Warm Leads, Fast Closures", description: "Your sales team only handles warm, site-visit-ready leads with full context." },
    ],
    workflow: [
      { title: "Enquiry Arrives", description: "From 99acres, MagicBricks, Housing.com, NoBroker, website, or WhatsApp.", timing: "Instant" },
      { title: "Personalised Acknowledgement", description: "AI replies within 2 minutes, 24/7.", timing: "< 2 min" },
      { title: "Qualification", description: "Budget, timeline, location, property type, bedrooms.", timing: "5 min" },
      { title: "Lead Scoring", description: "Buy-readiness and fit calculated.", timing: "< 5 sec" },
      { title: "Virtual Tour Dispatch", description: "High-score leads get a virtual tour link.", timing: "< 10 sec" },
      { title: "Long-Cycle Nurture", description: "Medium-score leads enter weeks-long nurture sequences.", timing: "Weeks" },
      { title: "Site Visit Booked", description: "Qualified leads get a site visit on the agent's calendar.", timing: "Auto" },
      { title: "CRM Push", description: "Full context and transcript pushed to CRM.", timing: "Real-time" },
    ],
    comparison: [
      { dimension: "Portal Lead Response Time", without: "4+ hours", with: "< 2 minutes, 24/7" },
      { dimension: "Lead Qualification", without: "Manual calls", with: "Automated AI" },
      { dimension: "Virtual Tour Delivery", without: "Manual, slow", with: "Instant AI dispatch" },
      { dimension: "Long-Cycle Nurture", without: "None or ad-hoc", with: "Automated over weeks" },
      { dimension: "MICE & Hotel Enquiries", without: "Manual, inconsistent", with: "Instant proposals" },
      { dimension: "Qualified Site Visits / mo", without: "Low", with: "3x more" },
    ],
  },
  {
    id: "leadiq",
    name: "LeadIQ",
    category: "Sales & Lead Management",
    fullTitle: "Predictive Lead Qualification & Automated Pipeline Routing",
    description:
      "LeadIQ eradicates pipeline bloat and wasted sales hours. Deploying predictive behavioral modeling trained on your historical conversion data, it evaluates every inbound prospect against 20+ signals — instantly routing high-intent deals to senior closers.",
    metrics: [
      { value: "60%", label: "Fewer Wasted Sales Calls" },
      { value: "2x", label: "Higher Conversion Rate" },
      { value: "90%", label: "Qualification Accuracy" },
    ],
    features: [
      { title: "AI Lead Scoring", description: "Score every lead 0–100 based on intent, budget signals, engagement and fit — in real time." },
      { title: "Intent Detection", description: "Identify buying intent from chat, forms, and page behaviour before sales picks up the phone." },
      { title: "Custom Qualification Criteria", description: "Define BANT, CHAMP, or custom — LeadIQ enforces it consistently across every lead." },
      { title: "Smart Lead Routing", description: "Hot leads to senior reps, mid-tier into nurture, junk disqualified — without manual triage." },
      { title: "Real-Time Scoring Dashboard", description: "Entire pipeline ranked by AI score, with drill-down into score drivers." },
      { title: "CRM Integration", description: "Push scores, status, and summaries directly into Salesforce, HubSpot, Zoho." },
    ],
    deploymentSteps: [
      { title: "Define ICP", description: "We build the qualification criteria and scoring model tailored to your sales process." },
      { title: "AI Scores Every Lead", description: "As leads enter from any channel, LeadIQ scores them in real time and routes by priority." },
      { title: "Sales Works Smarter", description: "Reps spend time only on qualified, high-intent leads with full context." },
    ],
    workflow: [
      { title: "Lead Enters", description: "From any channel — web form, WhatsApp, phone, ad form, walk-in.", timing: "Instant" },
      { title: "Signal Extraction", description: "20+ intent and fit signals extracted: title, company size, behaviour, budget, timeline.", timing: "< 2 sec" },
      { title: "Real-Time Scoring", description: "Trained on your historical data — produces a 0–100 score.", timing: "< 3 sec" },
      { title: "Routing Rules Fire", description: "75+ to closers, 40–74 to nurture, < 40 disqualified or cold pool.", timing: "Instant" },
      { title: "Dashboard Updates", description: "Pipeline ranked by score with score-driver drill-down.", timing: "Real-time" },
      { title: "CRM Receives", description: "Score, qualification label, summary — no manual entry.", timing: "Real-time" },
    ],
    comparison: [
      { dimension: "Qualification Method", without: "Manual review", with: "20+ AI signals, real-time" },
      { dimension: "Time to Qualify One Lead", without: "15–45 min", with: "< 3 sec" },
      { dimension: "Routing Accuracy", without: "Inconsistent", with: "90%" },
      { dimension: "Low-Intent Lead Waste", without: "~55% of sales time", with: "Eliminated" },
      { dimension: "CRM Lead Data Quality", without: "Incomplete", with: "AI-enriched profile" },
      { dimension: "Conversion Rate", without: "Baseline", with: "2x improvement" },
    ],
  },
  {
    id: "chatflow",
    name: "ChatFlow",
    category: "Communication & Automation",
    fullTitle: "Autonomous WhatsApp Conversational AI Infrastructure",
    description:
      "ChatFlow transforms WhatsApp into a highly scalable, autonomous enterprise communication channel. Capable of handling infinite concurrent sessions, it qualifies enterprise leads, resolves support SLA tickets, and executes complex escalation policies.",
    metrics: [
      { value: "90%", label: "Query Auto-Resolution" },
      { value: "24/7", label: "Always Active" },
      { value: "3x", label: "Faster Response Time" },
    ],
    featured: true,
    features: [
      { title: "Human-Like AI Conversations", description: "Natural language AI that understands context and responds like your best CS rep." },
      { title: "Lead Capture & Qualification", description: "Engage prospects, collect contact details, score them — all within WhatsApp." },
      { title: "24/7 Support Automation", description: "Resolve FAQs, order status, appointment confirmations automatically." },
      { title: "Smart Human Escalation", description: "Complex conversations hand off to a human with full context preserved." },
      { title: "Follow-Up Sequences", description: "Multi-step WhatsApp campaigns — cart recovery, reminders, re-engagement." },
      { title: "Deep Integrations", description: "Connect to CRM, OMS, booking tools, and payment gateways for end-to-end automation." },
    ],
    deploymentSteps: [
      { title: "Set Up Your AI Agent", description: "We configure personality, knowledge base and workflows trained on your products and rules." },
      { title: "AI Handles Every Conversation", description: "Every WhatsApp message gets an instant, intelligent response." },
      { title: "Monitor, Optimise, Scale", description: "Track metrics, resolution rates, satisfaction. Scale without adding headcount." },
    ],
    workflow: [
      { title: "Customer Sends Message", description: "Any time, any day.", timing: "Instant" },
      { title: "Intent Classification", description: "NLP identifies category: lead, support, booking, FAQ, escalation.", timing: "< 1 sec" },
      { title: "FAQ / Standard Support", description: "AI generates a human-like response. Resolution logged.", timing: "< 3 sec" },
      { title: "Lead Qualification", description: "Collects name, contact, requirement, budget, and timeline.", timing: "2 min" },
      { title: "Score & Route", description: "Qualified lead scored and routed to the right CRM pipeline.", timing: "< 5 sec" },
      { title: "Human Escalation", description: "Complex conversations passed to a human with full transcript.", timing: "Seamless" },
      { title: "Follow-Up Sequences", description: "Reminders, cart recovery, appointment confirmations triggered.", timing: "Auto" },
      { title: "Analytics Dashboard", description: "All conversations and outcomes tracked.", timing: "Live" },
    ],
    comparison: [
      { dimension: "WhatsApp Response Time", without: "Hours (business hrs)", with: "< 3 sec, 24/7" },
      { dimension: "Query Resolution Rate", without: "~40% (human)", with: "90% automated" },
      { dimension: "Concurrent Conversations", without: "Limited by staff", with: "Infinite" },
      { dimension: "Lead Qualification via Chat", without: "None", with: "Fully automated" },
      { dimension: "Escalation Process", without: "No context transfer", with: "Full transcript passed" },
      { dimension: "Support Costs", without: "High (staff-heavy)", with: "65% reduction" },
    ],
  },
  {
    id: "eventsync",
    name: "EventSync",
    category: "Booking & Scheduling",
    fullTitle: "Enterprise Event Logistics & Autonomous Voice Agent Platform",
    description:
      "EventSync automates massive-scale event logistics. From point of registration, the AI orchestrates a multi-channel engagement pipeline — deploying autonomous voice calls and SMS to maximise attendance and execute post-event feedback analysis.",
    metrics: [
      { value: "40%", label: "Higher Attendance Rate" },
      { value: "80%", label: "Automated Confirmations" },
      { value: "60%", label: "Less Manual Work" },
    ],
    features: [
      { title: "Smart RSVP Management", description: "Capture registrations from forms, websites, WhatsApp — with confirmation and waitlisting." },
      { title: "AI Voice Calling", description: "AI makes personalised voice calls with reminders and logistics — sounding human." },
      { title: "Multi-Channel Reminders", description: "Automated reminders via WhatsApp, SMS, and email — timed to reduce no-shows." },
      { title: "Attendance Prediction", description: "AI predicts attendance from RSVP and engagement patterns." },
      { title: "Digital Check-In", description: "QR code check-in with real-time attendance tracking." },
      { title: "Post-Event Feedback", description: "AI collects feedback via WhatsApp with NPS scoring and sentiment analysis." },
    ],
    deploymentSteps: [
      { title: "Set Up Your Event", description: "Create your event, configure RSVP forms, set timelines and AI call scripts." },
      { title: "AI Manages Everything", description: "AI sends confirmations, schedules reminders, makes calls — automatically, 24/7." },
      { title: "Maximise Attendance & Insights", description: "Real-time tracking during the event, automated post-event feedback campaigns." },
    ],
    workflow: [
      { title: "RSVP Submitted", description: "Via form, website, or WhatsApp.", timing: "Instant" },
      { title: "Confirmation Sent", description: "Personalised confirmation with event details and instructions.", timing: "< 5 sec" },
      { title: "Reminder Sequence", description: "3-stage: 7 days, 2 days, day-of. Multi-channel.", timing: "Scheduled" },
      { title: "AI Voice Call", description: "Personalised, human-sounding logistics call with confirmation request.", timing: "1–2 days prior" },
      { title: "Day-Of Check-In", description: "QR check-in link sent. Attendance updated in real time.", timing: "Live" },
      { title: "Attendance Prediction", description: "Dashboard updates throughout the day.", timing: "Real-time" },
      { title: "Post-Event Feedback", description: "AI sends NPS and feedback request. Sentiment analysis run.", timing: "Auto" },
    ],
    comparison: [
      { dimension: "RSVP Management", without: "Manual spreadsheet", with: "Fully automated" },
      { dimension: "Reminder Delivery", without: "Manual, inconsistent", with: "3-stage automated" },
      { dimension: "Attendance Rate", without: "55–60%", with: "80–82%" },
      { dimension: "Guest Comms Staff", without: "Full-time coordinator", with: "Fully replaced by AI" },
      { dimension: "Post-Event Feedback", without: "Low response", with: "Automated, high response" },
      { dimension: "No-Show Rate", without: "High", with: "Reduced via AI calls" },
    ],
  },
];

export const industries = [
  { id: "real-estate", name: "Real Estate", focus: "Lead qualification, property matching, document generation, virtual tours, market analysis", outcome: "3x site visits, 80% admin reduction" },
  { id: "law-firms", name: "Law Firms", focus: "Contract review, compliance automation, client intake, case management, legal research", outcome: "80% faster contract review, 90% lead leakage reduction" },
  { id: "events-hospitality", name: "Events & Hospitality", focus: "Voice AI concierge, booking, vendor coordination, guest comms, real-time analytics", outcome: "85% less help desk overhead, 4.8/5 guest satisfaction" },
  { id: "healthcare", name: "Healthcare", focus: "Patient onboarding, scheduling, compliance docs, follow-ups, insurance verification", outcome: "75% faster onboarding, 60% fewer claim denials" },
  { id: "manufacturing", name: "Manufacturing", focus: "Supply chain, quality control, predictive maintenance, inventory, production scheduling", outcome: "99.9% product quality, 85% less unplanned downtime" },
] as const;

export const integrationsRow1 = [
  "AWS", "MongoDB", "Vercel", "Figma", "Linear", "Notion",
  "OpenAI", "GitHub", "Slack", "Stripe", "PostgreSQL",
];

export const integrationsRow2 = [
  "Redis", "ERP", "WhatsApp", "HubSpot", "Pipedrive", "Salesforce",
  "Zendesk", "Snowflake", "Shopify", "Intercom", "Zapier",
];

export const fortivCore = [
  { num: "01", title: "Process Audit", description: "We map your business processes to identify high-ROI automation opportunities and hidden bottlenecks." },
  { num: "02", title: "Solution Architecture", description: "We engineer custom autonomous agents tailored specifically to your data, software, and compliance needs." },
  { num: "03", title: "Rapid Integration", description: "We launch automated workflows directly into your existing enterprise systems with zero downtime." },
  { num: "04", title: "Scale & Optimize", description: "We continuously monitor and refine your AI agents so they become more efficient as your business grows." },
];

export const stats = [
  { value: "40+", label: "Companies Automated" },
  { value: "40%", label: "Operational Cost Reduction" },
  { value: "10x", label: "Faster Workflow Execution" },
  { value: "24/7", label: "Uninterrupted Operations" },
  { value: "4.7", label: "Client Satisfaction" },
];

export const capabilities = [
  { title: "Omnichannel Support", description: "Reduce ticket volume by 60%. Intelligent AI agents resolve Tier 1 issues instantly and capture qualified B2B leads.", badge: "24/7 Active" },
  { title: "AI Voice Receptionist", description: "Eliminate missed opportunities. AI voice assistants manage inbound sales calls, qualify requirements, and route to executives.", badge: "Calls: 13" },
  { title: "Automated Sales Scheduling", description: "Accelerate your sales pipeline. AI integrates with your CRM to book product demos and technical deep-dives instantly." },
  { title: "Intelligent Email Triage", description: "Never lose a lead. AI automatically reads, categorises, and drafts responses to vendor inquiries and enterprise RFPs." },
  { title: "Automated Lead Scoring", description: "Stop wasting sales bandwidth. Instantly grade B2B leads based on custom criteria and route hot prospects to closers.", badge: "0 / 4 connected" },
  { title: "Enterprise Integration", description: "No data silos. Our automation seamlessly connects with your existing ERP, Salesforce, Slack, and internal databases." },
];

export const differentiators = [
  { title: "Turnkey AI Automation", description: "We architect, build, deploy, and maintain your B2B AI systems — fully managed so your team can focus on growth." },
  { title: "Industry-Specific Logic", description: "Custom AI models engineered for your sector's distinct processes, completely outperforming generic tools." },
  { title: "Measurable Cost Reduction", description: "Our autonomous workflows typically reduce operational overhead by 40% within the first quarter." },
  { title: "Enterprise-Grade Scalability", description: "Built for growing businesses with enterprise-level data privacy and compliance." },
];

export const BOOK_CALL_URL = "https://cal.com/fortiv-solutions/30min";
