import { Geist, Geist_Mono } from "next/font/google";
import "@/Styles/globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Port Logistics",
  description: "Vessel information and berth compatibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 min-h-screen`}>
        <Navbar />
        <main className="flex-1 min-h-0">
          {children}
        </main>
      </body>
    </html>
  );
}
