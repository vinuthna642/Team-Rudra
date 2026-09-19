export interface SlideData {
  id: number;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  headline: string;
  activeScreenTab?: 'home' | 'soil' | 'scan' | 'market' | 'storage' | 'architecture';
  bulletPoints: {
    heading: string;
    description: string;
    tag?: string;
  }[];
  keyMetrics?: {
    value: string;
    label: string;
    change?: string;
  }[];
  speakerNotes: string;
}

export const PRESENTATION_SLIDES: SlideData[] = [
  {
    id: 1,
    slug: "title",
    title: "SmartSoil & Crop Care",
    category: "AI & IoT AgriTech Platform",
    subtitle: "AI-Powered Kisan Assistant & Agricultural Intelligence Platform",
    headline: "Transforming Smallholder Agriculture through IoT Soil Telemetry, Vision AI Disease Diagnosis, and APMC Market Transparency",
    activeScreenTab: 'home',
    bulletPoints: [
      {
        heading: "Author & Lead Developer",
        description: "Ponduri Vinuthna (Kisan AI Research & Development Lead)",
        tag: "Founder / Lead"
      },
      {
        heading: "Core Innovation",
        description: "Dual-mode IoT soil sensor telemetry coupled with Mobile Computer Vision for 94.2% accurate crop disease detection.",
        tag: "AI + IoT"
      },
      {
        heading: "Market Integration",
        description: "Direct APMC Mandi price discovery with localized SMS/Voice target alerts, bypassing commission agents.",
        tag: "Fair Value"
      },
      {
        heading: "Localized Accessibility",
        description: "PWA architecture designed for rural bandwidth, featuring voice prompts and multilingual UI (Telugu, Hindi, English).",
        tag: "Multilingual"
      }
    ],
    keyMetrics: [
      { value: "94.2%", label: "Vision AI Accuracy", change: "Rice Blast" },
      { value: "30%+", label: "Post-Harvest Loss Prevention", change: "Via Cold Storage" },
      { value: "₹2,380", label: "Live APMC Paddy Ticker", change: "+2.4% Today" },
      { value: "Dual Mode", label: "IoT Sensor + Manual Lab Kit", change: "Universal Access" }
    ],
    speakerNotes: "Good morning esteemed panel and jury. I am Vinuthna, presenting 'SmartSoil & Crop Care', an integrated AI-driven Kisan Assistant engineered to address the critical friction points across the agricultural lifecycle: soil nutrition depletion, late pest diagnosis, mandi price opacity, and post-harvest logistical decay."
  },
  {
    id: 2,
    slug: "problem-statement",
    title: "The Agrarian Dilemma",
    category: "Problem Statement & Need Analysis",
    subtitle: "Systemic Vulnerabilities Facing Indian Smallholder Farmers",
    headline: "Over 86% of Indian farmers are smallholders facing asymmetrical information, soil degradation, and fragmented post-harvest infrastructure.",
    activeScreenTab: 'home',
    bulletPoints: [
      {
        heading: "Soil Depletion & Unbalanced Fertilization",
        description: "Farmers over-apply chemical Nitrogen (N) while lacking instant NPK/pH soil testing kits, causing soil acidification and 25% yield drops.",
        tag: "Agronomic Hazard"
      },
      {
        heading: "Diagnostic Latency in Crop Pathogens",
        description: "Diseases like Rice Blast (Pyricularia oryzae) propagate across entire hectares before agronomist visits, destroying up to 40% of seasonal harvest.",
        tag: "Crop Pathology"
      },
      {
        heading: "Mandi Price Asymmetry & Intermediary Exploitation",
        description: "Middlemen in physical APMC yards exploit lack of real-time price feeds, forcing distress selling below government MSP.",
        tag: "Financial Loss"
      },
      {
        heading: "Cold Chain & Transit Disconnect",
        description: "Perishable produce rots due to zero visibility on nearby vacant cold storages and localized mini-truck transport.",
        tag: "Logistics Gap"
      }
    ],
    keyMetrics: [
      { value: "₹1.5 Lakh Cr", label: "Annual Post-Harvest Loss in India", change: "Wasted Produce" },
      { value: "14-21 Days", label: "Average Soil Lab Turnaround", change: "Too Slow For Sowing" },
      { value: "22-38%", label: "Middleman Commission Erosion", change: "Farmer Revenue Cut" },
      { value: "40%", label: "Crop Yield at Risk to Fungal Blasts", change: "Unchecked Outbreaks" }
    ],
    speakerNotes: "Smallholder farmers face a four-fold crisis: unscientific fertilizer application due to slow soil testing labs, sudden disease outbreaks that wipe out crops before experts arrive, price manipulation by mandi middlemen, and lack of nearby cold chain logistics. SmartSoil solves each problem in one unified mobile PWA."
  },
  {
    id: 3,
    slug: "dashboard-home",
    title: "Kisan Mobile Dashboard",
    category: "Mobile Application Interface (Screen 1)",
    subtitle: "Intuitive, High-Contrast Farmer PWA Designed for Rural Bandwidth",
    headline: "Instant glanceable telemetry: Weather alerts, live soil health indicators, and single-tap access to AI diagnostic modules.",
    activeScreenTab: 'home',
    bulletPoints: [
      {
        heading: "Dynamic Weather & Agro-Advisory Header",
        description: "Localized weather warning ticker (e.g., 'Heavy rainfall advisory for Vijayawada region. Ensure proper drainage') mitigating flash flooding.",
        tag: "Real-time Safety"
      },
      {
        heading: "One-Touch Diagnostic Actions",
        description: "Prominent high-contrast action triggers: 'Test Soil Now' and 'Scan Leaf AI' optimized for sunlight readability and one-handed field use.",
        tag: "UX Accessibility"
      },
      {
        heading: "Modular Quick Services Hub",
        description: "Six core agricultural micro-services: Soil & NPK, Disease AI, APMC Mandi, Cold Storage, Buyers & FPO Directory, and Hyperlocal Weather.",
        tag: "6 Core Services"
      },
      {
        heading: "At-A-Glance Soil Health Status",
        description: "Instant telemetry card displaying Moisture (42%), Soil pH (6.8), and NPK Composite Score (Good) with color-coded health badges.",
        tag: "Health Gauge"
      }
    ],
    keyMetrics: [
      { value: "42%", label: "Real-time Moisture Level", change: "Optimal Condition" },
      { value: "pH 6.8", label: "Soil Acidity / Alkalinity", change: "Neutral / Fertile" },
      { value: "3 Languages", label: "Multilingual Engine", change: "English, Telugu, Hindi" },
      { value: "< 1.2s", label: "PWA Load Time on 2G/3G", change: "Offline Capable" }
    ],
    speakerNotes: "Here is Screen 1: The SmartSoil Kisan Assistant home screen. Notice the personalized greeting for Kisan Vinuthna, urgent weather advisories tailored for the Vijayawada agricultural belt, quick service shortcuts, and an instant summary showing 42% moisture and 6.8 pH."
  },
  {
    id: 4,
    slug: "soil-analyzer",
    title: "Dual Mode Soil Analyzer",
    category: "Precision Agronomy Engine (Screen 2)",
    subtitle: "Hybrid IoT Telemetry & Manual Lab Kit Mathematical Modeling",
    headline: "Eliminating 2-week lab delays with instant NPK chemical modeling and intelligent crop suitability matching.",
    activeScreenTab: 'soil',
    bulletPoints: [
      {
        heading: "Dual Input Architecture (IoT + Manual)",
        description: "Farmers can connect wireless capacitive/optical field probes via Bluetooth/LoRa or manually enter values from government soil health cards.",
        tag: "Universal Access"
      },
      {
        heading: "Multi-Parameter Soil Profiling",
        description: "Evaluates Moisture (40%), pH Level (6.5), Nitrogen (120 kg/ac), Phosphorus (45 kg/ac), and Potassium (75 kg/ac) against regional soil benchmarks.",
        tag: "NPK Analytics"
      },
      {
        heading: "Adaptive Irrigation Calibration",
        description: "Calculates precise water replenishment requirements (+10% Maintenance Adjustment) based on evapotranspiration and soil porosity.",
        tag: "Water Saving"
      },
      {
        heading: "Predictive Crop Suitability Engine",
        description: "Calculates probabilistic compatibility for sowing: Paddy (Rice) at 96% Match, Cotton at 89% Match, and Maize at 82% Match.",
        tag: "Algorithmic Yield"
      }
    ],
    keyMetrics: [
      { value: "96%", label: "Paddy (Rice) Match Score", change: "Optimal Choice" },
      { value: "89%", label: "Cotton Match Score", change: "Secondary Option" },
      { value: "+10%", label: "Water Maintenance Adjustment", change: "Prevents Over-Watering" },
      { value: "0 Seconds", label: "Lab Wait Time Elimination", change: "Instant Report Card" }
    ],
    speakerNotes: "Screen 2 demonstrates our Dual Mode Soil Analyzer. A farmer toggles between IoT probes and manual soil kit values. Entering 40% moisture, 6.5 pH, and N:120/P:45 instantly generates an actionable Soil Testing Report Card and ranks crop compatibility, showing Paddy at 96% suitability."
  },
  {
    id: 5,
    slug: "disease-ai",
    title: "AI Leaf Vision Diagnosis",
    category: "Computer Vision & Plant Pathology (Screen 3)",
    subtitle: "Edge Deep Learning for Early Crop Pathogen Detection & Prescriptive Care",
    headline: "Smartphone camera image classification identifies lethal pathogens like Rice Blast with 94.2% confidence and prescribes precise dosages.",
    activeScreenTab: 'scan',
    bulletPoints: [
      {
        heading: "Sub-Second Edge Inference",
        description: "Farmers snap a photo of affected foliage using any budget smartphone camera. Lightweight CNN models run on-device or via rapid cloud inference.",
        tag: "Low Latency"
      },
      {
        heading: "Pathogen Identification: Rice Blast",
        description: "Correctly identifies Pyricularia oryzae at 94.2% confidence, preventing devastating panicle blast and foliar lesions across the crop field.",
        tag: "94.2% Confidence"
      },
      {
        heading: "Symptom Feature Extraction",
        description: "Pinpoints diagnostic markers: 'Diamond-shaped lesions with gray centers on leaves and stem nodes', distinguishing it from Brown Spot or Bacterial Blight.",
        tag: "Morphological AI"
      },
      {
        heading: "Prescriptive Agronomic Treatment",
        description: "Delivers exact chemical dosage: 'Spray Tricyclazole 75% WP @ 0.6g per liter of water. Avoid excessive nitrogen fertilizer application.'",
        tag: "Actionable Care"
      }
    ],
    keyMetrics: [
      { value: "94.2%", label: "Diagnosis Confidence", change: "Pyricularia oryzae" },
      { value: "< 1.8s", label: "Image Classification Speed", change: "Edge Mobile CNN" },
      { value: "0.6g/L", label: "Recommended Dosage", change: "Tricyclazole 75% WP" },
      { value: "35%+", label: "Harvest Salvaged", change: "Early Stage Detection" }
    ],
    speakerNotes: "Screen 3 is our AI Computer Vision module. The farmer captures a leaf photo. Within two seconds, the model identifies Rice Blast at 94.2% confidence, explains the diamond-shaped lesion symptoms, and gives a clear agronomic prescription: Tricyclazole 75% WP at 0.6g per liter."
  },
  {
    id: 6,
    slug: "mandi-market",
    title: "APMC Mandi Price Alerts",
    category: "Market Intelligence & Price Discovery (Screen 4)",
    subtitle: "Direct AgMarkNet API Integration & Dynamic Price Target Notifications",
    headline: "Eliminating information asymmetry with real-time APMC price feeds and automated SMS price alerts when crop values surge.",
    activeScreenTab: 'market',
    bulletPoints: [
      {
        heading: "Live Multi-Mandi Price Streaming",
        description: "Streams real-time modal prices: Paddy Common (Vijayawada APMC: ₹2,380/q, +2.4%), Red Chilli Teja (Guntur APMC: ₹18,500/q, +5.1%), Cotton (Warangal: ₹7,450/q), Maize (Khammam: ₹2,250/q).",
        tag: "Live APMC Feed"
      },
      {
        heading: "Target Price Alert Trigger",
        description: "Farmers set an alert for Paddy / Rice (వరి). When the regional APMC crosses the set target threshold, automated push and SMS notifications trigger.",
        tag: "Automated Push"
      },
      {
        heading: "Intermediary Disintermediation",
        description: "Arming farmers with live mandi pricing during negotiations prevents local village aggregators from pocketing up to 25% illicit arbitrage.",
        tag: "Fair Value"
      },
      {
        heading: "Search & Regional Filtering",
        description: "Instant search across all APMC mandis in Andhra Pradesh and Telangana with commodity filtering for staple and commercial cash crops.",
        tag: "Regional Coverage"
      }
    ],
    keyMetrics: [
      { value: "₹18,500", label: "Guntur Red Chilli (Teja)", change: "+5.1% Intra-day" },
      { value: "₹2,380", label: "Vijayawada Paddy Price", change: "+2.4% vs MSP" },
      { value: "100%", label: "Price Transparency", change: "Direct APMC Feeds" },
      { value: "Instant", label: "Target Price Alerts", change: "SMS & WhatsApp" }
    ],
    speakerNotes: "Screen 4 is our APMC Mandi Intelligence hub. By integrating live feeds from Vijayawada, Guntur, Warangal, and Khammam, farmers track real-time commodity fluctuations. The farmer can set a custom target price alert for Paddy, receiving an immediate notification to sell at peak value."
  },
  {
    id: 7,
    slug: "cold-storage",
    title: "Cold Storage & Logistics",
    category: "Post-Harvest Infrastructure (Screen 5)",
    subtitle: "Hyperlocal Cold Storage Booking & Verified Farm Transport",
    headline: "Preventing post-harvest produce decay by connecting farmers with nearby temperature-controlled warehouses and GPS-tracked logistics.",
    activeScreenTab: 'storage',
    bulletPoints: [
      {
        heading: "Hyperlocal Storage Discovery",
        description: "Discovers verified warehouses within proximity, such as 'Sri Srinivasa Cold Storage' on NH-16 Mangalagiri (4.2 km away) with 450 MT capacity at ₹120/bag/month.",
        tag: "Warehousing"
      },
      {
        heading: "Instant Space Reservation",
        description: "Farmers can digitally reserve pallet and bag allocations prior to transport, preventing trucks from being turned away at full-capacity gates.",
        tag: "Direct Booking"
      },
      {
        heading: "GPS-Tracked Farm-to-Gate Transport",
        description: "Integrated dispatch for verified agri-transport vehicles (e.g., 'Kisan Express Transport Truck', 2-ton capacity, ₹22/km) with one-tap driver calling.",
        tag: "Transit Logistics"
      },
      {
        heading: "Economic Spoilage Mitigation",
        description: "Reduces post-harvest vegetable and grain degradation from the national average of 30% down to under 5%, preserving farmer equity.",
        tag: "Waste Reduction"
      }
    ],
    keyMetrics: [
      { value: "4.2 km", label: "Distance to Nearest Storage", change: "NH-16 Mangalagiri" },
      { value: "450 MT", label: "Available Capacity", change: "₹120/bag/month" },
      { value: "₹22/km", label: "Transport Rate", change: "Verified GPS Truck" },
      { value: "< 5%", label: "Target Post-Harvest Spoilage", change: "Down from 30%" }
    ],
    speakerNotes: "Screen 5 resolves post-harvest decay. Farmers find nearby cold storage facilities like Sri Srinivasa Cold Storage just 4.2 km away in Mangalagiri, check real-time available capacity of 450 MT, and summon GPS-enabled Kisan Express transport trucks with transparent ₹22/km rates."
  },
  {
    id: 8,
    slug: "system-architecture",
    title: "System Architecture & Flow",
    category: "End-to-End Block Diagram & Tech Stack",
    subtitle: "Decoupled Microservice Flow from Mobile PWA to Transparent Output",
    headline: "A scalable, fault-tolerant architectural pipeline connecting field data to market settlements.",
    activeScreenTab: 'architecture',
    bulletPoints: [
      {
        heading: "Layer 1: Farmer Mobile Interface (PWA)",
        description: "Lightweight progressive web app supporting multilingual UI (English, Telugu, Hindi) with offline service workers and edge caching for rural connectivity.",
        tag: "Frontend Layer"
      },
      {
        heading: "Layer 2: Marketplace Gateway & Router",
        description: "High-throughput API gateway handling authentication, TLS security, rate-limiting, and distributed Redis state caching for fast mobile responses.",
        tag: "Gateway Layer"
      },
      {
        heading: "Layer 3A: Live APMC Mandi Engine",
        description: "Continuous polling and ingestion microservice for government AgMarkNet feeds, computing rolling weighted averages and price alerts.",
        tag: "Market Engine"
      },
      {
        heading: "Layer 3B: FPO & Buyer Directory",
        description: "Verified database of Farmer Producer Organizations, agricultural cooperatives, and institutional bulk purchasers for direct contract negotiation.",
        tag: "Buyer Network"
      },
      {
        heading: "Layer 4: Transparent Value Output",
        description: "Final outcome: Empowers farmers with fair price discovery, direct institutional contracts, zero middleman leakages, and optimized farm ROI.",
        tag: "Socio-Economic Impact"
      }
    ],
    keyMetrics: [
      { value: "4 Layers", label: "Decoupled Architecture", change: "End-to-End Secure" },
      { value: "99.9%", label: "Uptime Reliability", change: "Resilient Offline Cache" },
      { value: "+28%", label: "Average Income Enhancement", change: "Direct Fair Trade" },
      { value: "Ready", label: "Deployment State", change: "Production Scalable" }
    ],
    speakerNotes: "Finally, Slide 8 reveals our complete System Block Diagram. From the multilingual Farmer PWA, requests traverse the Marketplace Gateway, branching into the Live APMC Mandi Engine and verified FPO Directory, converging onto our Transparent Value Output—delivering fair prices and dignity to the Indian kisan."
  }
];
