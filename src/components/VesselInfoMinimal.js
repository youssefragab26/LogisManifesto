'use client';

import { useState } from "react";
import InformationCard from "./informationCard";

export default function VesselInfoMinimal() {
  const [vesselName, setVesselName] = useState('');
  const [imoNumber, setImoNumber] = useState('');
  const [vasselType, setVasselType] = useState('');
  const [LOA, setLOA] = useState('');
  const [draft, setDraft] = useState('');

  return (
    <div className="flex flex-1 flex-col md:flex-row gap-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Sidebar: live summary card */}
      <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 md:sticky md:top-20 md:self-start">
        <InformationCard
          vesselName={vesselName}
          imoNumber={imoNumber}
          vesselType={vasselType}
          LOA={LOA}
          draft={draft}
        />
      </aside>

      {/* Main form pane */}
      <section aria-labelledby="vessel-form-heading" className="flex-1 min-w-0 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.6)] space-y-8">
          {/* Header */}
          <header className="flex items-start justify-between gap-4">
            <div>
              <h2 id="vessel-form-heading" className="mt-1 text-lg font-semibold text-slate-50">
                Vessel Information
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Used to validate approach channel limits and berth compatibility.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              Live Draft Check
            </span>
          </header>

          {/* Vessel identification */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
              <span className="h-px w-4 bg-slate-700" />
              <span>Identification</span>
            </div>
            {/* Vessel Name */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="vessel-name" className="block text-xs font-medium text-slate-300">
                  Vessel Name <span className="text-rose-400" aria-hidden>*</span>
                </label>
                <input
                  id="vessel-name"
                  value={vesselName}
                  onChange={(e)=>{setVesselName(e.target.value)}}
                  type="text"
                  placeholder="e.g. MSC ILARIA"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none transition"
                  autoComplete="off"
                />
              </div>
              {/* IMO Number */}
              <div className="space-y-2">
                <label htmlFor="imo-number" className="block text-xs font-medium text-slate-300">
                  IMO Number <span className="text-rose-400" aria-hidden>*</span>
                </label>
                <input
                  id="imo-number"
                  value={imoNumber}
                  onChange={(e)=>{setImoNumber(e.target.value)}}
                  type="text"
                  placeholder="IMO9962586"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none transition tracking-widest"
                  autoComplete="off"
                />
              </div>
            </div>
          </section>

          {/* Technical details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
              <span className="h-px w-4 bg-slate-700" />
              <span>Technical Profile</span>
            </div>
            {/* Vessel Type */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label htmlFor="vessel-type" className="block text-xs font-medium text-slate-300">
                  Vessel Type
                </label>
                <select id="vessel-type" value={vasselType} onChange={(e)=>{setVasselType(e.target.value)}} className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-xs text-slate-50 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none">
                  <option value="">Select Vessel Type</option>
                  <option value="Container Ship">Container Ship</option>
                  <option value="Bulk carrier">Bulk carrier</option>
                  <option value="Tanker">Tanker</option>
                  <option value="Ro-Ro">Ro-Ro</option>
                  <option value="Passenger">Passenger</option>
                </select>
              </div>
              {/* LOA */}
              <div className="space-y-2">
                <label htmlFor="loa" className="block text-xs font-medium text-slate-300">
                  LOA (m)
                </label>
                <input
                  id="loa"
                  value={LOA}
                  onChange={(e)=>{setLOA(e.target.value)}}
                  type="number"
                  placeholder="330"
                  min={0}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none"
                />
              </div>
              {/* Draft */}
              <div className="space-y-2">
                <label htmlFor="draft" className="block text-xs font-medium text-slate-300">
                  Draft (m)
                </label>
                <input
                  id="draft"
                  value={draft}
                  onChange={(e)=>{setDraft(e.target.value)}}
                  type="number"
                  step="0.1"
                  min={0}
                  placeholder="15.7"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none"
                />
              </div>
            </div>
          </section>

          {/* Cargo & arrival */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
              <span className="h-px w-4 bg-slate-700" />
              <span>Cargo & Arrival</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="cargo-type" className="block text-xs font-medium text-slate-300">
                    Cargo Type
                  </label>
                  <select id="cargo-type" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-xs text-slate-50 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none">
                    <option value="">Select Cargo Type</option>
                    <option>Containers</option>
                    <option>Dry bulk</option>
                    <option>Liquid bulk</option>
                    <option>Ro-Ro</option>
                    <option>Passenger</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="eta" className="block text-xs font-medium text-slate-300">
                    ETA (local)
                  </label>
                  <input
                    id="eta"
                    type="datetime-local"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="last-port" className="block text-xs font-medium text-slate-300">
                    Last Port of Call
                  </label>
                  <input
                    id="last-port"
                    type="text"
                    placeholder="e.g. Rotterdam (NLRTM)"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40 outline-none"
                  />
                </div>

                <div className="space-y-1 text-[11px] text-slate-400">
                  <p>
                    Berth recommendation and tidal checks will be calculated on
                    the next step.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer actions */}
          <footer className="flex flex-col-reverse gap-3 pt-2 md:flex-row md:items-center md:justify-between">
            <button type="button" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800/80 transition">
              Save as Draft
            </button>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-500">
                Approx. berth window will be generated automatically.
              </span>
              <button type="button" className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition">
                Next
              </button>
            </div>
          </footer>
      </section>
    </div>
  );
}

