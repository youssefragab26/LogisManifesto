'use client';

import Navbar from "./Navbar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* App header bar */}
      <Navbar />

      {/* Main app content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
