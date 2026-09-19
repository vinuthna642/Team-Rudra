export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
  badge: string;
  description: string;
  tags: string[];
  keyHighlights: string[];
  role: string;
  impactMetrics?: { label: string; value: string }[];
  extendedDetails?: {
    problem: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface SkillGroup {
  title: string;
  iconName: string;
  skills: string;
  description?: string;
  items: { name: string; level?: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  skillsCovered: string[];
}

export interface ExtracurricularItem {
  id: string;
  title: string;
  items: string[];
  description: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  name: "Pisini Visweswara Rao",
  firstName: "Visweswara Rao",
  fullName: "Pisini Visweswara Rao",
  brandName: "P. VISWESWARA RAO",
  title: "Computer Science Engineering Student & Full-Stack Developer",
  badgeText: "B.Tech CSE Student • KL University (CGPA: 9.17)",
  headline: "Hi, I'm Pisini Visweswara Rao",
  subheadline: "Motivated Computer Science Engineering student at KL University with expertise in full-stack development and data structures & algorithms.",
  
  about: {
    p1: "Motivated Computer Science Engineering student at KL University (2023-2027) with a 9.17 CGPA and a strong grounding in Data Structures, Algorithms, and Object-Oriented Programming.",
    p2: "Proven track record developing full-stack web applications with React.js, Spring Boot, Python, and MySQL. Passionate about engineering secure financial systems, predictive market applications, and actively participating in hackathons and college initiatives.",
    stats: [
      { label: "B.Tech CSE (KL University)", value: "9.17 CGPA" },
      { label: "Intermediate (Sri Chaitanya)", value: "91% Score" },
      { label: "Cloud Certification", value: "AWS Certified" },
      { label: "Database Credential", value: "HackerRank SQL" }
    ]
  },

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "KL University",
      period: "2023 - 2027",
      score: "CGPA: 9.17 / 10",
      description: "Core studies in Data Structures & Algorithms, Object-Oriented Programming (OOP), Full-Stack Web Development, and Database Management Systems.",
      badges: ["CGPA: 9.17", "2023-2027", "KL University", "CSE"]
    },
    {
      degree: "Intermediate (Higher Secondary Education)",
      institution: "Sri Chaitanya Junior College",
      period: "2021 - 2023",
      score: "Percentage: 91%",
      description: "Higher Secondary curriculum emphasizing Mathematics, Physics, and Chemistry with 91% academic distinction.",
      badges: ["91% Distinction", "2021-2023", "Sri Chaitanya"]
    }
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      code: "AWS-CCP",
      description: "Foundational knowledge of cloud concepts, security, core AWS services, architectural principles, and billing models."
    },
    {
      name: "HackerRank SQL Skill Certification",
      issuer: "HackerRank",
      code: "HR-SQL",
      description: "Demonstrated proficiency in complex SQL query composition, relational schema filtering, joins, aggregations, and subqueries."
    }
  ],

  toolkit: [
    {
      title: "Programming",
      iconName: "code",
      skills: "Java, Python, MySQL",
      description: "Object-oriented and scripting languages utilized for algorithmic problem solving and robust database persistence.",
      items: [
        { name: "Java", level: "OOP & Backend" },
        { name: "Python", level: "Scripting & ML" },
        { name: "MySQL", level: "Relational Queries" }
      ]
    },
    {
      title: "Web Technologies",
      iconName: "layers",
      skills: "HTML, CSS, JavaScript, React.js, Spring Boot",
      description: "Modern component-driven user interfaces connected with scalable enterprise REST backends.",
      items: [
        { name: "React.js", level: "Frontend UI" },
        { name: "Spring Boot", level: "Enterprise Backend" },
        { name: "JavaScript", level: "ES6+" },
        { name: "HTML5 & CSS3", level: "Semantic UI" },
        { name: "RESTful APIs", level: "Integration" }
      ]
    },
    {
      title: "Tools & Workflow",
      iconName: "wrench",
      skills: "GitHub, VS Code, Git",
      description: "Collaborative developer tooling, distributed version control, and modular coding environments.",
      items: [
        { name: "GitHub", level: "Collaboration" },
        { name: "VS Code", level: "Primary IDE" },
        { name: "Git", level: "Version Control" },
        { name: "MySQL Workbench", level: "Database Design" }
      ]
    },
    {
      title: "Core Subjects",
      iconName: "cpu",
      skills: "Data Structures & Algorithms, OOP",
      description: "Foundational computer science principles applied in analytical problem solving and application architecture.",
      items: [
        { name: "Data Structures", level: "Algorithms" },
        { name: "OOP Principles", level: "Inheritance & Polymorphism" },
        { name: "DBMS", level: "Relational Design" },
        { name: "System Design", level: "Foundations" }
      ]
    }
  ],

  projects: [
    {
      id: "digital-wallet-app",
      title: "Digital Wallet Application",
      subtitle: "Secure Full-Stack Wallet & Transaction System",
      category: "Full-Stack",
      iconName: "wallet",
      badge: "React.js | Spring Boot | MySQL",
      description: "Developed a secure full-stack digital wallet application with user authentication, secure peer-to-peer balance transactions, and responsive React.js interfaces backed by Spring Boot RESTful APIs and MySQL.",
      tags: ["React.js", "Spring Boot", "MySQL", "REST APIs", "Java", "Authentication"],
      role: "Full-Stack Developer",
      keyHighlights: [
        "Developed a secure full-stack digital wallet application with transactional integrity",
        "Implemented authentication, secure transactions, and RESTful APIs using Spring Boot",
        "Built responsive React.js interfaces integrated seamlessly with MySQL database backend"
      ],
      impactMetrics: [
        { label: "Architecture", value: "Spring Boot & React" },
        { label: "Database", value: "MySQL ACID" },
        { label: "Security", value: "Token Auth" }
      ],
      extendedDetails: {
        problem: "Users require a dependable, secure, and intuitive digital wallet to transfer funds, monitor real-time balances, and review transaction records without latency or state inconsistency.",
        architecture: [
          "Spring Boot backend exposing RESTful endpoints for user authentication, wallet funding, and money transfers",
          "ACID-compliant MySQL relational transactions preventing double-spending and ledger inconsistencies",
          "React.js single-page frontend delivering real-time balance updates, instant form validations, and clean responsive layouts",
          "Structured error handling and transaction confirmation dialogues ensuring user clarity"
        ],
        outcomes: [
          "Delivered an end-to-end full-stack fintech prototype simulating realistic banking workflows",
          "Achieved seamless communication between React frontend and Spring Boot micro-services"
        ]
      }
    },
    {
      id: "stock-market-prediction",
      title: "Stock Market Prediction Web Application",
      subtitle: "Data-Driven Market Analysis & Investor Notification System",
      category: "AI & Data",
      iconName: "trending-up",
      badge: "React.js | Python | MySQL",
      description: "Developed a stock prediction application using historical market data, integrating React frontend, Python backend, and MySQL database with analytical dashboards and automated email notifications.",
      tags: ["React.js", "Python", "MySQL", "Data Analysis", "Dashboards", "Email Alerts"],
      role: "Full-Stack & Analytics Developer",
      keyHighlights: [
        "Developed a stock prediction application using historical market data trends",
        "Integrated React frontend, Python backend, and MySQL database for persistent market records",
        "Designed interactive dashboards and automated email notifications for market events"
      ],
      impactMetrics: [
        { label: "Engine", value: "Python Analytics" },
        { label: "Visualization", value: "React Dashboard" },
        { label: "Alerts", value: "Automated Email" }
      ],
      extendedDetails: {
        problem: "Retail investors require timely visibility into equity market trends and automatic alerts when monitored stocks exhibit significant trajectory movements.",
        architecture: [
          "Python analytics modules parsing historical equity records and computing trend forecast models",
          "MySQL database maintaining historical OHLC price quotes, ticker symbols, and investor alert preferences",
          "Dynamic React.js dashboard presenting visual market trends, forecast lines, and equity performance metrics",
          "Automated background email notification service notifying users when market conditions match alert criteria"
        ],
        outcomes: [
          "Integrated Python numerical processing seamlessly with a modern React visual interface",
          "Implemented automated notification pipelines keeping investors alerted without manual screen checking"
        ]
      }
    }
  ],

  experience: [
    {
      id: "klu-hackathon-volunteer",
      title: "Volunteer - KL University Hackathon",
      organization: "KL University",
      period: "KL University",
      duration: "Event Volunteer",
      description: "Assisted in organizing hackathons and coordinating participants, ensuring smooth event workflow and technical track support.",
      highlights: [
        "Assisted in organizing university hackathons and coordinating participating student teams across competitive coding tracks.",
        "Collaborated with faculty organizers to schedule workshop segments, submission evaluation windows, and presentation logistics.",
        "Provided front-line participant support, ensuring technical issues and team requirements were swiftly resolved."
      ],
      skillsCovered: ["Event Organization", "Participant Coordination", "Team Collaboration", "Problem Solving", "Technical Operations"]
    }
  ],

  extracurriculars: [
    {
      id: "sports",
      title: "Sports",
      items: ["Cricket", "Volleyball"],
      description: "Active player in competitive cricket and volleyball matches, cultivating teamwork, quick decision-making, and physical endurance.",
      iconName: "trophy"
    },
    {
      id: "club-activities",
      title: "Club Activities",
      items: ["Active Member, Focus Club"],
      description: "Active participant in Focus Club student activities, organizing collaborative peer learning groups, workshops, and technical discussions.",
      iconName: "users"
    },
    {
      id: "public-speaking",
      title: "Public Speaking",
      items: ["Participated in Debate Competitions"],
      description: "Engaged in competitive debate competitions, developing persuasive argumentation, logical synthesis, and articulate public presentation.",
      iconName: "mic"
    },
    {
      id: "community-service",
      title: "Community Service",
      items: ["Volunteered in College Initiatives"],
      description: "Committed volunteer contributing to college social responsibility programs, campus drives, and student assistance initiatives.",
      iconName: "heart"
    }
  ],

  contact: {
    email: "2300032285cseh1@gmail.com",
    phone: "+91 6304496511",
    location: "KL University, Vaddeswaram, Andhra Pradesh, India",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};
