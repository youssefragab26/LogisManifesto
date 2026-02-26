export default function BerthCard({
  name = "—",
  allowedCargo = [],
  maxLength = "—",
  maxDraft = "—",
}) {
  const cargoLabel = Array.isArray(allowedCargo)
    ? allowedCargo.join(", ")
    : allowedCargo || "—";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
            Berth
          </span>
        </div>
        <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
          Max Draft {maxDraft !== "—" ? `${maxDraft} m` : "—"}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
            Berth Name
          </p>
          <p className="text-sm font-semibold text-slate-100 truncate">
            {name || "—"}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
            Allowed Cargo
          </p>
          <p className="mt-1 text-xs text-slate-300">
            {cargoLabel || "—"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Max Length
            </p>
            <p className="text-sm text-slate-200">
              {maxLength !== "—" ? `${maxLength} m` : "—"}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Max Draft
            </p>
            <p className="text-sm text-slate-200">
              {maxDraft !== "—" ? `${maxDraft} m` : "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}