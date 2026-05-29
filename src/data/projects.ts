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
  excelLink?: string;
  githubLink?: string;
  summary?: string;
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
    githubLink: "https://github.com/maninderkarda/Oppo_Mobiles_Sales_and_Stock_Analysis",
    summary: "This Power BI project was developed for OPPO, one of the world’s leading smartphone brands known for its innovation in mobile technology, strong retail distribution network, and growing presence across India. Founded in 2004, OPPO operates in more than 60 countries and focuses on delivering smart devices with advanced camera technology and user-centric experiences.\n\nThe dashboard was designed to help business stakeholders monitor sales performance and distributor stock availability across Punjab. It provides year-over-year sales comparisons at region, city, ZSM, ASM, and distributor levels, along with detailed inventory tracking by mobile model. The report enables decision-makers to identify high-performing regions, monitor stock coverage, track distributor sales trends, and optimize inventory planning using interactive Power BI visuals and filters.",
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
    githubLink: "https://github.com/maninderkarda/Sales_Analysis_Sunidra-Mattresses",
    summary: "This Power BI project was developed for Sunidra Mattresses, a premium mattress brand by Eastern Mattresses Pvt. Ltd., established in 1999 under Group Meeran. The company specializes in high-quality coir, foam, latex, and spring mattresses designed to enhance comfort and sleep wellness. Sunidra has built a strong presence in India through both retail and direct-to-consumer channels, focusing on innovation, product quality, and customer experience.\n\nThe dashboard was designed to provide a complete view of both sales performance and digital marketing effectiveness. The Sales Dashboard tracks revenue, profit margins, product performance, payment methods, and sales contribution across channels like Amazon, Flipkart, stores, and websites. The Web Marketing Dashboard analyzes customer engagement metrics such as sessions, bounce rates, exits, device usage, and traffic sources. Together, these interactive Power BI dashboards help business stakeholders identify high-performing products, optimize marketing channels, improve customer engagement, and support data-driven business decisions.",
    fullDescription: {
      situation: "Sunidra Mattresses needed to understand both sales performance and web engagement to improve strategy.",
      task: "I was responsible for building a comprehensive dashboard that connected sales data with web traffic insights.",
      action: "I created two Power BI dashboards—one breaking down sales by product, region, and channel, and another analyzing website sessions, bounce rates, and devices.",
      result: "The report empowered business leaders to optimize both sales strategy and digital marketing, leading to more data-driven decisions across both areas."
    }
  },
  {
    id: "ferns-and-petals-sales-analysis",
    title: "Ferns and Petals Sales Analysis",
    category: "Sales Analytics",
    description: "Interactive Excel dashboard uncovering key insights on sales trends, customer behavior, and product performance for FNP.",
    icon: BarChart3,
    tech: ["Excel", "Pivot Tables", "Data Analysis", "Dashboards"],
    link: "/projects/ferns-and-petals-sales-analysis",
    color: "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/20",
    metric: "10 Key Business Insights",
    excelLink: "https://1drv.ms/x/c/d0adda4c336acabb/IQSEG1x3KrioSr6atAXN903WAe2xcERVqiyiPc3PM6drT5o?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edaebf=rslc0",
    githubLink: "https://github.com/maninderkarda/Ferns-and-Petals-Sales-Analysis",
    summary: "This Excel dashboard project was developed to analyze sales data from Ferns and Petals (FNP), a company specializing in sending gifts for occasions like Diwali, Raksha Bandhan, Holi, Valentine's Day, Birthdays, and Anniversaries. The dataset includes details about products, orders, customers, and dates.\n\nThe dashboard was designed to uncover key insights related to sales trends, customer behavior, and product performance. It addresses critical business questions, such as total revenue, average order and delivery times, monthly sales fluctuations in 2023, top revenue-generating products, and customer spending habits. Additionally, it provides visibility into top cities by order volume, delivery time impacts based on order quantity, and product popularity across different occasions.",
    fullDescription: {
      situation: "Ferns and Petals needed actionable insights from a dataset containing product, order, customer, and date details to improve their sales strategy and optimize customer satisfaction.",
      task: "My task was to build a comprehensive Excel dashboard answering 10 key business questions, including revenue analysis, delivery time evaluation, monthly sales trends, and product popularity by occasion.",
      action: "I cleaned the raw data and developed an interactive Excel dashboard with dynamic charts and pivot tables. I created specific visualizations to track top products, customer spending, top cities by orders, and revenue comparisons across different occasions.",
      result: "The final dashboard provided stakeholders with clear, data-driven answers to all 10 key business questions, enabling more targeted marketing during specific occasions and better optimization of delivery processes."
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
  }
];
