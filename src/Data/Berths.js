export const berths = [
  {
    id: 1,
    name: "Container Berth A",
    maxLength: 350,       // meters
    maxDraft: 15,         // meters
    allowedCargo: ["Container"],
    maxTEU: 8000,
    cranes: 6
  },
  {
    id: 2,
    name: "Container Berth B",
    maxLength: 300,
    maxDraft: 14,
    allowedCargo: ["Container"],
    maxTEU: 5000,
    cranes: 4
  },
  {
    id: 3,
    name: "Dry Bulk Berth",
    maxLength: 250,
    maxDraft: 12,
    allowedCargo: ["Bulk"],
    commodities: ["Grain", "Coal", "Iron Ore"]
  },
  {
    id: 4,
    name: "Liquid Bulk Berth",
    maxLength: 280,
    maxDraft: 13,
    allowedCargo: ["Tanker"],
    liquids: ["Oil", "Gas", "Chemicals"]
  },
  {
    id: 5,
    name: "General Cargo Berth",
    maxLength: 220,
    maxDraft: 11,
    allowedCargo: ["General Cargo"],
    warehouses: true
  },
  {
    id: 6,
    name: "Ro-Ro Berth",
    maxLength: 240,
    maxDraft: 10,
    allowedCargo: ["Ro-Ro"],
    ramp: true
  },
  {
    id: 7,
    name: "Multi-Purpose Berth",
    maxLength: 260,
    maxDraft: 12,
    allowedCargo: ["Container", "General Cargo", "Bulk"],
    cranes: 2
  },
  {
    id: 8,
    name: "Service Berth",
    maxLength: 150,
    maxDraft: 7,
    allowedCargo: ["Tugs", "Supply", "Pilot Boats"],
    services: ["Fuel", "Water", "Maintenance"]
  },
  {
    id: 9,
    name: "Passenger Berth",
    maxLength: 300,
    maxDraft: 9,
    allowedCargo: ["Passenger"],
    terminal: true
  },
  {
    id: 10,
    name: "Emergency Berth",
    maxLength: 400,
    maxDraft: 16,
    allowedCargo: ["Container", "Tanker", "Bulk", "General Cargo"],
    emergencyOnly: true
  }
];

export default berths;
