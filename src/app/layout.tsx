import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maninder Karda | Senior Data Analyst & Power BI Developer",
  description: "Portfolio of Maninder Karda, Senior Data Analyst & Power BI Developer with 12+ years of experience in Power BI, SQL, Python, and Data Science.",
  keywords: ["Maninder Karda", "Data Analyst", "Power BI Developer", "Business Intelligence", "DAX", "SQL", "Portfolio"],
  authors: [{ name: "Maninder Karda" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
