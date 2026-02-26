export default function InformationCard({ vesselName = '—', imoNumber = '—', vesselType = '—', LOA = '—', draft = '—' }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg space-y-4 shrink-0">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-semibold tracking-wide text-slate-400 uppercase">Vessel Information</span>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Vessel</p>
          <p className="text-sm font-semibold text-slate-100 truncate">{vesselName || '—'}</p>
          <p className="text-xs text-slate-400 font-mono mt-0.5">{imoNumber || '—'}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Type</p>
          <p className="text-sm text-slate-300">{vesselType || '—'}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">LOA</p>
            <p className="text-sm text-slate-300">{LOA ? `${LOA} m` : '—'}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Draft</p>
            <p className="text-sm text-slate-300">{draft ? `${draft} m` : '—'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
