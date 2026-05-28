import { BarChart3, Database, Layers, TrendingUp, ShieldAlert, Award, LucideIcon } from "lucide-react";

export interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  link: string;
  color: string;
  metric: string;
  powerBiLink?: string;
  fullDescription?: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export const projectsData: ProjectDetails[] = [
  {
    id: "oppo-mobiles",
    title: "Oppo Mobiles - Sales & Stock Analysis",
    category: "Business Intelligence",
    description: "Power BI dashboard for sales & stock Analysis.",
    icon: BarChart3,
    tech: ["Power BI", "DAX", "SQL Server"],
    link: "/projects/oppo-mobiles",
    color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/20",
    metric: "20% Sales Growth",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiZjFhZWUyM2MtM2FhMy00NzAyLTg3MmEtNThkODY2OGFjN2E4IiwidCI6IjE3NzgyZjMxLTJlMmQtNGZkNi05NThmLWNhNDY0NDE4NDVjNyJ9",
    fullDescription: {
      situation: "OPPO Mobiles wanted clear visibility into both sales trends and stock levels to improve operational decisions.",
      task: "My job was to design a Power BI report that could break down sales and inventory in an actionable way.",
      action: "I built a two-page dashboard—one page analyzing sales by region, city, and distributor, and the other page tracking stock levels by model, distributor, and average sales.",
      result: "The report gave OPPO’s leadership a unified tool to track sales growth and optimize inventory, leading to more informed business decisions."
    }
  },
  {
    id: "sunidra-mattresses",
    title: "Sunidra Mattresses - Sales Performance & Web Analytics",
    category: "Business Intelligence",
    description: "Comprehensive dashboard connecting sales data with web traffic insights.",
    icon: TrendingUp,
    tech: ["Power BI", "DAX", "Web Analytics", "Excel"],
    link: "/projects/sunidra-mattresses",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/20",
    metric: "Data-Driven Decisions",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiMjViZjk3Y2QtMWZlZS00OWIzLWEyZjQtNTA1NTlkZTIzNzQ3IiwidCI6IjE3NzgyZjMxLTJlMmQtNGZkNi05NThmLWNhNDY0NDE4NDVjNyJ9",
    fullDescription: {
      situation: "Sunidra Mattresses needed to understand both sales performance and web engagement to improve strategy.",
      task: "I was responsible for building a comprehensive dashboard that connected sales data with web traffic insights.",
      action: "I created two Power BI dashboards—one breaking down sales by product, region, and channel, and another analyzing website sessions, bounce rates, and devices.",
      result: "The report empowered business leaders to optimize both sales strategy and digital marketing, leading to more data-driven decisions across both areas."
    }
  },
  {
    id: "supply-chain-unsold-stock",
    title: "Supply Chain & Unsold Stock SOP Engine",
    category: "Data Science & Auditing",
    description: "Designed a PostgreSQL discrepancy discovery workflow, uncovering 2.8 crores in lost/unsold stock. Structured company-wide inventory tracking SOPs.",
    icon: ShieldAlert,
    tech: ["Python", "PostgreSQL", "Pandas", "SOPs"],
    link: "#",
    color: "from-red-500/20 to-orange-500/20 text-red-400 border-red-500/20",
    metric: "2.8Cr Saved"
  },
  {
    id: "hero-cycles-purchase-excellence",
    title: "Hero Cycles Purchase Excellence Suite",
    category: "Operations Analytics",
    description: "Engineered critical BI reports optimizing production and materials procurement. Supported SAP-HANA data migration with 100% data integrity.",
    icon: Layers,
    tech: ["Power BI", "SAP-HANA", "Data Migration"],
    link: "#",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20",
    metric: "25% Process Efficiency"
  },
  {
    id: "jp-morgan-client-account",
    title: "JP Morgan Client Account Service Insights",
    category: "Client Analytics",
    description: "Built client service level agreement dashboards for JP Morgan (CAS), exceeding turnaround goals and earning Mphasis' Summit Individual Award.",
    icon: Award,
    tech: ["Power BI", "SQL Server", "Excel Analytics"],
    link: "#",
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/20",
    metric: "50% Reporting Turnaround"
  },
  {
    id: "logistics-delivery-adoptions",
    title: "Logistics Delivery & Adoptions Engine",
    category: "Supply Chain Optimization",
    description: "Optimized sheet dispatch routines to raise transit accuracy by 20%. Commenced corporate transition to Power BI workflows, improving report agility by 40%.",
    icon: Database,
    tech: ["Google Sheets API", "App Script", "Power BI"],
    link: "#",
    color: "from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/20",
    metric: "+20% Delivery Accuracy"
  },
  {
    id: "oppo-goal-scheme",
    title: "Oppo Goal Scheme Management App",
    category: "Retail Analytics",
    description: "Designed and launched the Oppo Goal application to enhance distributor scheme transparency. Boosted channel sales volumes by 15% across PB region.",
    icon: BarChart3,
    tech: ["MIS Systems", "VBA & SQL", "Goal App", "Advanced Excel"],
    link: "#",
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/20",
    metric: "15% Retailer Growth"
  }
];
