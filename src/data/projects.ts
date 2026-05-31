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
    id: "connect-broadband-churn-analysis",
    title: "Connect Broadband - Churn & Call Center Analytics",
    category: "Telecom Analytics",
    description: "Power BI dashboard to help business stakeholders understand customer retention challenges and service performance.",
    icon: Database,
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Customer Churn Analysis", "Telecom Analytics", "Customer Retention", "Call Center Analytics", "KPI Development", "Data Visualization"],
    link: "/projects/connect-broadband-churn-analysis",
    color: "from-blue-500/20 to-sky-500/20 text-blue-400 border-blue-500/20",
    metric: "Customer Retention",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiNjkzZjFlYjEtN2MxMC00OTQxLTgwNjktOGQ3NjRjZjNjOGViIiwidCI6IjE3NzgyZjMxLTJlMmQtNGZkNi05NThmLWNhNDY0NDE4NDVjNyJ9",
    githubLink: "https://github.com/maninderkarda/Churn-Calls-Analysis-Connect_Broadband",
    summary: "Developed a Power BI Customer Churn & Call Center Analytics Dashboard for Connect Broadband to help business stakeholders understand customer retention challenges and service performance. The solution provides insights into churn trends by customer demographics, tenure, payment methods, and internet services, while also tracking call center KPIs such as resolution rates, response times, agent performance, and customer satisfaction. The dashboard enables data-driven decisions to reduce customer churn, improve service quality, and enhance customer experience.",
    fullDescription: {
      situation: "Connect Broadband faced challenges in understanding customer churn patterns and evaluating customer support performance. Business teams lacked a centralized reporting solution to identify why customers were leaving and how effectively customer issues were being resolved.",
      task: "My responsibility was to develop an analytical dashboard that would provide visibility into customer churn behavior and call center performance, helping stakeholders improve customer retention and service quality.",
      action: "I designed and developed a two-page Power BI dashboard:\n\n### Churn Analysis Dashboard\n\n* Analyzed customer churn by tenure groups, age categories, payment methods, contact types, and internet services.\n* Tracked churn count, churn percentage, monthly revenue loss, and customer demographics.\n* Identified high-risk customer segments and services contributing to churn.\n\n### Call Analysis Dashboard\n\n* Monitored call center KPIs including average speed of answer, call volume, average talk duration, resolution rates, and unresolved cases.\n* Evaluated agent performance through satisfaction ratings, resolved calls, and handling efficiency.\n* Analyzed call topics to identify common customer issues and support trends.\n\nThe dashboard included interactive filtering by month and topic, enabling users to perform detailed operational analysis.",
      result: "The solution provided management with a unified view of customer retention and support operations. Stakeholders could identify churn drivers, quantify revenue loss from customer attrition, monitor service quality, evaluate agent performance, and prioritize improvement initiatives. The dashboard supported data-driven decision-making aimed at reducing churn, improving customer satisfaction, and increasing operational efficiency."
    }
  },
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
    id: "hero-cycles-manufacturing-analytics",
    title: "Hero Cycles - Manufacturing Analytics Dashboard",
    category: "Manufacturing Analytics",
    description: "Developed a comprehensive Power BI Manufacturing Analytics Dashboard for Hero Cycles to monitor production performance.",
    icon: Layers,
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Manufacturing Analytics", "Production Planning", "Quality Management", "Machine Utilization Analysis", "KPI Development", "Data Visualization"],
    link: "/projects/hero-cycles-manufacturing-analytics",
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/20",
    metric: "Operational Efficiency",
    powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiMjM5YWEzMzMtYTUwOS00ODhhLWI5MGItZDQzOTBjMTQ1ZDk1IiwidCI6IjE3NzgyZjMxLTJlMmQtNGZkNi05NThmLWNhNDY0NDE4NDVjNyJ9",
    githubLink: "https://github.com/maninderkarda/Manufacturing-Analysis-Hero-Cycles-",
    summary: "Developed a comprehensive Power BI Manufacturing Analytics Dashboard for Hero Cycles to monitor production performance, quality metrics, and machine utilization across manufacturing operations. The solution provides real-time visibility into production output, downtime, efficiency, and defect rates through interactive dashboards. Business users can analyze performance by machine, supervisor, product, shift, and department, enabling faster decision-making, improved operational efficiency, reduced downtime, and enhanced product quality.",
    fullDescription: {
      situation: "Hero Cycles' manufacturing team relied on multiple reports and spreadsheets to track production output, machine performance, downtime, and quality metrics. This made it difficult for management to identify production bottlenecks, monitor machine efficiency, and quickly address quality issues.",
      task: "My responsibility was to design and develop a centralized reporting solution that would provide stakeholders with a complete view of manufacturing operations, including production performance, quality management, machine utilization, and operational efficiency.",
      action: "I developed a four-page Power BI dashboard consisting of:\n\n* **Overview Dashboard** to monitor production output, average daily production, downtime, efficiency rates, and defect percentages.\n* **Quality Management Dashboard** to analyze defects by supervisor, machine, and shift, helping identify quality-related issues.\n* **Machine Utilization Dashboard** to track machine efficiency, downtime, and operational performance across production lines.\n* **Detailed Analysis Dashboard** providing transaction-level visibility with drill-down capabilities for production, quality, and machine performance data.\n\nThe solution incorporated dynamic filters for Year, Month, Machine, Supervisor, Product Type, and Shift, allowing users to perform detailed root-cause analysis and operational monitoring.",
      result: "The dashboard provided manufacturing leadership with a single source of truth for production and quality analytics. It enabled faster identification of underperforming machines, excessive downtime, and quality issues, helping stakeholders improve production planning, monitor operational efficiency, reduce defects, and make data-driven decisions across manufacturing operations."
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
  }
];
