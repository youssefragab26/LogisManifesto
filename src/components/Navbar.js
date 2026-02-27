import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 px-4 md:px-6 bg-slate-950 text-slate-50">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center bg-slate-900">
          <Image
            src="/logo.png"
            alt="LogisManifesto Logo"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-lg font-semibold tracking-tight">LogisManifesto</span>
      </div>
      <nav className="hidden md:flex items-center gap-1 ml-8">
        <Link href={"/"}>
          <span className="rounded-md px-3 py-2 text-sm font-medium text-sky-400 bg-sky-500/10">Home</span>
        </Link>
        <Link href={"/berths"}>
          <span className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">Berths</span>
        </Link>
        <Link href={"/berthRecommeadation"}>
          <span className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">Berth Recommendation</span>
        </Link>
        <Link href={"#"}>
          <span className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">Schedules</span>
        </Link>
        <Link href={"#"}>
          <span className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">Logistics Basics</span>
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <span className="hidden sm:inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
          Live
        </span>
        <button type="button" aria-label="Account" className="rounded-full h-8 w-8 flex items-center justify-center bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </button>
      </div>
    </header>
  )
}