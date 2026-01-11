import { Icons } from "@/components/icons";
import {
  HomeIcon,
  FileTextIcon,
  BriefcaseIcon,
  TrophyIcon,
  MicIcon,
} from "lucide-react";

export const DATA = {
  name: "David Urbano",
  initials: "DU",
  url: "https://davidurbano.me",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/barcelona",
  description:
    "Chief Growth Officer @ imagin (CaixaBank) | 4M+ Users | Architect of Spain's #1 Mobile-Only Bank | Fintech Speaker",
  summary:
    "David Urbano is the Chief Growth & Digital Sales Officer at [imagin](https://imagin.com)—CaixaBank's mobile-only bank—leading the strategy that has scaled the platform to 4M+ users, making it Spain's most awarded digital banking app. With over 20 years transforming digital banking, he founded imaginBank in 2016, pioneering Spain's first 100% mobile bank. His expertise spans Growth Strategy, User Acquisition, Product-Led Growth, and Digital Transformation, building bridges between traditional banking trust and fintech innovation.",
  avatarUrl: "/me.jpeg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#experience", icon: BriefcaseIcon, label: "Experience" },
    { href: "/#education", icon: FileTextIcon, label: "Education" },
    { href: "/#achievements", icon: TrophyIcon, label: "Achievements" },
    { href: "/#speaking", icon: MicIcon, label: "Speaking" },
  ],
  contact: {
    email: "durbanom@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-urbano-3119231/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/davidurbano",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:durbanom@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "imagin (CaixaBank)",
      href: "https://imagin.com",
      badges: ["CGO"],
      location: "Barcelona, Spain",
      title: "Chief Growth & Digital Sales Officer",
      logoUrl: "/imagin.png",
      start: "2024",
      end: "Present",
      description:
        "Leading imagin's growth engine with full P&L ownership across Product, Marketing, and Performance teams. Reporting directly to CEO, driving the strategy to consolidate imagin as Spain's leading digital bank for young users. Scaled user base from 3.5M to 4M+ active users (+14% YoY). Launched AI-powered personalization driving +23% engagement. Reduced Customer Acquisition Cost (CAC) by 18%. Maintained NPS score of 72 (vs. industry average of 45). 89% user retention rate at 12 months.",
    },
    {
      company: "imagin (CaixaBank)",
      href: "https://imagin.com",
      badges: ["Founder"],
      location: "Barcelona, Spain",
      title: "Director of imaginBank",
      logoUrl: "/imagin.png",
      start: "2016",
      end: "2020",
      description:
        "Founded and scaled Spain's first mobile-only bank from concept to market leadership. Led the full go-to-market strategy, product development, and team building. Achieved 0 to 2M+ users in 4 years (organic growth-led strategy). #1 Mobile Banking App in Spain (App Store & Google Play rankings). Celent Model Bank Award for Innovation. Global Finance 'Best Digital Bank' nomination. Built founding team from 0 to 30+ specialists. First Spanish bank with 100% mobile onboarding (5-minute account opening). Pioneered biometric authentication in Spanish banking.",
    },
    {
      company: "CaixaBank",
      href: "https://caixabank.com",
      badges: [],
      location: "Barcelona, Spain",
      title: "Mobile Banking and Digital Networks Director",
      logoUrl: "/caixabank.png",
      start: "2012",
      end: "2016",
      description:
        "Led the mobile banking division during the critical smartphone adoption era, building the foundation that would later become imaginBank. Launched CaixaBank's first native mobile banking apps (iOS & Android). Pioneered mobile payments integration before Apple Pay existed in Spain. Built digital networks strategy connecting physical and digital channels. Grew mobile banking users from early adopters to mainstream adoption.",
    },
    {
      company: "e-laCaixa (CaixaBank)",
      href: "https://caixabank.com",
      badges: [],
      location: "Barcelona, Spain",
      title: "Mobile Banking Director",
      logoUrl: "/caixabank.png",
      start: "2008",
      end: "2010",
      description:
        "Early pioneer of mobile banking at CaixaBank during the pre-smartphone era. Laid the groundwork for mobile-first banking strategy. Developed first mobile banking services for feature phones. Created business case for mobile banking investment. Established mobile as strategic channel within the organization.",
    },
  ],
  education: [
    {
      school: "IESE Business School",
      href: "https://www.iese.edu",
      degree: "Executive Education Program",
      logoUrl: "/iese.png",
      start: "",
      end: "",
    },
    {
      school: "Universitat Politècnica de Catalunya (UPC)",
      href: "https://www.upc.edu",
      degree: "Engineering / Business Studies",
      logoUrl: "/upc.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "imagin Platform",
      href: "https://imagin.com",
      dates: "2016 - Present",
      active: true,
      description:
        "Spain's leading mobile-only bank with 4M+ users. A lifestyle platform beyond traditional banking, featuring 100% mobile onboarding (5-minute account opening), biometric authentication, gamification for financial education, and integrated lifestyle services.",
      technologies: [
        "Mobile Banking",
        "Fintech",
        "Product-Led Growth",
        "AI Personalization",
      ],
      links: [
        {
          type: "Website",
          href: "https://imagin.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gen Z Banking Innovation",
      href: "https://imagin.com",
      dates: "2020 - Present",
      active: true,
      description:
        "Pioneering digital banking for Gen Z and Millennials. Embedding financial services into the moments that matter to young people: their first job, studying abroad, becoming financially independent. Banking that is invisible, instant, and empowering.",
      technologies: [
        "User Acquisition",
        "Retention Marketing",
        "Customer Experience",
        "Data-Driven Marketing",
      ],
      links: [
        {
          type: "Website",
          href: "https://imagin.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  publications: [
    {
      title: "Building Spain's First Mobile-Only Bank",
      dates: "2016 - Present",
      location: "imagin Case Study",
      description:
        "Featured in El País, La Vanguardia, Expansión as a case study for digital banking transformation. From zero to 4M+ users, pioneering biometric authentication, gamification, and mobile-first experiences in Spanish banking.",
      image: "",
      links: [],
    },
  ],
  leadership: [
    {
      title: "Celent Model Bank Award",
      dates: "2018",
      location: "Global Recognition",
      description:
        "International recognition for innovation in digital banking with imaginBank, awarded by Celent for outstanding achievement in financial services technology.",
      image: "",
      links: [],
    },
    {
      title: "Best Mobile Banking App in Spain",
      dates: "Multiple Years",
      location: "App Store & Google Play",
      description:
        "imagin consistently ranked as #1 Mobile Banking App in Spain across multiple consecutive years, recognized for user experience, innovation, and customer satisfaction.",
      image: "",
      links: [],
    },
    {
      title: "Global Finance Best Digital Bank Nomination",
      dates: "2019",
      location: "Global Finance Magazine",
      description:
        "Nominated for Global Finance's 'Best Digital Bank' award, recognizing imagin's innovation in the digital banking space.",
      image: "",
      links: [],
    },
    {
      title: "Fintech Speaker & Advisor",
      dates: "Ongoing",
      location: "International",
      description:
        "Available for speaking engagements on digital banking & fintech innovation, advisory roles for fintech startups and digital transformation, and conversations about the future of Gen Z finance.",
      image: "",
      links: [],
    },
  ],
} as const;
