import BerthCard from "@/components/berthCard";
import berths from "@/Data/Berths";

export default function Berths() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {berths.map((berth) => (
          <BerthCard
            key={berth.id}
            name={berth.name}
            allowedCargo={berth.allowedCargo}
            maxLength={berth.maxLength}
            maxDraft={berth.maxDraft}
          />
        ))}
      </div>
    </div>
  );
}